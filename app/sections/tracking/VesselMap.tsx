"use client";

import "leaflet/dist/leaflet.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.css";
import L from "leaflet";
import { useEffect, useMemo, useRef } from "react";
import { MapContainer, Marker, TileLayer, Tooltip, useMap, useMapEvents } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useTheme } from "../../../context/ThemeContext";
import type { VesselPosition } from "@/lib/vessel-types";

interface VesselMapProps {
  vessels: VesselPosition[];
  selectedMmsi: string | null;
  flyTarget: { latitude: number; longitude: number } | null;
  onSelect: (mmsi: string) => void;
  onClearSelection: () => void;
}

const FLY_ZOOM = 12;

const OSM_TILES = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

function createVesselIcon(vessel: VesselPosition, selected: boolean): L.DivIcon {
  const rotation = vessel.heading ?? vessel.course ?? 0;
  const color = selected ? "#3666b5" : "#38bdf8";
  const ring = selected
    ? '<circle cx="14" cy="14" r="12.5" fill="none" stroke="#3666b5" stroke-width="1.5" opacity="0.85"/>'
    : "";
  const html = `
    <div style="width:28px;height:28px;transform:rotate(${rotation}deg);transition:transform 0.4s ease;">
      ${ring}
      <svg width="28" height="28" viewBox="0 0 28 28" style="position:absolute;top:0;left:0;">
        <path d="M14 4 L20.5 23 L14 19 L7.5 23 Z"
          fill="${color}"
          stroke="${selected ? "#4a78c9" : "rgba(4,10,24,0.75)"}"
          stroke-width="1.3"
          stroke-linejoin="round"/>
      </svg>
    </div>`;
  return L.divIcon({
    className: "bantara-vessel-marker",
    html,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

function MapController({
  vessels,
  flyTarget,
}: {
  vessels: VesselPosition[];
  flyTarget: { latitude: number; longitude: number } | null;
}) {
  const map = useMap();
  const didInitialFit = useRef(false);

  useEffect(() => {
    const invalidate = () => map.invalidateSize();
    const timer = window.setTimeout(invalidate, 150);
    window.addEventListener("resize", invalidate);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", invalidate);
    };
  }, [map]);

  useEffect(() => {
    if (!didInitialFit.current && vessels.length > 0) {
      didInitialFit.current = true;
      const bounds = L.latLngBounds(
        vessels.slice(0, 200).map((v) => [v.latitude, v.longitude] as [number, number]),
      );
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 7 });
    }
  }, [vessels, map]);

  useEffect(() => {
    if (flyTarget) {
      // Zoom melewati ambang clustering (11) agar marker kapal langsung
      // terlihat individual, bukan di dalam cluster.
      map.flyTo([flyTarget.latitude, flyTarget.longitude], Math.max(map.getZoom(), FLY_ZOOM), {
        duration: 0.8,
      });
    }
  }, [flyTarget, map]);

  return null;
}

function ClickHandler({ onClick }: { onClick: () => void }) {
  useMapEvents({ click: () => onClick() });
  return null;
}

function createClusterIcon(cluster: { getChildCount(): number }): L.DivIcon {
  const count = cluster.getChildCount();
  const size = count > 100 ? 44 : count > 20 ? 38 : 32;
  return L.divIcon({
    className: "bantara-cluster-icon",
    html: `<div class="bantara-cluster" style="width:${size}px;height:${size}px;">
             <span>${count}</span>
           </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

export default function VesselMap({
  vessels,
  selectedMmsi,
  flyTarget,
  onSelect,
  onClearSelection,
}: VesselMapProps) {
  const { theme } = useTheme();
  const mapClass = theme === "dark" ? "bantara-map-dark" : "";
  const markerRefs = useRef<Map<string, L.Marker>>(new Map());

  const markers = useMemo(
    () =>
      vessels.map((v) => ({
        vessel: v,
        icon: createVesselIcon(v, v.mmsi === selectedMmsi),
      })),
    [vessels, selectedMmsi],
  );

  useEffect(() => {
    if (!selectedMmsi) return;
    const timer = window.setTimeout(() => {
      markerRefs.current.get(selectedMmsi)?.openTooltip();
    }, 900);
    return () => window.clearTimeout(timer);
  }, [selectedMmsi]);

  return (
    <MapContainer
      center={[0, 110]}
      zoom={2}
      minZoom={2}
      scrollWheelZoom
      className={mapClass}
      style={{ height: "100%", width: "100%", background: "var(--section-alt-bg)" }}
    >
      <ClickHandler onClick={onClearSelection} />
      <TileLayer attribution={TILE_ATTRIBUTION} url={OSM_TILES} />
      <MapController vessels={vessels} flyTarget={flyTarget} />
      <MarkerClusterGroup
        chunkedLoading
        showCoverageOnHover={false}
        maxClusterRadius={45}
        disableClusteringAtZoom={11}
        iconCreateFunction={createClusterIcon}
      >
        {markers.map(({ vessel, icon }) => (
          <Marker
            key={vessel.mmsi}
            position={[vessel.latitude, vessel.longitude]}
            icon={icon}
            zIndexOffset={vessel.mmsi === selectedMmsi ? 1000 : 0}
            eventHandlers={{ click: () => onSelect(vessel.mmsi) }}
            ref={(instance) => {
              if (instance) markerRefs.current.set(vessel.mmsi, instance);
              else markerRefs.current.delete(vessel.mmsi);
            }}
          >
            <Tooltip direction="top" offset={[0, -12]} opacity={1}>
              <span style={{ fontWeight: 600 }}>{vessel.name ?? "Kapal"}</span>
              <br />
              <span>MMSI {vessel.mmsi}</span>
              {vessel.speed !== undefined && (
                <>
                  <br />
                  <span>{vessel.speed.toFixed(1)} kn</span>
                </>
              )}
            </Tooltip>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

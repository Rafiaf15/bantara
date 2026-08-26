import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import VesselTracking from "../sections/tracking/VesselTracking";

export const metadata: Metadata = {
  title: "Vessel Tracking — BANTARA | Realtime Posisi Kapal",
  description:
    "Lacak posisi kapal secara near-real-time berbasis data AIS: nama kapal, MMSI, IMO, kecepatan, course, heading, tujuan, dan ETA.",
  robots: { index: true, follow: true },
};

export default function TrackingPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <VesselTracking />
      </main>
      <Footer />
    </>
  );
}

import { ImageResponse } from "next/og";

export const alt = "Madhuri Electrical — AC & Electrical Services in Visakhapatnam";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(135deg,#0B1F3A 0%,#0F2E5C 60%,#146EF5 140%)", color: "white", padding: 72, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 84, height: 84, borderRadius: 20, background: "#0B1F3A", border: "4px solid #E31B23", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 54, color: "#FFC629" }}>⚡</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1, display: "flex" }}>
              MADHURI&nbsp;<span style={{ color: "#FF4D55" }}>ELECTRICAL</span>
            </div>
            <div style={{ fontSize: 22, color: "#B6D2FF", letterSpacing: 4 }}>AC &amp; ELECTRICAL SERVICES</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, letterSpacing: -2 }}>Professional AC &amp; Electrical Services in Visakhapatnam</div>
          <div style={{ marginTop: 20, fontSize: 28, color: "#D9E8FF" }}>AC Service · Repair · Cleaning · Installation · Electrical Wiring</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 30 }}>
          <div style={{ display: "flex", background: "#E31B23", padding: "14px 28px", borderRadius: 16, fontWeight: 800 }}>Call +91 96665 42541</div>
          <div style={{ color: "#B6D2FF", fontSize: 24 }}>Seethammadhara, HB Colony, Visakhapatnam</div>
        </div>
      </div>
    ),
    size,
  );
}

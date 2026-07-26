import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b1220",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <span style={{ color: "#93a2b8", fontSize: 22, letterSpacing: 4, textTransform: "uppercase" }}>
            fig.01 — resolution trace
          </span>
          <span style={{ color: "#ff8a3d", fontSize: 22, letterSpacing: 4, textTransform: "uppercase" }}>
            {profile.tagline}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#e8edf4", fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>
            {profile.name}
          </span>
          <span style={{ color: "#93a2b8", fontSize: 32, marginTop: 16 }}>{profile.title}</span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {["CLIENT", "RESOLVER", "ROOT", "TLD", "AUTH"].map((hop, i, arr) => (
              <div key={hop} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ color: "#93a2b8", fontSize: 18, letterSpacing: 2 }}>{hop}</span>
                {i < arr.length - 1 && <span style={{ color: "#37b6c4", fontSize: 18 }}>→</span>}
              </div>
            ))}
          </div>
          <span style={{ color: "#37b6c4", fontSize: 22, letterSpacing: 2 }}>status 200 · up 99.9%</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

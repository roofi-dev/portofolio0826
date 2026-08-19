import { ImageResponse } from "next/og";
import { projectCount } from "@/lib/projects";

export const runtime = "edge";
export const alt = "Firdha Roofi Irawan — Fullstack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px",
                    backgroundColor: "#F5F1E8",
                    color: "#0A0A0A",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Acid strip at top */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 14,
                        backgroundColor: "#CDFF00",
                    }}
                />

                {/* Meta tag */}
                <div
                    style={{
                        fontSize: 22,
                        letterSpacing: 8,
                        textTransform: "uppercase",
                        color: "#0A0A0A",
                        opacity: 0.75,
                        fontWeight: 700,
                        display: "flex",
                    }}
                >
                    Portfolio / {new Date().getFullYear()}
                </div>

                {/* Name */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 32,
                    }}
                >
                    <div
                        style={{
                            fontSize: 172,
                            lineHeight: 0.9,
                            fontWeight: 800,
                            letterSpacing: -4,
                            textTransform: "uppercase",
                            color: "#0A0A0A",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <span>Firdha</span>
                        <span style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                            <span>Roofi</span>
                            <span
                                style={{
                                    width: 34,
                                    height: 34,
                                    backgroundColor: "#CDFF00",
                                    border: "5px solid #0A0A0A",
                                    marginTop: 16,
                                }}
                            />
                        </span>
                    </div>

                    <div
                        style={{
                            fontSize: 32,
                            lineHeight: 1.2,
                            fontWeight: 600,
                            color: "#0A0A0A",
                            opacity: 0.85,
                            maxWidth: 900,
                            display: "flex",
                        }}
                    >
                        Fullstack Web Developer — PHP (Laravel) &amp; JavaScript (Vue 3 / React 18), end-to-end.
                    </div>
                </div>

                {/* Bottom row — tags + url */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 22,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: 4,
                    }}
                >
                    <div style={{ display: "flex", gap: 16 }}>
                        {["Enterprise", "IoT & Integrations", "Freelance", `${projectCount} Shipped`].map((t) => (
                            <div
                                key={t}
                                style={{
                                    padding: "10px 18px",
                                    border: "3px solid #0A0A0A",
                                    backgroundColor: "#F5F1E8",
                                    display: "flex",
                                }}
                            >
                                {t}
                            </div>
                        ))}
                    </div>
                    <div
                        style={{
                            backgroundColor: "#0A0A0A",
                            color: "#F5F1E8",
                            padding: "14px 24px",
                            display: "flex",
                        }}
                    >
                        roofi.dev
                    </div>
                </div>
            </div>
        ),
        { ...size },
    );
}

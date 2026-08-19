"use client";

import { ArrowUpRight, Building2, Cpu, Globe, Github, ShieldCheck, Database } from "lucide-react";
import { projects, clientWorkCount } from "@/lib/projects";

/* Every item below is independently verifiable by clicking it —
   evidence instead of testimonials. */
const receipts = [
    {
        icon: <Building2 size={18} />,
        label: "Pondasi · 15+ modules",
        value: "Internal manufacturing ERP · in production",
        href: "/work/pondasi",
        accent: "bg-acid",
    },
    {
        icon: <ShieldCheck size={18} />,
        label: "Karir · Security 8.5/10",
        value: "Audit-ready · CSRF · XSS · SQLi prevention",
        href: "/work/karir",
        accent: "bg-hotpink",
    },
    {
        icon: <Cpu size={18} />,
        label: "MQTT Timbangan IoT",
        value: "PLC/HMI → Mosquitto → WebSocket realtime",
        href: "/work/mqtt-timbangan-iot",
        accent: "bg-electric",
    },
    {
        icon: <Database size={18} />,
        label: "Accurate.id API",
        value: "2-way sync · OAuth 2.0 · idempotency guard",
        href: "/work/accurate-id-integration",
        accent: "bg-vivid",
    },
    {
        icon: <Globe size={18} />,
        label: `${clientWorkCount} freelance build`,
        value: "Inventory & Production · shipped for client",
        href: "/work/inventory-production",
        accent: "bg-hotpink",
    },
    {
        icon: <Github size={18} />,
        label: "GitHub · roofi-dev",
        value: "Source repos · public commits",
        href: "https://github.com/roofi-dev",
        accent: "bg-electric",
    },
    {
        icon: <Building2 size={18} />,
        label: "PT Ladang Sehat Indonesia",
        value: "Fullstack Web Developer · Jan 2025 – present",
        href: "https://www.linkedin.com/in/roofi",
        accent: "bg-acid",
    },
    {
        icon: <Database size={18} />,
        label: `${projects.length} systems shipped`,
        value: "Every one documented as a case study",
        href: "/work",
        accent: "bg-vivid",
    },
];

export function ProofSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20">
            <div className="reveal-up">
                <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/60 mb-2">Proof, not promises</div>
                <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-ink mb-2">The Receipts</h2>
                <p className="font-mono text-sm text-ink/70 max-w-xl leading-relaxed mb-8">
                    No borrowed praise. Every claim on this site is a link you can click
                    and check yourself.
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {receipts.map((r, i) => (
                    <a
                        key={r.label}
                        href={r.href}
                        target={r.href.startsWith("http") ? "_blank" : undefined}
                        rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="neo-card bg-cream p-5 group relative overflow-hidden reveal-up"
                        style={{ animationDelay: `${Math.min(i * 0.06, 0.4)}s` }}
                    >
                        <div className={`absolute top-0 left-0 w-full h-1 ${r.accent}`} />
                        <div className="flex items-start justify-between gap-2">
                            <div className="text-ink/70 group-hover:text-ink transition-colors">{r.icon}</div>
                            <ArrowUpRight
                                size={16}
                                className="text-ink/30 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                            />
                        </div>
                        <div className="mt-4 font-heading font-bold text-base uppercase tracking-tight text-ink leading-tight">
                            {r.label}
                        </div>
                        <div className="mt-1 font-mono text-xs font-bold text-ink/60 uppercase tracking-wider leading-relaxed">
                            {r.value}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

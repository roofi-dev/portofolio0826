"use client";

import { Zap, Cpu, ArrowUpRight, Check, X, Shield, Rocket, RefreshCw, Code2, Building2, Database, Plug } from "lucide-react";
import { CircuitPattern, CrossHatch } from "@/components/ui/Decorative";

const velocityFeatures = [
    { icon: <Code2 size={20} />, label: "Web App Enterprise", desc: "Laravel + Vue 3 / React 18 + Inertia.js" },
    { icon: <Building2 size={20} />, label: "ERP & Internal Systems", desc: "Multi-modul, role & permission granular (Spatie)" },
    { icon: <Database size={20} />, label: "API & Database", desc: "RESTful API + MySQL 8.0 / PostgreSQL" },
    { icon: <Shield size={20} />, label: "Production Deploy", desc: "Docker multi-VM + security hardening" },
];

const aiFeatures = [
    { icon: <Plug size={20} />, label: "Hardware Integration", desc: "PLC/HMI via MQTT (Mosquitto Broker)" },
    { icon: <Cpu size={20} />, label: "Realtime Monitoring", desc: "WebSocket (Laravel Reverb) untuk data live" },
    { icon: <RefreshCw size={20} />, label: "Third-Party API", desc: "Accurate.id OAuth 2.0 + Queue Jobs + idempotency" },
    { icon: <Rocket size={20} />, label: "DevOps Automation", desc: "deploy.sh, Nginx, Ubuntu Server hardening" },
];

export function ServicePackages() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20">
            <div className="grid md:grid-cols-2 gap-5">
                {/* Velocity Launch */}
                <div className="reveal-up">
                    <div className="neo-card bg-acid text-ink p-6 md:p-8 h-full relative overflow-hidden group gradient-top-accent">
                        <CrossHatch className="absolute top-0 right-0 w-32 h-32 text-ink opacity-[0.04]" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <Zap size={28} />
                                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] opacity-80">Build a system</span>
                            </div>
                            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight mb-3">Ship It</h2>
                            <p className="font-mono text-sm opacity-85 leading-relaxed mb-6">
                                Build end-to-end untuk perusahaan dan tim kecil. ERP internal, portal,
                                sistem manajemen — Anda deskripsikan kebutuhannya, saya kembalikan
                                versi live, ter-deploy, dan ter-audit dalam timeline realistis yang
                                disepakati di awal.
                            </p>

                            <div className="space-y-4 mb-6">
                                {velocityFeatures.map((f) => (
                                    <div key={f.label} className="flex items-start gap-3 group/item">
                                        <div className="text-ink/60 mt-0.5">{f.icon}</div>
                                        <div>
                                            <div className="font-heading font-bold text-sm uppercase tracking-tight">{f.label}</div>
                                            <div className="font-mono text-xs opacity-80">{f.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-ink text-cream px-5 py-3 font-heading font-bold text-sm uppercase tracking-wider border-[3px] border-ink hover:bg-cream hover:text-ink transition-all group"
                            >
                                Start Building
                                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Integration & IoT */}
                <div className="reveal-up" style={{ animationDelay: "0.1s" }}>
                    <div className="neo-card bg-electric text-cream p-6 md:p-8 h-full relative overflow-hidden group gradient-top-accent neo-glow-blue">
                        <CircuitPattern className="absolute bottom-0 left-0 w-40 h-40 text-cream/5" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <Cpu size={28} className="text-acid" />
                                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cream/80">Augment existing</span>
                            </div>
                            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight mb-3">Add Integration</h2>
                            <p className="font-mono text-sm text-cream/90 leading-relaxed mb-6">
                                Integrasi hardware (PLC/HMI via MQTT), API pihak ketiga (Accurate.id,
                                OAuth 2.0), WebSocket realtime, dan DevOps automation untuk sistem
                                yang sudah berjalan. Saya masuk ke repo existing, tulis PR kecil,
                                dan buat integrasinya ngerjain satu pekerjaan spesifik — bukan demo.
                            </p>

                            <div className="space-y-4 mb-6">
                                {aiFeatures.map((f) => (
                                    <div key={f.label} className="flex items-start gap-3 group/item">
                                        <div className="text-acid mt-0.5">{f.icon}</div>
                                        <div>
                                            <div className="font-heading font-bold text-sm uppercase tracking-tight">{f.label}</div>
                                            <div className="font-mono text-xs text-cream/80">{f.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-acid text-ink px-5 py-3 font-heading font-bold text-sm uppercase tracking-wider border-[3px] border-ink hover:bg-cream transition-all group"
                            >
                                Explore Integration
                                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

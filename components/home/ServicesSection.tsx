"use client";

import { CrossHatch, CircuitPattern } from "@/components/ui/Decorative";
import { ArrowUpRight, Zap, Cpu } from "lucide-react";

export function ServicesSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20 reveal-up">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/60 mb-2">What I Do</div>
            <div className="flex items-end justify-between mb-6">
                <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-ink">Services</h2>
                <a href="/services" className="font-mono text-sm font-bold uppercase tracking-wider text-ink hover:text-vivid transition-colors flex items-center gap-1 group">
                    Details <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                <div className="reveal-up">
                    <div className="neo-card bg-acid text-ink p-6 md:p-8 h-full relative overflow-hidden group gradient-top-accent neo-glow">
                        <CrossHatch className="absolute top-0 right-0 w-24 h-24 text-ink opacity-50" />
                        <div className="relative z-10">
                            <Zap size={32} className="mb-4" />
                            <h3 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight mb-3">Web App Development</h3>
                            <p className="font-mono text-sm opacity-85 leading-relaxed mb-4">
                                Aplikasi web enterprise end-to-end — Laravel + Vue 3 / React 18 +
                                Inertia.js. ERP, portal, sistem manajemen, dengan role &amp; permission
                                granular, service layer, dan queue jobs.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Laravel", "Vue 3", "React 18", "Inertia.js"].map((t) => (
                                    <span key={t} className="px-2 py-1 border-2 border-ink/40 font-mono text-xs font-bold uppercase">{t}</span>
                                ))}
                            </div>
                            <a href="/services" className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                                Learn More <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="reveal-up" style={{ animationDelay: "0.06s" }}>
                    <div className="neo-card bg-electric text-cream p-6 md:p-8 h-full relative overflow-hidden group gradient-top-accent neo-glow-blue">
                        <CircuitPattern className="absolute bottom-0 left-0 w-32 h-32 text-cream/10" />
                        <div className="relative z-10">
                            <Cpu size={32} className="mb-4 text-acid" />
                            <h3 className="font-heading font-bold text-2xl md:text-3xl uppercase tracking-tight mb-3">Integration &amp; IoT</h3>
                            <p className="font-mono text-sm opacity-85 leading-relaxed mb-4">
                                Integrasi hardware (PLC/HMI via MQTT), API pihak ketiga (Accurate.id,
                                OAuth 2.0), WebSocket realtime, dan deployment Docker multi-VM dengan
                                security hardening.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["MQTT", "REST API", "Docker", "Security"].map((t) => (
                                    <span key={t} className="px-2 py-1 border-2 border-cream/40 font-mono text-xs font-bold uppercase">{t}</span>
                                ))}
                            </div>
                            <a href="/services" className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                                Learn More <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

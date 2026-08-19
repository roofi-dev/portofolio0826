"use client";

import { GridDots } from "@/components/ui/Decorative";
import { Mail, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/628990913735";

export function CtaSection() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 reveal-up">
            <div className="neo-card bg-hotpink text-cream p-8 md:p-12 text-center relative overflow-hidden gradient-top-accent">
                <GridDots className="absolute inset-0 w-full h-full text-cream/5" />
                <div className="absolute top-0 left-1/4 w-1/2 h-32 bg-acid/10 blur-3xl pointer-events-none" />
                <div className="relative z-10">
                    <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-acid mb-3">{"/// Open for new work · Same-day reply ///"}</div>
                    <h2 className="font-heading font-bold text-3xl md:text-6xl uppercase tracking-tight mb-4">Punya sistem yang mau dibangun?</h2>
                    <p className="font-mono text-sm md:text-base opacity-90 mb-8 max-w-xl mx-auto leading-relaxed">
                        Dari requirement sampai produksi. ERP internal, portal rekrutmen, integrasi
                        IoT, atau sistem manajemen — ceritakan kebutuhannya dan saya kembali dengan
                        rencana realistis di hari yang sama, atau chat via WhatsApp biar cepat.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-acid text-ink font-heading font-bold text-lg uppercase tracking-wider px-8 py-4 border-[3px] border-ink shadow-neo hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all hover-shake"
                        >
                            <MessageCircle size={18} /> Chat WhatsApp
                        </a>
                        <a
                            href="/contact"
                            className="inline-block bg-cream text-ink font-heading font-bold text-lg uppercase tracking-wider px-8 py-4 border-[3px] border-ink hover:bg-ink hover:text-cream transition-colors"
                        >
                            Start a Project →
                        </a>
                        <a
                            href="mailto:roofiii96@gmail.com"
                            className="inline-flex items-center gap-2 bg-ink text-cream font-heading font-bold text-lg uppercase tracking-wider px-8 py-4 border-[3px] border-ink hover:bg-acid hover:text-ink transition-colors"
                        >
                            <Mail size={18} /> Email Direct
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

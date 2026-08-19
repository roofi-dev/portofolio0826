"use client";

export function PhilosophySection() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 md:mb-20 reveal-up">
            <div className="neo-card bg-ink text-cream p-6 md:p-12 relative overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative z-10">
                    <div>
                        <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-cream/70 mb-3">How I Work</div>
                        <h2 className="font-heading font-bold text-3xl md:text-5xl uppercase tracking-tight text-cream mb-6 leading-tight">
                            Clear specs,<br />
                            clean code,<br />
                            <span className="text-vivid">real deployment.</span>
                        </h2>
                        <p className="font-mono text-sm md:text-base text-cream/85 leading-relaxed mb-6">
                            Saya bekerja dengan loop yang jelas: requirement yang rinci, arsitektur
                            yang dipikirkan matang, dan deployment yang benar-benar jalan di produksi.
                            Bukan demo staging, bukan slide — sistem yang dipakai operasional harian.
                        </p>
                        <div className="inline-flex items-center gap-3 p-4 border-[3px] border-cream/20">
                            <div className="w-3 h-3 bg-acid animate-pulse-dot flex-shrink-0" />
                            <span className="font-mono text-xs font-bold text-cream/75 uppercase tracking-wider">Currently taking new work</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {[
                            { num: "01", title: "Spec", desc: "Diskusi requirement, arsitektur, dan constraint teknis. Modul bisnis dipetakan jelas sebelum kode ditulis." },
                            { num: "02", title: "Build", desc: "Engineering dengan Laravel + Vue/React + Inertia.js. Role & permission, service layer, queue jobs sesuai kebutuhan." },
                            { num: "03", title: "Deploy", desc: "Docker multi-VM, Nginx, deploy.sh automasi, security hardening. Produksi, bukan staging." },
                            { num: "04", title: "Support", desc: "On-call untuk bug fix, tweak, dan rekonsiliasi data setelah go-live. Tidak ghosting." },
                        ].map((step, idx) => (
                            <div
                                key={step.num}
                                className="flex gap-4 items-start group reveal-up"
                                style={{ animationDelay: `${Math.min(idx * 0.06, 0.4)}s` }}
                            >
                                <div className="font-heading font-bold text-2xl md:text-3xl text-acid w-12 flex-shrink-0 group-hover:translate-x-1 transition-transform">{step.num}</div>
                                <div className="border-l-[3px] border-cream/20 pl-4 group-hover:border-acid/40 transition-colors">
                                    <div className="font-heading font-bold text-lg uppercase tracking-tight">{step.title}</div>
                                    <div className="font-mono text-xs text-cream/70 mt-1 leading-relaxed">{step.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

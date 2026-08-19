"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ContactForm } from "@/components/contact/ContactForm";

import { useState } from "react";
import { ArrowUpRight, Mail, Send, Loader2, CheckCircle, MapPin, Clock, MessageCircle, Github, Linkedin, ChevronDown, Phone } from "lucide-react";
import { CircuitPattern, GridDots, CrossHatch } from "@/components/ui/Decorative";

const WHATSAPP_URL = "https://wa.me/628990913735";

/* ─── Data ─── */
const contactInfo = [
    { icon: <Mail size={18} />, label: "Email", value: "roofiii96@gmail.com", href: "mailto:roofiii96@gmail.com" },
    { icon: <Phone size={18} />, label: "WhatsApp", value: "0899 0913 735", href: WHATSAPP_URL },
    { icon: <MapPin size={18} />, label: "Location", value: "Surabaya, Indonesia" },
    { icon: <Clock size={18} />, label: "Response", value: "Usually same day" },
];

const faqs = [
    { q: "Berapa lama turnaround tipikal?", a: "Tergantung scope — modul ERP kecil biasanya 2–4 minggu; sistem fullstack skala enterprise 2–4 bulan. Saya kasih estimasi realistis sebelum mulai dan flagging segera kalau ada potensi slip." },
    { q: "Bekerja dengan perusahaan atau freelance?", a: "Keduanya. Sebagian besar pekerjaan saya untuk perusahaan (PT Ladang Sehat Indonesia) dan beberapa freelance commission. Prosesnya sama — spec jelas, build rapi, deploy ke produksi." },
    { q: "Spesialisasi teknis apa?", a: "Fullstack web development: PHP (Laravel 10/11) untuk backend, Vue 3 / React 18 + Inertia.js untuk frontend, MySQL/PostgreSQL untuk database, plus integrasi hardware (MQTT, PLC/HMI) dan API pihak ketiga (Accurate.id)." },
    { q: "Handle end-to-end atau cuma development?", a: "End-to-end — arsitektur, development, deployment (Docker multi-VM), security hardening, dan post-launch support. Kalau sudah ada designer atau PM, saya slot ke workflow mereka." },
    { q: "Bagaimana handle codebase yang sudah ada?", a: "Read-before-rewrite. Saya pahami konvensi repo dulu, lalu ship perubahan sebagai PR kecil yang bisa direview. Tidak ada rewrite kejutan tanpa diskusi." },
];

export default function ContactPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-cream pb-24">
            {/* Status bar */}
            <div className="w-full bg-ink border-b-[3px] border-ink py-2 px-4 md:px-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-acid animate-pulse-dot" />
                    <span className="font-mono text-xs font-bold text-cream/70 uppercase tracking-widest">{"/// contact"}</span>
                </div>
                <span className="font-mono text-xs font-bold text-cream/60 tracking-widest uppercase">Same-day reply</span>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Header */}
                <section className="mt-8 md:mt-16 mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/60 mb-3">Get in Touch</div>
                        <h1 className="text-4xl sm:text-6xl md:text-[7rem] font-heading font-bold text-ink leading-[0.85] tracking-tighter uppercase mb-6">
                            Let&apos;s<br />Build
                        </h1>
                        <p className="font-mono text-sm md:text-base text-ink/85 max-w-xl leading-relaxed">
                            Ceritakan apa yang sedang Anda kerjakan — kondisi saat ini, apa yang
                            perlu dibangun, dan deadline atau constraint yang perlu saya tahu.
                            Saya balas dengan rencana realistis, bukan pitch deck.
                        </p>
                    </motion.div>
                </section>

                <div className="grid lg:grid-cols-5 gap-5 mb-12 md:mb-20">
                    {/* ─── Form ─── */}
                    <div className="lg:col-span-3">
                        <ContactForm />
                    </div>

                    {/* ─── Sidebar ─── */}
                    <div className="lg:col-span-2 space-y-5">
                        {/* Contact info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="neo-card bg-ink text-cream p-6 relative overflow-hidden gradient-top-accent"
                        >
                            <CircuitPattern className="absolute top-0 right-0 w-24 h-24 text-cream/5" />
                            <div className="relative z-10">
                                <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-cream/70 mb-4">Direct Lines</div>
                                <div className="space-y-4">
                                    {contactInfo.map((info) => (
                                        <div key={info.label} className="flex items-start gap-3">
                                            <div className="text-acid mt-0.5 flex-shrink-0">{info.icon}</div>
                                            <div>
                                                <div className="font-mono text-xs font-bold uppercase tracking-widest text-cream/70">{info.label}</div>
                                                {info.href ? (
                                                    <a href={info.href} className="font-mono text-sm font-bold text-cream hover:text-acid transition-colors break-all" rel="noopener noreferrer" target={info.href.startsWith("http") ? "_blank" : undefined}>
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <div className="font-mono text-sm font-bold text-cream">{info.value}</div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-2 gap-3"
                        >
                            <a
                                href="https://github.com/roofi-dev"
                                target="_blank" rel="noopener noreferrer"
                                className="neo-card bg-cream p-4 text-center font-mono text-sm font-bold uppercase hover:bg-ink hover:text-cream transition-all flex items-center justify-center gap-2 group"
                            >
                                <Github size={16} /> GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/roofi"
                                target="_blank" rel="noopener noreferrer"
                                className="neo-card bg-cream p-4 text-center font-mono text-sm font-bold uppercase hover:bg-electric hover:text-cream transition-all flex items-center justify-center gap-2 group"
                            >
                                <Linkedin size={16} /> LinkedIn
                            </a>
                        </motion.div>

                        {/* What to expect */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="neo-card bg-acid text-ink p-5"
                        >
                            <div className="font-heading font-bold text-lg uppercase tracking-tight mb-2">What to expect</div>
                            <ul className="font-mono text-xs opacity-85 leading-relaxed space-y-1.5 list-disc list-inside">
                                <li>Balas dalam satu hari kerja</li>
                                <li>Call hanya kalau proyek memang perlu</li>
                                <li>Rencana tertulis: scope, timeline, harga</li>
                                <li>Tidak ada NDA gatekeeping sebelum paham scope</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* ─── FAQ ─── */}
                <section className="mb-12 md:mb-20 reveal-up">
                    <div className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/60 mb-2">Common Questions</div>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase tracking-tight text-ink mb-6">FAQ</h2>

                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <div key={i} className="reveal-up" style={{ animationDelay: `${Math.min(i * 0.06, 0.4)}s` }}>
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="neo-card w-full bg-cream p-5 text-left group"
                                >
                                    <div className="flex justify-between items-center gap-4">
                                        <h4 className="font-heading font-bold text-base uppercase tracking-tight group-hover:text-electric transition-colors">
                                            {faq.q}
                                        </h4>
                                        <ChevronDown
                                            size={18}
                                            className={`flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                                        />
                                    </div>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="font-mono text-sm text-ink/85 leading-relaxed mt-4 pt-4 border-t-[2px] border-ink/10">
                                                    {faq.a}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    Upload,
    Music,
    Mic2,
    Star,
    Send,
    Camera,
    Instagram,
} from "lucide-react";

export default function ArtistApplicationForm() {
    const [dragActive, setDragActive] = useState(false);

    return (
        <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-[var(--bg-primary)]">

            {/* ─── Ambient Studio Lighting ─── */}
            <div className="pointer-events-none absolute inset-0">
                {/* Top-left soft violet key light */}
                <div
                    className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[140px]"
                    style={{ background: "rgba(108, 99, 255, 0.12)" }}
                />

                {/* Bottom-right soft purple rim light */}
                <div
                    className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] rounded-full blur-[160px]"
                    style={{ background: "rgba(159, 122, 234, 0.10)" }}
                />

                {/* Center soft white lift */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[180px]"
                    style={{ background: "rgba(255, 255, 255, 0.04)" }}
                />
                {/* <div
                    className="absolute top-100 left-100 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[180px]"
                    style={{ background: "rgba(255, 255, 255, 0.04)" }}
                /> */}
            </div>


            <div className="max-w-4xl mx-auto relative z-10">

                {/* ─── Header ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.4em] text-[var(--accent-tertiary)] uppercase mb-6">
                        Artist Residency 2026
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        Apply to <span className="gradient-text">Perform</span>
                    </h1>

                    <p className="text-[var(--text-muted)] text-lg max-w-xl mx-auto font-light">
                        We’re looking for raw talent and honest performances.
                        Tell us who you are and let your work speak for itself.
                    </p>
                </motion.div>

                {/* ─── Form Card ─── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative glass-card p-8 md:p-12 rounded-2xl border-white/10 shadow-2xl
                                before:absolute before:inset-0 before:rounded-[inherit]
                                before:bg-gradient-to-br before:from-white/10 before:to-transparent
                                before:opacity-40 before:pointer-events-none"
                >
                    {/* glass edge highlight */}
                    <div className="absolute inset-0 rounded-[inherit] ring-1 ring-white/10 pointer-events-none" />

                    <form className="space-y-10 relative z-10">

                        {/* ── Identity ── */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold tracking-widest text-white/50 uppercase">
                                    Stage Name / Alias
                                </label>
                                <input
                                    type="text"
                                    placeholder="The Midnight Pulse"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4
                             text-white placeholder:text-white/20 focus:outline-none
                             focus:border-[var(--accent-primary)] transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold tracking-widest text-white/50 uppercase">
                                    Performance Category
                                </label>
                                <select
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4
                             text-white focus:outline-none focus:border-[var(--accent-primary)]
                             transition-all appearance-none"
                                >
                                    <option className="bg-[#0a0e1a]">Electronic / Live Set</option>
                                    <option className="bg-[#0a0e1a]">Spoken Word</option>
                                    <option className="bg-[#0a0e1a]">Stand-up Comedy</option>
                                    <option className="bg-[#0a0e1a]">Indie / Acoustic</option>
                                </select>
                            </div>
                        </div>

                        {/* ── Social & Links ── */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="relative">
                                <Instagram size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                <input
                                    type="text"
                                    placeholder="Instagram Handle"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl
                             pl-12 pr-4 py-4 text-white placeholder:text-white/20
                             focus:outline-none focus:border-[var(--accent-secondary)] transition-all"
                                />
                            </div>

                            <div className="relative">
                                <Music size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                                <input
                                    type="url"
                                    placeholder="Portfolio / Spotify Link"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl
                             pl-12 pr-4 py-4 text-white placeholder:text-white/20
                             focus:outline-none focus:border-[var(--accent-secondary)] transition-all"
                                />
                            </div>
                        </div>

                        {/* ── The Pitch ── */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold tracking-widest text-white/50 uppercase">
                                Tell us about your set
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Describe your performance style, technical needs, and how you connect with a live audience..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4
                           text-white placeholder:text-white/20 focus:outline-none
                           focus:border-[var(--accent-primary)] transition-all resize-none"
                            />
                        </div>

                        {/* ── Upload ── */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold tracking-widest text-white/50 uppercase">
                                Upload Demo / EPK
                            </label>

                            <div
                                onDragOver={(e) => {
                                    e.preventDefault();
                                    setDragActive(true);
                                }}
                                onDragLeave={() => setDragActive(false)}
                                className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all
                  ${dragActive
                                        ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 shadow-[0_0_40px_rgba(108,99,255,0.15)]"
                                        : "border-white/10 hover:border-white/20 hover:bg-white/[0.03]"
                                    }`}
                            >
                                <Upload className="mx-auto mb-4 text-white/30" size={32} />
                                <p className="text-sm text-[var(--text-muted)]">
                                    Drag & drop your demo or{" "}
                                    <span className="text-white underline cursor-pointer">
                                        browse files
                                    </span>
                                </p>
                                <p className="text-[10px] text-white/20 mt-2 uppercase tracking-widest">
                                    Max file size: 50MB
                                </p>
                            </div>
                        </div>

                        {/* ── Submit ── */}
                        <div className="pt-6">
                            <button
                                type="submit"
                                className="w-full group relative overflow-hidden py-5 rounded-xl
                           bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]
                           text-white font-bold tracking-[0.2em] text-sm
                           transition-transform active:scale-[0.98]"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    SUBMIT APPLICATION
                                    <Send
                                        size={16}
                                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                    />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>

                            <p className="text-center text-[10px] text-white/20 mt-6 uppercase tracking-widest">
                                Applications reviewed weekly • Response in 7–10 days
                            </p>
                        </div>
                    </form>
                </motion.div>

                {/* ─── Trust Markers ─── */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center opacity-60">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                            <Mic2 size={20} />
                        </div>
                        <h5 className="text-xs font-bold uppercase tracking-widest">
                            Elite Sound Setup
                        </h5>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                            <Camera size={20} />
                        </div>
                        <h5 className="text-xs font-bold uppercase tracking-widest">
                            Media Coverage
                        </h5>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center">
                            <Star size={20} />
                        </div>
                        <h5 className="text-xs font-bold uppercase tracking-widest">
                            Curated Lineups
                        </h5>
                    </div>
                </div>

            </div>
        </section>
    );
}

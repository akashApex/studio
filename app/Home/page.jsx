"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Calendar,
    MapPin,
    Clock,
    Search,
    Globe,
    Wrench,
    Settings,
    Megaphone,
    ArrowRight,

} from 'lucide-react';
import Link from "next/link";

export default function EventifyLanding() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen font-sans selection:bg-purple-500/30">
            {/* --- Navigation --- */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0e1a]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                        STUDIO<span className="w-2 h-2 rounded-full bg-[#6c63ff]"></span>
                    </div>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
                        {['ABOUT', 'EVENT', 'SPEAKER', 'TICKET', 'BLOGS'].map((item) => (
                            <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
                        ))}
                    </div>
                    <div className="flex items-center gap-6">
                        <Search size={20} className="text-gray-400 cursor-pointer" />
                        <Link href="/form">
                            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#9f7aea] text-sm font-semibold">
                                CONTACT
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* --- Hero Section --- */}
            <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 px-6 overflow-hidden">
                {/* --- Sophisticated Background Elements --- */}
                {/* Primary Glow */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent-primary)]/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/4" />

                {/* Decorative Mesh Grid (SVG) */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48c-2 0-3 1-3 3s1 3 3 3 3-1 3-3-1-3-3-3zm-9-9c-2 0-3 1-3 3s1 3 3 3 3-1 3-3-1-3-3-3zm-9-9c-2 0-3 1-3 3s1 3 3 3 3-1 3-3-1-3-3-3zm-9-9c-2 0-3 1-3 3s1 3 3 3 3-1 3-3-1-3-3-3zm-9-9c-2 0-3 1-3 3s1 3 3 3 3-1 3-3-1-3-3-3zM9 9c-2 0-3 1-3 3s1 3 3 3 3-1 3-3-1-3-3-3z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
                />

                <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center relative z-10">

                    {/* --- Left Column: Content --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--text-secondary)] uppercase">
                                9 June 2025 • Limited Seats Remaining
                            </span>
                        </div>

                        <h1 className="text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tighter mb-8">
                            Discover artists.
                            <br />
                            <span className="">
                                Book studios.
                            </span>
                            <br />
                            Experience events.
                        </h1>


                        <p className="text-lg text-[var(--text-secondary)] max-w-lg mb-12 leading-relaxed font-light">
                            A live studio where artists perform and audiences connect.
                            From comedy to music, every show is crafted to be remembered.
                        </p>


                        <div className="flex flex-wrap items-center gap-8">
                            <button className="relative group overflow-hidden px-10 py-4 rounded-full bg-[var(--accent-primary)] font-bold text-sm tracking-widest transition-all hover:shadow-[0_0_30px_rgba(108,99,255,0.4)]">
                                <span className="relative z-10">BUY TICKETS</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </button>

                            <button className="flex items-center gap-3 text-sm font-bold tracking-widest hover:text-[var(--accent-primary)] transition-colors group">
                                SEE MORE ABOUT US
                                <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 group-hover:bg-[var(--accent-primary)] transition-all" />
                            </button>
                        </div>

                        {/* Social proof icons or tags could go here */}
                        <div className="mt-16 flex gap-6 opacity-40">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <Image key={i} className="w-8 h-8 rounded-full border-2 border-[var(--bg-primary)]" src={`https://i.pravatar.cc/100?u=${i}`} alt="user" width={32} height={32} unoptimized />
                                ))}
                            </div>
                            <p className="text-xs self-center font-medium">+2k People Joined</p>
                        </div>
                    </motion.div>

                    {/* --- Right Column: The "Card" --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative group"
                    >
                        {/* Decorative Outer Ring */}
                        <div className="absolute -inset-4 border border-white/5 rounded-[40px] group-hover:border-white/10 transition-colors duration-500" />

                        {/* The Main Image Card */}
                        <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80"
                                alt="Keynote Speaker"
                                fill
                                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                                priority
                                unoptimized
                            />

                            {/* Editorial Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-90" />

                            {/* Glassmorphism Info Box */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-[10px] font-black tracking-[0.2em]  uppercase mb-1">
                                            Artist Spotlight
                                        </p>
                                        <h3 className="text-2xl font-bold leading-tight">
                                            Live on Stage <br />At Studio 
                                        </h3>
                                    </div>
                                    <div className="p-3 rounded-full bg-[var(--accent-primary)]">
                                        <ArrowRight size={18} className="-rotate-45" />
                                    </div>
                                </div>
                                <p className="text-xs text-[var(--text-muted)] line-clamp-2">
                                    Experience an intimate live performance where creativity,
                                    emotion, and audience energy come together for one unforgettable night.
                                </p>

                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* --- Who We Are / Benefits --- */}
            <section className="py-20 px-6 bg-[#0f1525]/50">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">Who We Are</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Studio is a curated performance studio built for artists and audiences.
                            We provide a space where comedians, musicians, and creators can perform,
                            experiment, and connect with people who genuinely love live art.
                        </p>

                        <button className="mt-8 px-6 py-2 glass-card text-xs font-bold uppercase tracking-widest">
                            Contact
                        </button>
                    </div>

                    <div>
                        
                            <p className="text-sm font-semibold mb-8 text-gray-300">
                            Why Artists Choose Our Studio
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { icon: Globe, label: 'Creative Community' },
                                { icon: Settings, label: 'Professional Setup' },
                                { icon: Wrench, label: 'Flexible Studio Space' },
                                { icon: Megaphone, label: 'Audience Reach' },
                            ]
                                .map((benefit, i) => (
                                    <div key={i} className="glass-card p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-white/5 transition-all group">
                                        <benefit.icon className="text-[#6c63ff] group-hover:scale-110 transition-transform" size={28} />
                                        <span className="text-[10px] font-bold uppercase tracking-wider">{benefit.label}</span>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Upcoming Event Countdown --- */}
            <section className="py-24 px-6 bg-white text-black text-center">
                <div className="max-w-4xl mx-auto">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4">Join us for our upcoming event!</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-[#1a2040]">
                        Live Performance Night at  Studio
                    </h2>

                    <div className="flex justify-center gap-4 md:gap-12 mb-12">
                        {[{ v: '30', l: 'DAYS' }, { v: '10', l: 'HOURS' }, { v: '15', l: 'MINUTES' }, { v: '53', l: 'SECONDS' }].map((time, i) => (
                            <div key={i} className="flex flex-col">
                                <span className="text-5xl font-black text-[#6c63ff]">{time.v}</span>
                                <span className="text-[10px] font-bold text-gray-400">{time.l}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-500 mb-10">
                        <div className="flex items-center gap-2"><Calendar size={18} /> April 15-17, 2025</div>
                        <div className="flex items-center gap-2"><MapPin size={18} /> San Francisco, California</div>
                    </div>

                    <div className="flex justify-center gap-4">
                        <button className="px-8 py-3 rounded-full border border-gray-200 text-xs font-bold hover:bg-gray-50">VIEW DETAILS</button>
                        <button className="px-8 py-3 rounded-full bg-[#1a2040] text-white text-xs font-bold shadow-lg">BUY TICKET</button>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-[var(--bg-primary)]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h2 className="text-xs font-bold tracking-[0.4em] text-[var(--accent-primary)] uppercase mb-4">Past Performers</h2>
                            <h3 className="text-5xl md:text-6xl font-bold tracking-tighter">Artist Spotlight</h3>
                        </div>
                        <p className="text-[var(--text-muted)] max-w-xs text-sm leading-relaxed border-l border-white/10 pl-6">
                            Real artists, raw talent. These creators have graced our stage and left their mark on our community.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Marcus Thorne", cat: "Stand-up", handle: "@mthorne_live", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80" },
                            { name: "Sola Kim", cat: "Music / Indie", handle: "@solasounds", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" },
                            { name: "Elena Rossi", cat: "Spoken Word", handle: "@elenapoetry", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" },
                            { name: "David Chen", cat: "Electronic", handle: "@dchen_beats", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" }
                        ].map((artist, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                                    <Image
                                        src={artist.img}
                                        alt={artist.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                                        unoptimized
                                    />
                                    {/* Social Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <span className="text-xs font-bold tracking-widest text-[var(--accent-tertiary)]">{artist.handle}</span>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold">{artist.name}</h4>
                                <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] mt-1">{artist.cat}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Event Schedule --- */}
            <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2">
                    <h2 className="text-xs font-bold tracking-[0.3em] mb-12 text-gray-500 uppercase">Event</h2>
                    <div className="space-y-12">
                        {[
                            { date: '14', month: 'AUG 2025', title: 'KEYNOTE ADDRESS', time: '9:00 AM - 10:00 AM', loc: 'Grand Ballroom, Hilton Hotel' },
                            { date: '16', month: 'AUG 2025', title: 'CREATIVE INDUSTRIES SYMPOSIUM', time: '10:00 AM - 4:00 PM', loc: 'Gallery Room, Shangri-La Hotel' },
                            { date: '23', month: 'AUG 2025', title: 'PANEL DISCUSSION: THE FUTURE OF SUSTAINABILITY', time: '1:00 PM - 2:00 PM', loc: 'Emerald Room, Marriott Hotel' },
                        ].map((event, i) => (
                            <div key={i} className="flex gap-8 group cursor-pointer">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full border border-white/20 flex flex-col items-center justify-center group-hover:border-[#6c63ff] transition-colors">
                                        <span className="text-xl font-bold">{event.date}</span>
                                        <span className="text-[8px] font-bold text-gray-500">{event.month}</span>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-4 group-hover:text-[#6c63ff] transition-colors">{event.title}</h4>
                                    <div className="flex flex-wrap gap-6 text-xs text-gray-400">
                                        <span className="flex items-center gap-2"><Calendar size={14} /> August 14-15, 2025</span>
                                        <span className="flex items-center gap-2"><Clock size={14} /> {event.time}</span>
                                        <span className="flex items-center gap-2"><MapPin size={14} /> {event.loc}</span>
                                    </div>
                                    <button className="mt-4 px-4 py-1.5 glass-card text-[10px] font-bold hover:bg-[#6c63ff] transition-colors">BUY TICKET</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden lg:block relative rounded-3xl overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80" alt="Event" fill className="object-cover opacity-80" unoptimized />
                </div>
            </section>

            {/* --- Speakers Section --- */}
            <section className="py-20 px-6 bg-[#0a0e1a]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-xs font-bold tracking-[0.3em] mb-12 text-gray-500 uppercase">Artist</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { name: 'JENNA SMITH', role: 'Business Strategy and Innovation' },
                            { name: 'ROBERT P. STONES', role: 'Film and Television Production' },
                            { name: 'PETER JONES', role: 'Sustainable Development & Corporate Social Responsibility' },
                            { name: 'MARY LOU', role: 'Circular Economy and Sustainability' },
                        ].map((speaker, i) => (
                            <motion.div key={i} whileHover={{ y: -10 }} className="group">
                                <div className="aspect-square glass-card mb-6 overflow-hidden relative">
                                    <Image
                                        src={`https://i.pravatar.cc/400?img=${i + 10}`}
                                        alt={speaker.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        unoptimized
                                    />
                                </div>
                                <h5 className="font-bold text-sm mb-1">{speaker.name}</h5>
                                <p className="text-[10px] text-gray-500 leading-tight uppercase tracking-wider">{speaker.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-[var(--bg-secondary)] relative">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="rounded-2xl aspect-[4/5] relative overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80" alt="Studio angle 1" fill className="object-cover" unoptimized />
                            </div>
                            <div className="rounded-2xl aspect-square relative overflow-hidden">
                                <Image src="https://plus.unsplash.com/premium_photo-1706548911842-7162d4bd2c98?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lighting" fill className="object-cover" unoptimized />
                            </div>
                        </div>
                        <div className="space-y-4 pt-12">
                            <div className="rounded-2xl aspect-square relative overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80" alt="Sound system" fill className="object-cover" unoptimized />
                            </div>
                            <div className="rounded-2xl aspect-[4/5] relative overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80" alt="Vibe" fill className="object-cover" unoptimized />
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-xs font-bold tracking-[0.4em] text-[var(--accent-secondary)] uppercase mb-6">The Venue</h2>
                        <h3 className="text-5xl font-bold tracking-tighter mb-8 leading-tight">
                            An intimate studio designed for live performances and <span className="gradient-text">real audience connection.</span>
                        </h3>

                        <div className="grid grid-cols-2 gap-y-8 mt-12">
                            {[
                                { label: "CAPACITY", value: "120 Seated" },
                                { label: "SOUND", value: "Dolby Atmos 7.1" },
                                { label: "LIGHTING", value: "Pro DMX Array" },
                                { label: "VIBE", value: "Intimate / Raw" }
                            ].map((stat, i) => (
                                <div key={i} className="border-l border-white/10 pl-6">
                                    <p className="text-[10px] font-bold text-[var(--text-muted)] tracking-widest uppercase mb-1">{stat.label}</p>
                                    <p className="text-lg font-semibold">{stat.value}</p>
                                </div>
                            ))}
                        </div>

                        <button className="mt-12 group flex items-center gap-4 text-sm font-bold tracking-widest hover:text-[var(--accent-secondary)] transition-all">
                            BOOK THE SPACE FOR REHEARSAL
                            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>
            <section className="relative py-32 px-6 overflow-hidden">
                {/* Background Glows for Depth */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--accent-primary)]/10 blur-[120px] rounded-full rotate-12 pointer-events-none" />

                <div className="max-w-7xl mx-auto">
                    <div className="relative glass-card overflow-hidden rounded-[40px] border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-12 md:p-24 text-center">

                        {/* Animated Decorative Circle */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.3em] text-[var(--accent-tertiary)] uppercase mb-8">
                                Limited Availability
                            </span>

                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-10">
                                Ready to Take the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[var(--text-secondary)] to-white/20">
                                    Stage?
                                </span>
                            </h2>


                            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                                Whether you are an artist looking to perform or an audience member
                                looking for something real,  Studio is where live art happens.
                                Limited seats. Intimate setting. Powerful performances.
                            </p>


                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <button className="group relative px-12 py-5 rounded-full bg-white text-black font-bold text-sm tracking-widest overflow-hidden transition-transform hover:scale-105 active:scale-95">
                                    <span className="relative z-10">RESERVE YOUR SEAT</span>
                                    {/* Hover Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </button>

                                <button className="px-12 py-5 rounded-full glass-card border-white/20 font-bold text-sm tracking-widest hover:bg-white/5 transition-all">
                                    VIEW SCHEDULE
                                </button>
                            </div>

                            {/* Support Text */}
                            <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4 opacity-40 grayscale">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                    <span className="text-[10px] font-bold tracking-widest">SECURE PAYMENT</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                    <span className="text-[10px] font-bold tracking-widest">INSTANT TICKET</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                    <span className="text-[10px] font-bold tracking-widest">24/7 SUPPORT</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Subtle Floating Orbs inside the card */}
                        <div className="absolute bottom-[-10%] left-[-5%] w-40 h-40 bg-[var(--accent-secondary)]/20 blur-[60px] rounded-full" />
                    </div>
                </div>
            </section>

            <footer className="pt-24 pb-12 px-6 border-t border-white/5 bg-[var(--bg-primary)]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                        <div className="md:col-span-2">
                            <div className="text-2xl font-bold tracking-tighter mb-6">
                                STUDIO<span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] inline-block ml-1"></span>
                            </div>
                            <p className="text-[var(--text-muted)] text-sm max-w-xs leading-relaxed">
                                The epicenter for underground talent and high-tech performances. Located in the heart of the Arts District.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-white/40">Navigation</h4>
                            <ul className="space-y-4 text-sm font-medium">
                                <li><a href="#" className="hover:text-[var(--accent-primary)] transition-colors">Apply to Perform</a></li>
                                <li><a href="#" className="hover:text-[var(--accent-primary)] transition-colors">Upcoming Shows</a></li>
                                <li><a href="#" className="hover:text-[var(--accent-primary)] transition-colors">Venue Rental</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-white/40">Connect</h4>
                            <ul className="space-y-4 text-sm font-medium">
                                <li><a href="#" className="hover:text-[var(--accent-primary)] transition-colors">Instagram</a></li>
                                <li><a href="#" className="hover:text-[var(--accent-primary)] transition-colors">Twitter (X)</a></li>
                                <li><a href="#" className="hover:text-[var(--accent-primary)] transition-colors">Email Us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
                        <p className="text-[10px] font-medium text-white/30 uppercase tracking-widest">
                            123 PERFORMANCE WAY, SAN FRANCISCO, CA
                        </p>
                        <div className="flex gap-8 text-[10px] font-medium text-white/30 uppercase tracking-widest">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">© 2026 STUDIO INC</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
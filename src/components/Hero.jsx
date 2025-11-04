import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Rocket, Shield, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-black text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient + vignette to improve text contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/10" />
      </div>

      {/* Top Bar */}
      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.6)]" />
            <span className="font-semibold tracking-wide text-emerald-300">VMBoard</span>
          </div>
          <a
            href="#"
            className="rounded-md border border-emerald-700/60 bg-zinc-900/60 px-4 py-2 text-sm text-emerald-300 transition hover:bg-zinc-900 hover:text-emerald-200"
          >
            <Github className="mr-2 inline h-4 w-4" /> GitHub Login
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-[calc(92vh-72px)] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-700/15 px-4 py-1 text-emerald-300 ring-1 ring-emerald-800/40">
          <Shield className="h-4 w-4" />
          <span className="text-sm">Secure reverse socket orchestration</span>
        </div>
        <h1 className="font-display bg-gradient-to-b from-emerald-400 to-emerald-700 bg-clip-text text-4xl font-black text-transparent sm:text-5xl md:text-6xl">
          VMBoard
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-sm text-emerald-300/85 sm:text-base md:text-lg">
          A modern GUI that turns complex Linux server tasks into a visual,
          real‑time workspace. Manage VMs, packages, files, services, networks,
          and even terminals — all in one place.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 font-medium text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/60"
          >
            <Rocket className="h-5 w-5" />
            Get Started
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-800/60 bg-zinc-900/70 px-5 py-3 font-medium text-emerald-200 transition hover:bg-zinc-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600/50"
          >
            <Github className="h-5 w-5" />
            Continue with GitHub
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-emerald-300/80 sm:text-sm">
          <div className="inline-flex items-center gap-2">
            <Terminal className="h-4 w-4" /> No SSH required
          </div>
          <div className="inline-flex items-center gap-2">
            <Shield className="h-4 w-4" /> Private network friendly
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

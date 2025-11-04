import React from 'react';
import { Github, Rocket } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" className="relative bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-emerald-900/60 bg-gradient-to-b from-zinc-950 to-black p-0">
        <div className="relative p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_60%)]" />
          <h3 className="relative font-display text-2xl font-bold text-emerald-300 sm:text-3xl">Ship servers faster with VMBoard</h3>
          <p className="relative mx-auto mt-3 max-w-2xl text-emerald-300/85">
            From one‑click Nginx configs to a full file manager and terminal, VMBoard makes complex ops tasks approachable and safe.
          </p>

          <div className="relative mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-5 py-3 font-medium text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/60"
            >
              <Rocket className="h-5 w-5" />
              Start Free
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-emerald-900/60 bg-zinc-900/70 px-5 py-3 font-medium text-emerald-200 transition hover:bg-zinc-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700/50"
            >
              <Github className="h-5 w-5" />
              Continue with GitHub
            </a>
          </div>

          <p className="relative mt-4 text-xs text-emerald-300/70">Debian today · More distros soon · Mac & Windows on the roadmap</p>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-5xl text-center text-xs text-emerald-300/70">
        VMBoard visualizes DevOps — dashboards, analytics, packages, services, processes, networks, terminal, and fine‑grained RBAC.
      </p>
    </section>
  );
};

export default CTA;

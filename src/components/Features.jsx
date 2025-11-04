import React from 'react';
import { Terminal, Server, Activity, HardDrive, Folder, Package, Database, Network, Cog, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Terminal className="h-5 w-5 text-emerald-400" />,
    title: 'Terminal',
    desc: 'Browser-based terminal with tabs, user switching, and script uploads — no public IP or SSH needed.'
  },
  {
    icon: <Server className="h-5 w-5 text-emerald-400" />,
    title: 'Dashboard',
    desc: 'View all VMs with status, CPU, RAM, storage, OS and quick actions. Add via SSH or guided install.'
  },
  {
    icon: <Activity className="h-5 w-5 text-emerald-400" />,
    title: 'Realtime Metrics',
    desc: 'Per‑second CPU, memory, disk and network usage with historical analytics (15m/1h/6h+).'
  },
  {
    icon: <HardDrive className="h-5 w-5 text-emerald-400" />,
    title: 'Disks & Partitions',
    desc: 'See usage, physical disks and manage partitions with a safe, form‑based editor.'
  },
  {
    icon: <Folder className="h-5 w-5 text-emerald-400" />,
    title: 'File Browser',
    desc: 'Preview, edit (Monaco), move/copy/download, and upload folders recursively via S3 relay.'
  },
  {
    icon: <Package className="h-5 w-5 text-emerald-400" />,
    title: 'Packages & Plugins',
    desc: 'Search APT, manage repos, and GUI controls for Nginx, Postgres, Docker. Community plugins ready.'
  },
  {
    icon: <Cog className="h-5 w-5 text-emerald-400" />,
    title: 'Services',
    desc: 'Start/stop/restart, edit unit files and tail logs — all without leaving your browser.'
  },
  {
    icon: <Database className="h-5 w-5 text-emerald-400" />,
    title: 'Analytics',
    desc: 'Backed by InfluxDB on the host for efficient, long‑term time‑series metrics.'
  },
  {
    icon: <Network className="h-5 w-5 text-emerald-400" />,
    title: 'Networks & Firewall',
    desc: 'Manage interfaces and rules with guardrails and ready‑made templates.'
  },
  {
    icon: <Shield className="h-5 w-5 text-emerald-400" />,
    title: 'RBAC & Teams',
    desc: 'Multi‑level access controls across tabs, actions and on‑host users for safe collaboration.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative z-10 bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Highlight Card */}
        <div className="mx-auto mb-12 max-w-5xl overflow-hidden rounded-2xl border border-emerald-800/40 bg-gradient-to-br from-zinc-950 to-black p-0 ring-1 ring-emerald-900/40">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-800/20 px-3 py-1 text-emerald-300 ring-1 ring-emerald-900/40">
                <Zap className="h-4 w-4" />
                Real‑time control surface
              </div>
              <h2 className="font-display text-3xl font-bold text-emerald-300 sm:text-4xl">Everything DevOps. Visual.</h2>
              <p className="mt-3 text-emerald-300/85">
                Replace fragile, repetitive terminal rituals with guard‑railed, high‑signal UI actions. VMBoard turns ops into muscle memory.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Terminal tabs','APT search','Influx analytics','Nginx templates','Docker GUI','RBAC'].map((t) => (
                  <span key={t} className="rounded-full border border-emerald-900/60 bg-zinc-900/70 px-3 py-1 text-xs text-emerald-200">{t}</span>
                ))}
              </div>
            </div>
            <div className="relative p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.15),transparent_60%)]" />
              <div className="relative h-full w-full rounded-xl border border-emerald-900/60 bg-zinc-950/70 p-4">
                <div className="mb-3 flex items-center gap-2 text-emerald-300/80">
                  <div className="h-2 w-2 rounded-full bg-emerald-600" /> live-stream
                </div>
                <div className="h-36 w-full rounded-md bg-zinc-900/80"></div>
                <p className="mt-3 text-xs text-emerald-400/80">Realtime CPU / Memory / Disk / Net — 1s cadence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div key={idx} className="group rounded-xl border border-emerald-800/40 bg-zinc-950/60 p-5 transition hover:border-emerald-700/50 hover:bg-zinc-950">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-800/30 ring-1 ring-emerald-900/50">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-emerald-300/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

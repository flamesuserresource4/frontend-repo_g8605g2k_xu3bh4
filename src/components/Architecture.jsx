import React from 'react';
import { Lock, Cloud, Wifi, KeyRound } from 'lucide-react';

const steps = [
  {
    title: 'Agent ↔ Socket Core',
    desc: 'Each VM runs a lightweight agent that establishes an outbound, persistent reverse socket to VMBoard’s core.',
    icon: <Wifi className="h-5 w-5 text-emerald-400" />,
  },
  {
    title: 'Dashboard Client',
    desc: 'Your browser connects as a separate client. Commands and streams are multiplexed securely over the socket.',
    icon: <Cloud className="h-5 w-5 text-emerald-400" />,
  },
  {
    title: 'Private Network Friendly',
    desc: 'Only outbound internet is needed. No public IP, no SSH exposure. Works across NAT and VPCs.',
    icon: <Lock className="h-5 w-5 text-emerald-400" />,
  },
  {
    title: 'API Keys & Roles',
    desc: 'Per‑account API keys and RBAC define who can see which tabs and perform which actions.',
    icon: <KeyRound className="h-5 w-5 text-emerald-400" />,
  },
];

const Architecture = () => {
  return (
    <section className="relative bg-zinc-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-emerald-300 sm:text-4xl">Reverse Socket Architecture</h2>
          <p className="mt-3 text-emerald-300/85">Designed for reliability, security, and low friction — especially in private networks.</p>
        </div>

        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
          {steps.map((step, i) => (
            <div key={i} className="relative rounded-xl border border-emerald-900/60 bg-gradient-to-b from-zinc-900/70 to-zinc-950/70 p-6">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-800/30 ring-1 ring-emerald-900/50">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm text-emerald-300/80">{step.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-emerald-900/40" />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-emerald-900/50 bg-zinc-950/70 p-5 text-center">
          <code className="rounded bg-zinc-900 px-3 py-2 text-sm text-emerald-300 ring-1 ring-emerald-800/50">curl -fsSL https://repo.vmboard.sh/install.sh | bash</code>
          <p className="mt-2 text-xs text-emerald-300/70">Debian today · Multi‑distro soon · Mac & Windows on the roadmap</p>
        </div>
      </div>
    </section>
  );
};

export default Architecture;

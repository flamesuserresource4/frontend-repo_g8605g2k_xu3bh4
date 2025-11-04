import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Architecture from './components/Architecture';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <Architecture />
      <CTA />

      {/* Footer (simple) */}
      <footer className="border-t border-emerald-500/20 bg-zinc-950 px-6 py-8 text-emerald-200/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} VMBoard. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#features" className="hover:text-emerald-300">Features</a>
            <a href="#get-started" className="hover:text-emerald-300">Get Started</a>
            <a href="#" className="hover:text-emerald-300">Privacy</a>
            <a href="#" className="hover:text-emerald-300">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

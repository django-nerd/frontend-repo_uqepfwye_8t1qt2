import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="text-white font-semibold tracking-tight">Your Business</a>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-blue-200 hover:text-white transition text-sm">
              {n.label}
            </a>
          ))}
          <a href="#quote" className="px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold">Get Quote</a>
        </nav>
        <button onClick={() => setOpen((o) => !o)} className="md:hidden text-blue-200">
          <span className="sr-only">Menu</span>
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 px-6 py-3 bg-slate-950/80">
          <div className="flex flex-col gap-3">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-blue-200 hover:text-white transition text-sm">
                {n.label}
              </a>
            ))}
            <a href="#quote" onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold w-max">Get Quote</a>
          </div>
        </div>
      )}
    </header>
  );
}

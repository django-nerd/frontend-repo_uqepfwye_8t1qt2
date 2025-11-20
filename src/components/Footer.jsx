export default function Footer() {
  return (
    <footer className="mt-16 py-10 border-t border-white/10 bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-blue-300/70 text-sm">© {new Date().getFullYear()} Print Studio — Low Prices, 10x Quality.</p>
        <div className="text-blue-300/70 text-sm">Fast quotes • Nationwide shipping • Eco inks</div>
      </div>
    </footer>
  );
}

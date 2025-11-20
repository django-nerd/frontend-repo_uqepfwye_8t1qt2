export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-14">
      <div className="rounded-2xl bg-slate-800/60 border border-white/10 p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">About Us</h2>
        <p className="mt-4 text-blue-200/90 leading-relaxed">
          We are a modern print studio focused on low prices and 10x quality. Our team blends
          craftsmanship with automation to deliver consistent results on apparel and merchandise.
          Whether you need 10 shirts or 10,000, we make it fast, transparent, and reliable.
        </p>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
            <p className="text-white font-semibold">Precision</p>
            <p className="text-blue-200/80 text-sm mt-1">Color-accurate prints and crisp details.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
            <p className="text-white font-semibold">Speed</p>
            <p className="text-blue-200/80 text-sm mt-1">Rapid turnaround with live pricing.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-900/40 p-4">
            <p className="text-white font-semibold">Value</p>
            <p className="text-blue-200/80 text-sm mt-1">Best-in-class quality at fair prices.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

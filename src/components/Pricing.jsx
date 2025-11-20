export default function Pricing() {
  const tiers = [
    { name: "Starter", price: "$", desc: "Small batches, tight budgets", features: ["10-19 items", "1-2 colors", "Standard turnaround"] },
    { name: "Growth", price: "$$", desc: "Best value for teams", features: ["20-49 items", "Up to 4 colors", "Priority turnaround"] },
    { name: "Scale", price: "$$$", desc: "High volume discounts", features: ["50+ items", "Multi-color", "Dedicated support"] },
  ];
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-14">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-2xl bg-slate-800/60 border border-white/10 p-6">
            <p className="text-white font-semibold">{t.name}</p>
            <p className="text-3xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">{t.price}</p>
            <p className="text-blue-200/80 text-sm mt-1">{t.desc}</p>
            <ul className="mt-4 space-y-2 text-blue-100/90 text-sm">
              {t.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-blue-200/80 text-sm mt-4">Use the Instant Quote below for exact pricing with color and volume discounts.</p>
    </section>
  );
}

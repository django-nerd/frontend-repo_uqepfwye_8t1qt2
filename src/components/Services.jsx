import { useEffect, useState } from "react";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "";

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch(`${BACKEND}/services`);
        if (!res.ok) throw new Error("Failed to load services");
        const data = await res.json();
        setServices(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-14">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Popular Services</h2>
      {loading && <p className="text-blue-200">Loading services…</p>}
      {error && (
        <div className="text-rose-300 bg-rose-950/40 border border-rose-800/40 p-4 rounded-xl">
          {error} — try clicking "Seed Services" below.
        </div>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.key} className="rounded-2xl bg-slate-800/60 border border-white/10 p-5">
            <h3 className="text-white font-semibold text-lg">{s.name}</h3>
            <p className="text-blue-200/80 text-sm mt-1">{s.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-blue-300 font-mono text-sm">from ${s.base_price.toFixed(2)}</span>
              <span className="text-xs text-blue-200/70 px-2 py-1 rounded bg-slate-700/50 border border-white/10">min {s.minimum_quantity}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button
          onClick={async () => {
            try {
              await fetch(`${BACKEND}/seed/services`, { method: "POST" });
              const res = await fetch(`${BACKEND}/services`);
              setServices(await res.json());
              setError("");
            } catch (e) {
              setError("Unable to seed services");
            }
          }}
          className="px-4 py-2 rounded-xl bg-slate-700/70 text-white border border-white/10 hover:bg-slate-700"
        >
          Seed Services
        </button>
      </div>
    </section>
  );
}

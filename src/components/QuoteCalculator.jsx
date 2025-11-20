import { useEffect, useMemo, useState } from "react";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "";

export default function QuoteCalculator() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    service_key: "tshirt",
    quantity: 10,
    colors: 1,
    print_area: "medium",
    customer_name: "",
    customer_email: "",
    notes: "",
  });
  const [pricing, setPricing] = useState(null);
  const [quoteId, setQuoteId] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${BACKEND}/services`);
        if (!res.ok) return;
        const data = await res.json();
        setServices(data);
        if (data?.length && !data.find((d) => d.key === form.service_key)) {
          setForm((f) => ({ ...f, service_key: data[0].key }));
        }
      } catch {}
    };
    load();
  }, []);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(`${BACKEND}/price`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_key: form.service_key,
            quantity: Number(form.quantity),
            colors: Number(form.colors),
            print_area: form.print_area,
          }),
        });
        if (!res.ok) return setPricing(null);
        setPricing(await res.json());
      } catch {
        setPricing(null);
      }
    };
    fetchPrice();
  }, [form.service_key, form.quantity, form.colors, form.print_area]);

  const submitQuote = async () => {
    const payload = {
      customer_name: form.customer_name,
      customer_email: form.customer_email,
      service_key: form.service_key,
      quantity: Number(form.quantity),
      colors: Number(form.colors),
      print_area: form.print_area,
      notes: form.notes,
    };
    const res = await fetch(`${BACKEND}/quotes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (res.ok) setQuoteId(data.id);
  };

  return (
    <section id="quote" className="max-w-6xl mx-auto px-6 py-14">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Instant Quote</h2>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl bg-slate-800/60 border border-white/10 p-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-blue-200 text-sm mb-1">Service</label>
              <select
                value={form.service_key}
                onChange={(e) => setForm({ ...form, service_key: e.target.value })}
                className="w-full bg-slate-900/60 border border-white/10 rounded-lg p-2 text-white"
              >
                {services.map((s) => (
                  <option key={s.key} value={s.key}>{s.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-blue-200 text-sm mb-1">Quantity</label>
              <input type="number" min="1" value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                className="w-full bg-slate-900/60 border border-white/10 rounded-lg p-2 text-white" />
            </div>
            <div>
              <label className="block text-blue-200 text-sm mb-1">Colors</label>
              <input type="number" min="1" max="10" value={form.colors}
                onChange={(e) => setForm({ ...form, colors: e.target.value })}
                className="w-full bg-slate-900/60 border border-white/10 rounded-lg p-2 text-white" />
            </div>
            <div>
              <label className="block text-blue-200 text-sm mb-1">Print Area</label>
              <select value={form.print_area}
                onChange={(e) => setForm({ ...form, print_area: e.target.value })}
                className="w-full bg-slate-900/60 border border-white/10 rounded-lg p-2 text-white">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div>
              <label className="block text-blue-200 text-sm mb-1">Name</label>
              <input value={form.customer_name}
                onChange={(e) => setForm({ ...form, customer_name: e.target.value })}
                className="w-full bg-slate-900/60 border border-white/10 rounded-lg p-2 text-white" />
            </div>
            <div>
              <label className="block text-blue-200 text-sm mb-1">Email</label>
              <input type="email" value={form.customer_email}
                onChange={(e) => setForm({ ...form, customer_email: e.target.value })}
                className="w-full bg-slate-900/60 border border-white/10 rounded-lg p-2 text-white" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-blue-200 text-sm mb-1">Notes</label>
            <textarea value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full bg-slate-900/60 border border-white/10 rounded-lg p-2 text-white min-h-[90px]" />
          </div>
        </div>
        <div className="rounded-2xl bg-slate-800/60 border border-white/10 p-5">
          <h3 className="text-white font-semibold">Your Quote</h3>
          {pricing ? (
            <div className="mt-3 space-y-2">
              <div className="flex justify-between text-blue-200"><span>Unit price</span><span>${pricing.unit_price.toFixed(2)}</span></div>
              <div className="flex justify-between text-blue-200"><span>Total</span><span className="font-semibold text-white">${pricing.total_price.toFixed(2)}</span></div>
              <button onClick={submitQuote} className="mt-4 w-full px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold">Request Formal Quote</button>
              {quoteId && <p className="text-green-300 text-sm">Quote submitted! ID: {quoteId}</p>}
            </div>
          ) : (
            <p className="text-blue-200">Adjust options to see pricing…</p>
          )}
        </div>
      </div>
    </section>
  );
}

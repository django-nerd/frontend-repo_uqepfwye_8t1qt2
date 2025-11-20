const BACKEND = import.meta.env.VITE_BACKEND_URL || "";

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");
    // Fallback to quotes endpoint as a lightweight contact/quote form
    await fetch(`${BACKEND}/quotes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer_name: name,
        customer_email: email,
        service_key: "tshirt",
        quantity: 1,
        colors: 1,
        print_area: "medium",
        notes: message,
      }),
    }).catch(() => {});
    e.currentTarget.reset();
    alert("Thanks! We'll get back to you shortly.");
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-14">
      <div className="rounded-2xl bg-slate-800/60 border border-white/10 p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Contact</h2>
        <p className="mt-2 text-blue-200/90">Have a project in mind? Send a quick note and we'll reply fast.</p>
        <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
          <input name="name" placeholder="Your name" required className="w-full bg-slate-900/60 border border-white/10 rounded-lg p-3 text-white" />
          <input name="email" type="email" placeholder="Email" required className="w-full bg-slate-900/60 border border-white/10 rounded-lg p-3 text-white" />
          <textarea name="message" placeholder="Tell us about your needs" rows={4} className="sm:col-span-2 w-full bg-slate-900/60 border border-white/10 rounded-lg p-3 text-white" />
          <button className="sm:col-span-2 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold w-max">Send</button>
        </form>
      </div>
    </section>
  );
}

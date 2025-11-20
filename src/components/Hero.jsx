import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.12),transparent_45%)]" />
      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight text-center"
        >
          10x Quality Custom Printing
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
            For T‑Shirts, Bags, Hoodies & More
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-blue-200/90 text-lg md:text-xl text-center max-w-3xl mx-auto"
        >
          Get studio-grade prints at unbeatable prices. Fast quotes, transparent pricing,
          and pro results every time.
        </motion.p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#quote" className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold shadow-lg shadow-blue-500/20 transition">
            Get Instant Quote
          </a>
          <a href="#services" className="px-5 py-3 rounded-xl bg-slate-800/60 hover:bg-slate-700/60 border border-white/10 text-white font-semibold transition">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}

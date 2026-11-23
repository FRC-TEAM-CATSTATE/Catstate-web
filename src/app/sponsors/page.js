"use client";
import { motion } from "framer-motion";

export default function Sponsors() {
  return (
    <div className="bg-paper text-ink">
      <section className="text-paper py-20 rough tex-drafting relative">
        <div className="absolute inset-0 bg-ink/80"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="font-mono text-xs text-ice tracking-widest mb-3">05 / SPONSORS</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold">Sponsors</h1>
          <p className="text-paper/70 mt-4 max-w-2xl text-lg">
            Our partners make the robot possible.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border-4 border-ink bg-paper h-28 flex items-center justify-center font-mono text-xs text-ink/40 shadow-[3px_3px_0_#161F30] tex-concrete relative"
            >
              <div className="absolute inset-0 bg-paper/80" />
              <span className="relative z-10">SPONSOR_{i + 1}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-ink/70 mb-4">Interested in supporting CATSTATE?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-steel text-paper px-6 py-3 font-heading font-semibold text-sm border-2 border-ink shadow-[3px_3px_0_#161F30] hover:bg-amber hover:text-ink transition-colors"
          >
            Become a sponsor
          </a>
        </div>
      </section>
    </div>
  );
}
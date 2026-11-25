"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const programs = [
  { title: "School Visits", desc: "Bringing robotics demos to local schools." },
  { title: "Workshops", desc: "Hands-on STEM workshops for students." },
  { title: "Mentorship", desc: "Guiding rookie teams in the region." },
  { title: "Open House", desc: "Showcasing our robot to the community." },
];

export default function Outreach() {
  return (
    <div className="bg-paper text-ink">
      <section className="text-paper py-20 rough tex-concrete relative">
        <div className="absolute inset-0 bg-ink/80"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="font-mono text-xs text-ice tracking-widest mb-3">04 / OUTREACH</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold">Outreach</h1>
          <p className="text-paper/70 mt-4 max-w-2xl text-lg">
            Spreading STEM and robotics beyond our workshop.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-6">
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-4 border-ink bg-paper p-6 shadow-[4px_4px_0_#161F30] tex-drafting relative"
          >
            <div className="absolute inset-0 bg-paper/90" />
            <div className="relative z-10">
              <p className="font-mono text-xs text-steel mb-2">0{i + 1}</p>
              <h3 className="font-heading font-semibold text-xl">{p.title}</h3>
              <p className="text-ink/70 text-sm mt-2">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
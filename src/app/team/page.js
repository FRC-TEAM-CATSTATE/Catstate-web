"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const roles = ["Mechanical", "Electrical", "Software", "CAD & Design", "Strategy", "Media & Outreach", "Mentor", "Operations"];
const members = Array.from({ length: 30 }).map((_, i) => ({
  name: `Member ${i + 1}`,
  role: roles[i % roles.length],
}));

export default function Team() {
  return (
    <div className="bg-paper text-ink">
      <section className="text-paper py-20 rough tex-drafting relative">
        <div className="absolute inset-0 bg-ink/80"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="font-mono text-xs text-ice tracking-widest mb-3">03 / TEAM</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold">The Team</h1>
          <p className="text-paper/70 mt-4 max-w-2xl text-lg">
            Students building robots, skills and friendships.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[16/9] overflow-hidden border-4 border-ink shadow-[6px_6px_0_#161F30] tex-concrete"
        >
          <Image src="/team.jpeg" alt="CATSTATE team" fill className="object-cover" />
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
              className="border-2 border-ink bg-paper p-4 shadow-[3px_3px_0_#161F30] tex-drafting relative"
            >
              <div className="absolute inset-0 bg-paper/90" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-steel flex items-center justify-center font-heading font-bold text-paper mb-3">
                  {m.name.charAt(7) || (i + 1)}
                </div>
                <h3 className="font-heading font-semibold text-sm">{m.name}</h3>
                <p className="text-ink/60 text-xs font-mono mt-1">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
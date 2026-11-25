"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-paper text-ink">
      <section className="text-paper py-20 rough tex-drafting relative">
        <div className="absolute inset-0 bg-ink/80"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="font-mono text-xs text-ice tracking-widest mb-3">01 / ABOUT</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold">About CATSTATE</h1>
          <p className="text-paper/70 mt-4 max-w-2xl text-lg">
            Formerly Mechaducks 12364, rebranding to CATSTATE for the 2027
            season. Competing in the FRC Izmir regionals.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <h2 className="font-heading text-3xl font-bold">Our Story</h2>
          <p className="text-ink/70 leading-relaxed">
            We are a student robotics team building competitive robots for the
            FIRST Robotics Competition. From CAD to code, every member
            contributes to a machine that competes on the world stage.
          </p>
          <p className="text-ink/70 leading-relaxed">
            The rebrand to CATSTATE reflects a sharper identity — industrial
            precision, modern editorial craft and motorsport energy — while
            keeping the same team number and spirit: 12364.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/3] overflow-hidden border-4 border-ink shadow-[6px_6px_0_#161F30] tex-concrete"
        >
          <Image
            src="/assets/Cinematic Robot Workshop Build.png"
            alt="Workshop"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      <section className="bg-ink/5 py-20 tex-drafting relative">
        <div className="absolute inset-0 bg-paper/85" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="font-heading text-3xl font-bold mb-8">Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Precision", d: "Every part measured, every line reviewed." },
              { t: "Iteration", d: "Build, test, improve, repeat." },
              { t: "Teamwork", d: "Students leading students." },
            ].map(({ t, d }) => (
              <div key={t} className="bg-paper border border-ice p-6">
                <h3 className="font-heading font-semibold text-xl mb-2">{t}</h3>
                <p className="text-ink/70 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
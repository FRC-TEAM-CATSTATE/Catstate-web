"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Robot() {
  const sections = [
    {
      title: "Shooter & Launcher",
      img: "/assets/Isometric Blueprint of a Robot Launcher Mechanism.png",
      alt: "Launcher mechanism blueprint",
      text: "Precision-engineered launcher mechanism for high-cycle scoring.",
    },
    {
      title: "Materials & Construction",
      img: "/assets/hightech aluminium foam.png",
      alt: "Aluminium foam",
      text: "Lightweight aluminium structures for strength-to-weight ratio.",
    },
    {
      title: "Electronics & Control",
      img: "/assets/Robotics Electronics Control Module Assembly.png",
      alt: "Electronics module",
      text: "Robust control system with custom wiring and sensor integration.",
    },
    {
      title: "Mechanical Systems",
      img: "/assets/realistic gear.jpg",
      alt: "Gear",
      text: "Machined gears and drivetrain components for reliable motion.",
    },
  ];

  return (
    <div className="bg-paper text-ink">
      <section className="text-paper py-20 rough tex-concrete relative">
        <div className="absolute inset-0 bg-ink/80"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="font-mono text-xs text-ice tracking-widest mb-3">02 / ROBOT</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold">The Robot</h1>
          <p className="text-paper/70 mt-4 max-w-2xl text-lg">
            CATSTATE's competition robot — engineered for the 2027 FRC season.
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
          <Image
            src="/assets/Competition Robot 12364 Isolated.png"
            alt="CATSTATE Robot"
            fill
            className="object-contain"
          />
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-8">
        {sections.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border-4 border-ink bg-paper overflow-hidden shadow-[4px_4px_0_#161F30] tex-drafting relative"
          >
            <div className="absolute inset-0 bg-paper/90" />
            <div className="relative z-10">
              <div className="relative aspect-[4/3] bg-ink">
                <Image src={s.img} alt={s.alt} fill className="object-contain p-4" />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl">{s.title}</h3>
                <p className="text-ink/70 text-sm mt-2">{s.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
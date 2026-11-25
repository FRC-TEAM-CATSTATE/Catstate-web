"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cog, Zap, Shield, Code2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  return (
    <div className="bg-paper text-ink">
      {/* HERO */}
      <section className="text-paper relative overflow-hidden rough tex-grid">
<<<<<<< HEAD
        <div className="absolute inset-0 bg-ink/90" />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center relative z-10">
=======
        <div className="absolute inset-0 bg-ink/75" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center relative z-10">
>>>>>>> b173aabf00aa5278b4abb93f6c373025d22fe29d
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="space-y-6"
          >
            <motion.p
              variants={fadeUp}
              className="font-mono text-xs text-ice tracking-widest"
            >
              TEAM_12364 / FRC_2027 / IZMIR_REGIONALS
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-heading text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight"
            >
              BUILD
              <br />
              WITHOUT
              <br />
              <span className="text-amber">LIMITS.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-paper/70 max-w-md text-lg leading-relaxed"
            >
              CATSTATE is an FRC robotics team engineering tomorrow, one
              iteration at a time. Industrial precision meets motorsport energy.
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-4 pt-2">
              <Link
                href="/robot"
<<<<<<< HEAD
                className="inline-flex items-center gap-2 bg-steel text-paper px-4 py-3 font-heading font-semibold text-sm border-2 border-ink shadow-[3px_3px_0_#161F30] hover:bg-amber hover:text-ink transition-colors"
=======
                className="inline-flex items-center gap-2 bg-steel text-paper px-6 py-3 font-heading font-semibold text-sm border-2 border-ink shadow-[3px_3px_0_#161F30] hover:bg-amber hover:text-ink transition-colors"
>>>>>>> b173aabf00aa5278b4abb93f6c373025d22fe29d
              >
                Explore Robot <ArrowRight size={16} />
              </Link>
              <Link
                href="/sponsors"
<<<<<<< HEAD
                className="inline-flex items-center gap-2 border-2 border-ice px-4 py-3 font-heading font-semibold text-sm shadow-[3px_3px_0_#CAD9DC] hover:border-amber hover:text-amber transition-colors"
=======
                className="inline-flex items-center gap-2 border-2 border-ice px-6 py-3 font-heading font-semibold text-sm shadow-[3px_3px_0_#CAD9DC] hover:border-amber hover:text-amber transition-colors"
>>>>>>> b173aabf00aa5278b4abb93f6c373025d22fe29d
              >
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
            className="flex justify-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent z-10 pointer-events-none" />
            <Image
              src="/assets/cat.webp"
              alt="CATSTATE Competition Robot"
              width={500}
              height={500}
              priority
              className="object-contain relative z-0"
            />
          </motion.div>
        </div>
      </section>

      {/* ENGINEERING INTRO */}
      <div className="sep" />
      <section className="relative">
        <div className="relative h-[420px] overflow-hidden">
          <Image
            src="/assets/Cinematic Robot Workshop Build.png"
            alt="Engineering workshop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger}
                className="max-w-2xl space-y-4"
              >
                <motion.p variants={fadeUp} className="font-mono text-xs text-ice tracking-widest">
                  01 / ENGINEERING
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  className="font-heading text-4xl md:text-5xl font-bold text-paper leading-tight"
                >
                  Designed in CAD. Built in metal. Tested on the field.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-paper/70 text-lg">
                  Every subsystem is engineered for reliability, speed and
                  precision — from the drivetrain to the shooter mechanism.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING CARDS */}
      <div className="sep" />
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="font-mono text-xs text-steel tracking-widest">
              02 / SYSTEMS
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-4xl font-bold leading-tight"
            >
              Mechanical. Electrical. Software.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-ink/70 leading-relaxed">
              A complete robotics stack built by students. CAD models, wiring
              diagrams, control code and competition strategy — all under one
              roof.
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 pt-2">
              {[
                { icon: Cog, label: "Mechanical", desc: "Drivetrain & mechanisms", color: "border-ink" },
                { icon: Zap, label: "Electrical", desc: "Power & wiring", color: "border-steel" },
                { icon: Code2, label: "Software", desc: "Autonomous & teleop", color: "border-ice" },
                { icon: Shield, label: "Strategy", desc: "Scouting & game plan", color: "border-amber" },
              ].map(({ icon: Icon, label, desc, color }) => (
                <div
                  key={label}
                  className={`border-4 ${color} bg-paper p-4 shadow-[4px_4px_0_#161F30]`}
                >
                  <Icon size={20} className="text-steel mb-2" />
                  <h3 className="font-heading font-semibold text-sm">{label}</h3>
                  <p className="text-xs text-ink/60 mt-1">{desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square"
          >
            <Image
              src="/assets/Futuristic Robotic Metal Frame.png"
              alt="Robotic metal frame"
              fill
=======
            className="flex justify-center"
          >
            <Image
              src="/assets/Competition Robot 12364 Isolated.png"
              alt="CATSTATE Competition Robot"
              width={640}
              height={640}
              priority
>>>>>>> b173aabf00aa5278b4abb93f6c373025d22fe29d
              className="object-contain"
            />
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
      {/* STATS */}
      <div className="sep" />
      <section className="bg-ink text-paper py-20 rough">
        <div className="max-w-7xl mx-auto px-4">
=======
      {/* ENGINEERING INTRO */}
      <section className="relative">
        <div className="relative h-[420px] overflow-hidden">
          <Image
            src="/assets/Cinematic Robot Workshop Build.png"
            alt="Engineering workshop"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger}
                className="max-w-2xl space-y-4"
              >
                <motion.p variants={fadeUp} className="font-mono text-xs text-ice tracking-widest">
                  01 / ENGINEERING
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  className="font-heading text-4xl md:text-5xl font-bold text-paper leading-tight"
                >
                  Designed in CAD. Built in metal. Tested on the field.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-paper/70 text-lg">
                  Every subsystem is engineered for reliability, speed and
                  precision — from the drivetrain to the shooter mechanism.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING CARDS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="font-mono text-xs text-steel tracking-widest">
              02 / SYSTEMS
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-4xl font-bold leading-tight"
            >
              Mechanical. Electrical. Software.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-ink/70 leading-relaxed">
              A complete robotics stack built by students. CAD models, wiring
              diagrams, control code and competition strategy — all under one
              roof.
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 pt-2">
              {[
                { icon: Cog, label: "Mechanical", desc: "Drivetrain & mechanisms", color: "border-ink" },
                { icon: Zap, label: "Electrical", desc: "Power & wiring", color: "border-steel" },
                { icon: Code2, label: "Software", desc: "Autonomous & teleop", color: "border-ice" },
                { icon: Shield, label: "Strategy", desc: "Scouting & game plan", color: "border-amber" },
              ].map(({ icon: Icon, label, desc, color }) => (
                <div
                  key={label}
                  className={`border-4 ${color} bg-paper p-4 shadow-[4px_4px_0_#161F30]`}
                >
                  <Icon size={20} className="text-steel mb-2" />
                  <h3 className="font-heading font-semibold text-sm">{label}</h3>
                  <p className="text-xs text-ink/60 mt-1">{desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square"
          >
            <Image
              src="/assets/Futuristic Robotic Metal Frame.png"
              alt="Robotic metal frame"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-ink text-paper py-20 rough">
        <div className="max-w-7xl mx-auto px-6">
>>>>>>> b173aabf00aa5278b4abb93f6c373025d22fe29d
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { n: "12364", label: "Team Number" },
              { n: "FRC", label: "Competition" },
              { n: "2027", label: "Season" },
              { n: "IZMIR", label: "Regionals" },
            ].map(({ n, label }) => (
              <motion.div key={label} variants={fadeUp}>
                <div className="font-heading text-4xl md:text-5xl font-bold text-amber">
                  {n}
                </div>
                <div className="font-mono text-xs text-ice/70 mt-2 tracking-widest">
                  {label.toUpperCase()}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GEAR STRIP */}
<<<<<<< HEAD
      <div className="sep" />
      <section className="max-w-7xl mx-auto px-4 py-20">
=======
      <section className="max-w-7xl mx-auto px-6 py-20">
>>>>>>> b173aabf00aa5278b4abb93f6c373025d22fe29d
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 flex flex-col justify-center">
            <p className="font-mono text-xs text-steel tracking-widest mb-2">
              03 / DETAIL
            </p>
            <h2 className="font-heading text-3xl font-bold leading-tight">
              Precision in every part.
            </h2>
            <p className="text-ink/70 mt-3 text-sm leading-relaxed">
              From aluminium foam structures to machined gears, material choice
              drives performance.
            </p>
            <Link
              href="/robot"
              className="inline-flex items-center gap-2 text-steel font-heading font-semibold text-sm mt-4 hover:text-amber transition-colors"
            >
              See the robot <ArrowRight size={14} />
            </Link>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            <div className="relative aspect-square overflow-hidden border-4 border-ink">
              <Image
                src="/assets/realistic gear.jpg"
                alt="Machined gear"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden border-4 border-amber">
              <Image
                src="/assets/hightech aluminium foam.png"
                alt="Aluminium foam"
                fill
                className="object-contain bg-ink"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
<<<<<<< HEAD
      <div className="sep" />
      <section className="bg-steel text-paper py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
=======
      <section className="bg-steel text-paper py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
>>>>>>> b173aabf00aa5278b4abb93f6c373025d22fe29d
          <div>
            <h2 className="font-heading text-3xl font-bold">Join the build.</h2>
            <p className="text-paper/80 mt-1">
              We're always looking for sponsors, mentors and new members.
            </p>
          </div>
          <Link
            href="/contact"
<<<<<<< HEAD
            className="inline-flex items-center gap-2 bg-ink text-paper px-4 py-3 font-heading font-semibold text-sm border-2 border-amber shadow-[3px_3px_0_#F2A65A] hover:bg-amber hover:text-ink transition-colors"
=======
            className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 font-heading font-semibold text-sm border-2 border-amber shadow-[3px_3px_0_#F2A65A] hover:bg-amber hover:text-ink transition-colors"
>>>>>>> b173aabf00aa5278b4abb93f6c373025d22fe29d
          >
            Get in touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
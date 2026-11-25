"use client";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-paper text-ink">
      <section className="text-paper py-20 rough tex-concrete relative">
        <div className="absolute inset-0 bg-ink/80"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="font-mono text-xs text-ice tracking-widest mb-3">06 / CONTACT</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold">Contact</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-start gap-3">
            <Mail size={20} className="text-steel mt-1" />
            <div>
              <h3 className="font-heading font-semibold">Email</h3>
              <p className="text-ink/70 text-sm">team@catstate.example</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={20} className="text-steel mt-1" />
            <div>
              <h3 className="font-heading font-semibold">Location</h3>
              <p className="text-ink/70 text-sm">Izmir, Turkey — FRC Regionals</p>
            </div>
          </div>
        </motion.div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-ice bg-paper px-4 py-3 text-sm focus:outline-none focus:border-steel"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-ice bg-paper px-4 py-3 text-sm focus:outline-none focus:border-steel"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full border border-ice bg-paper px-4 py-3 text-sm focus:outline-none focus:border-steel"
          />
          <button
            type="button"
            className="bg-steel text-paper px-6 py-3 font-heading font-semibold text-sm border-2 border-ink shadow-[3px_3px_0_#161F30] hover:bg-amber hover:text-ink transition-colors"
          >
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}
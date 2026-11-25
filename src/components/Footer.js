"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/robot", label: "Robot" },
  { href: "/team", label: "Team" },
  { href: "/outreach", label: "Outreach" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.svg" alt="CATSTATE" className="h-7 w-auto" />
            <span className="font-heading font-bold text-lg">CATSTATE</span>
          </div>
          <p className="text-sm text-ice/70 font-mono">TEAM_12364 / FRC_2027</p>
          <p className="text-sm text-paper/60 mt-3">
            Engineering tomorrow, one iteration at a time.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-3 text-ice">Navigate</h4>
          <ul className="grid grid-cols-2 gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-paper/70 hover:text-amber transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-3 text-ice">Contact</h4>
          <p className="text-sm text-paper/70">Izmir Regionals — FRC</p>
          <p className="text-sm text-paper/70 mt-1">Mechaducks → CATSTATE</p>
        </div>
      </div>
      <div className="border-t border-steel/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-paper/50 font-mono">
            © 2026 CATSTATE — Team 12364. All rights reserved.
          </p>
          <p className="text-xs text-paper/50 font-mono">BUILD WITHOUT LIMITS.</p>
        </div>
      </div>
    </footer>
  );
}
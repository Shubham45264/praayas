import { Link } from "@tanstack/react-router";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/50 bg-background">
      <div className="container-page py-14 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-2 space-y-4 max-w-md">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl text-white" style={{ background: "var(--gradient-brand)" }}>
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold">
              Prayaas <span className="gradient-text">Academy</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A premium coaching institute dedicated to building bright futures through expert mentorship, smart learning, and a results-driven approach.
          </p>
          <div className="flex gap-2">
            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border text-foreground/70 transition hover:text-primary hover:border-primary/40"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/about", label: "About Us" },
              { to: "/courses", label: "Courses" },
              { to: "/results", label: "Results" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" /> 123 Education Street, Knowledge Park, India</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-primary" /> +91 98765 43210</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-primary" /> hello@prayaasclasses.in</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Prayaas Academy. All rights reserved.</p>
          <p>Developed by sjtechworks</p>
        </div>
      </div>
    </footer>
  );
}

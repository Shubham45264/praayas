import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/results", label: "Results" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "glass-dark border-b border-border/50 shadow-soft" : "bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white shadow-soft" style={{ background: "var(--gradient-brand)" }}>
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold truncate">
            Prayaas <span className="gradient-text">Academy</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-primary/10" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          {session ? (
            <>
              <span className="text-sm font-medium mr-2 text-muted-foreground hidden xl:inline-block">{session.user.email}</span>
              <Button onClick={handleLogout} variant="ghost" className="rounded-full">
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" className="rounded-full">
                <Link to="/login">Log In</Link>
              </Button>
              <Button asChild className="rounded-full text-white shadow-soft" style={{ background: "var(--gradient-brand)" }}>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border border-border bg-background/70 backdrop-blur"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/50 glass-dark">
          <div className="container-page py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-xl px-4 py-3 text-base font-medium hover:bg-primary/10"
                activeProps={{ className: "bg-primary/10 text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            {session ? (
              <Button onClick={handleLogout} variant="ghost" className="mt-2 w-full justify-start rounded-xl px-4 py-3 h-auto font-medium">
                Sign Out
              </Button>
            ) : (
              <>
                <Button asChild variant="ghost" className="mt-2 w-full justify-start rounded-xl px-4 py-3 h-auto font-medium">
                  <Link to="/login">Log In</Link>
                </Button>
                <Button asChild className="mt-2 rounded-full text-white" style={{ background: "var(--gradient-brand)" }}>
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

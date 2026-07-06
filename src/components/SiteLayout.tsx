import { ArrowRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "mailto:priya@taskhived.com" },
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [isLight, setIsLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", !isLight);
  }, [isLight]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* @section: site-navigation */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8" aria-label="Main navigation">
          <Link to="/" className="font-serif-display text-xl tracking-wide text-foreground transition hover:text-primary">
            priyadarshani.ai
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) =>
              item.href.startsWith("mailto:") ? (
                <a key={item.label} href={item.href} className="text-sm text-muted-foreground transition hover:text-primary">
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-sm transition hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"}`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
            <button
              type="button"
              onClick={() => setIsLight((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Toggle light and dark theme"
            >
              {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsLight((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground"
              aria-label="Toggle light and dark theme"
            >
              {isLight ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-border bg-background px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.href.startsWith("mailto:") ? (
                  <a key={item.label} href={item.href} className="text-sm text-muted-foreground" onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </a>
                ) : (
                  <NavLink key={item.label} to={item.href} className="text-sm text-muted-foreground" onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </NavLink>
                ),
              )}
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>
      <FooterCta />
    </div>
  );
}

export function FooterCta() {
  return (
    <footer className="border-t border-border bg-card/35">
      {/* @section: footer-cta */}
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-[1fr_0.9fr] md:px-8 md:py-20">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary">Get in touch</p>
          <h2 className="font-serif-display text-3xl leading-tight md:text-5xl">Let's build AI people can trust.</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">If you're working on trustworthy AI, enterprise deployment, human evaluation, governance, decision science or the future of human-AI collaboration, I'd love to continue the conversation.</p>
        </div>
        <form
          className="flex h-fit gap-2 self-end rounded-full border border-border bg-background p-2"
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href = "mailto:priya@taskhived.com";
          }}
        >
          <label htmlFor="contact-email" className="sr-only">Your email</label>
          <input
            id="contact-email"
            type="email"
            placeholder="your@email.com"
            className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Email Priya Darshani"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </section>

      {/* @section: footer-attribution */}
      <div className="border-t border-border/50 px-5 py-5 md:px-8">
        <p className="mx-auto max-w-7xl text-xs text-muted-foreground">
          Priya Darshani — CEO &amp; Co-founder, TaskHived. Writing on AI validation, Agentic AI, human judgment, and enterprise trust infrastructure.
        </p>
      </div>
    </footer>
  );
}

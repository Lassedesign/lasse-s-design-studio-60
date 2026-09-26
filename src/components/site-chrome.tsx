import { useEffect, useRef, useState, type ReactNode } from "react";
import { Instagram, Image as ImageIcon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import backgroundAsset from "@/assets/lasse-blue-background.jpeg.asset.json";

export const INSTAGRAM_URL = "https://www.instagram.com/lasse.design";

export const SLOT_GRADS = [
  "tile-grad-1",
  "tile-grad-2",
  "tile-grad-3",
  "tile-grad-4",
  "tile-grad-5",
  "tile-grad-6",
  "tile-grad-7",
  "tile-grad-8",
];

/* ---------------------------------- Utils --------------------------------- */

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="max-w-2xl whitespace-pre-line text-base leading-relaxed text-muted-foreground">{text}</p>
      ) : null}
    </Reveal>
  );
}

export function InstagramButton({ className }: { className?: string }) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-deep",
        className
      )}
    >
      <Instagram className="size-4" aria-hidden />
      @lasse.design
    </a>
  );
}

/* --------------------------------- Background ------------------------------ */

export function BackgroundAsset() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 bg-background" aria-hidden>
      <img
        src={backgroundAsset.url}
        alt=""
        className="h-full w-full object-cover opacity-90 saturate-125"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/35 to-background/75" />
    </div>
  );
}

/* --------------------------------- Header --------------------------------- */

export function Header({ home = false }: { home?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { label: "Konzepte", href: "/konzepte" },
    { label: "Angebote", href: home ? "#leistungen" : "/#leistungen" },
    { label: "Über mich", href: home ? "#ueber-mich" : "/#ueber-mich" },
    { label: "FAQ", href: home ? "#faq" : "/#faq" },
  ];
  const kontaktHref = home ? "#kontakt" : "/#kontakt";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/55 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href={home ? "#top" : "/"}
          className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-foreground"
        >
          <span>Lasse<span className="text-primary">.</span>Design</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
              {label}
            </a>
          ))}
          <a
            href={kontaktHref}
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            <Instagram className="size-4" aria-hidden />
            Kontakt
          </a>
        </nav>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          className="text-foreground hover:bg-accent md:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>
      <div id="mobile-navigation" className={cn("border-t border-border bg-background/80 px-5 backdrop-blur-xl md:hidden", menuOpen ? "block animate-fade-in" : "hidden")}>
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 py-4" aria-label="Mobile Navigation">
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} onClick={closeMenu} className="rounded-md px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent">
              {label}
            </a>
          ))}
          <a href={kontaktHref} onClick={closeMenu} className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
            <Instagram className="size-4" aria-hidden />
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}

/* --------------------------------- Footer ---------------------------------- */

export function Footer({ home = false }: { home?: boolean }) {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center sm:px-8">
        <a
          href={home ? "#top" : "/"}
          className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight text-foreground"
        >
          <span>Lasse<span className="text-primary">.</span>Design</span>
        </a>
        <p className="font-display text-sm font-medium tracking-wide text-muted-foreground">
          Auffällig. Einfach. Wirksam. Designs von morgen.
        </p>
        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
          Lasse.Design ist aktuell ein privates Hobbyprojekt und kein Unternehmen.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-deep"
        >
          <Instagram className="size-4" aria-hidden />
          @lasse.design
        </a>
      </div>
    </footer>
  );
}

/* -------------------------------- Image slots ------------------------------ */

export function ImageSlot({ gradient, delay = 0 }: { gradient: string; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div
        className={cn(
          "glass-panel group relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft",
          gradient
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-background/20" aria-hidden />
        <div className="relative flex size-14 items-center justify-center rounded-full border border-primary-foreground/30 bg-background/25 text-primary-foreground/75 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:text-primary-foreground">
          <ImageIcon className="size-6" strokeWidth={1.6} aria-hidden />
        </div>
      </div>
    </Reveal>
  );
}

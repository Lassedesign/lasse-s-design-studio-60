import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Instagram,
  PenTool,
  Sparkles,
  Heart,
  Sprout,
  Zap,
  Image as ImageIcon,
  MessageCircle,
  Palette,
  FileCheck,
  Package,
  Layers,
  ChevronDown,
  ArrowDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lasse.Design – Grafikdesign aus Leidenschaft." },
      {
        name: "description",
        content:
          "Lasse.Design ist das Grafikdesign-Hobbyprojekt von Lasse (16): moderne Poster, Werbeplakate und individuelle Designs. Auffällig. Einfach. Wirksam.",
      },
      {
        property: "og:title",
        content: "Lasse.Design – Grafikdesign aus Leidenschaft.",
      },
      {
        property: "og:description",
        content:
          "Moderne Poster, Werbeplakate und individuelle Designs – gestaltet aus Leidenschaft. Auffällig. Einfach. Wirksam.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const INSTAGRAM_URL = "https://www.instagram.com/lasse.design";

/* ---------------------------------- Utils --------------------------------- */

function Reveal({
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
      ([entry]) => {
        if (entry.isIntersecting) {
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

function SectionHeading({
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
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{text}</p>
      ) : null}
    </Reveal>
  );
}

function InstagramButton({ className }: { className?: string }) {
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

/* --------------------------------- Header --------------------------------- */

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          Lasse<span className="text-primary">.</span>Design
        </a>
        <div className="flex items-center gap-3">
          <a
            href="#portfolio"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            Portfolio
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-deep"
          >
            <Instagram className="size-4" aria-hidden />
            Kontakt
          </a>
        </div>
      </div>
    </header>
  );
}

/* ----------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-8rem] top-40 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute left-[-6rem] top-72 h-64 w-64 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 pb-24 pt-24 text-center sm:px-8 sm:pb-28 sm:pt-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
            <Sparkles className="size-3.5" aria-hidden />
            Hobbyprojekt
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Grafikdesign
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">
              aus Leidenschaft.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 font-display text-lg font-medium tracking-wide text-primary sm:text-xl">
            Auffällig. Einfach. Wirksam.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Ich bin Lasse, 16 Jahre alt und beschäftige mich leidenschaftlich mit
            Grafikdesign. Bei Lasse.Design entstehen moderne und individuelle Designs –
            aktuell als Hobby und aus Spaß am Gestalten.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <a
            href="#portfolio"
            className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-deep"
          >
            Portfolio ansehen
            <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Portfolio -------------------------------- */

const TILES = [
  "tile-grad-1",
  "tile-grad-2",
  "tile-grad-3",
  "tile-grad-4",
  "tile-grad-5",
  "tile-grad-6",
];

function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Meine Arbeiten"
          text="Einblicke in meine Designs – hier findest du eine Auswahl meiner bisherigen Arbeiten, von modernen Werbeplakaten bis hin zu individuellen Designprojekten."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TILES.map((grad, i) => (
            <Reveal key={grad} delay={(i % 3) * 120}>
              <div
                className={cn(
                  grad,
                  "group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-soft"
                )}
              >
                <div className="absolute inset-4 rounded-2xl border-2 border-dashed border-foreground/15 transition-colors duration-500 group-hover:border-foreground/25" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-foreground/40 transition-colors duration-500 group-hover:text-foreground/55">
                  <ImageIcon className="size-9" strokeWidth={1.5} aria-hidden />
                  <span className="font-display text-sm font-medium tracking-wide">
                    Projektbild folgt
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Leistungen ------------------------------- */

const SERVICES = [
  {
    icon: PenTool,
    title: "Poster & Plakate",
    price: "25 € pro Design",
    description: "Gestaltete Poster und Plakate – modern und auf dich zugeschnitten.",
  },
  {
    icon: MessageCircle,
    title: "Werbeplakate",
    price: "ab 25 €",
    description: "Auffällige Werbeplakate, die deine Botschaft klar rüberbringen.",
  },
  {
    icon: Package,
    title: "Produktdesigns",
    price: "Preis auf Anfrage",
    description: "Individuelle Designs für deine Produkte – sprich mich einfach an.",
  },
  {
    icon: Layers,
    title: "Weitere Designs",
    price: "Preis auf Anfrage",
    description: "Du hast eine andere Idee? Zusammen finden wir die richtige Umsetzung.",
  },
];

function Leistungen() {
  return (
    <section id="leistungen" className="scroll-mt-20 bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Leistungen"
          title="Was ich gestalte"
          text="Von Plakaten bis zu individuellen Designprojekten – hier bekommst du einen Überblick. Schreib mir einfach, was du brauchst."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-5.5" strokeWidth={1.8} aria-hidden />
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <p className="mt-5 font-display text-sm font-semibold text-primary">
                  {service.price}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Ablauf --------------------------------- */

const STEPS = [
  {
    number: "01",
    title: "Anfrage",
    text: "Du schreibst mir deine Idee direkt auf Instagram.",
  },
  {
    number: "02",
    title: "Gestaltung",
    text: "Ich setze dein Design individuell und mit Sorgfalt um.",
  },
  {
    number: "03",
    title: "Feedback",
    text: "Gemeinsam schauen wir uns das Ergebnis an.",
  },
  {
    number: "04",
    title: "Fertig",
    text: "Du erhältst dein fertiges Design.",
  },
];

function Ablauf() {
  return (
    <section id="ablauf" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Ablauf"
          title="So funktioniert's"
          text="In vier einfachen Schritten von der Idee zum fertigen Design."
        />

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block"
            aria-hidden
          />
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 120} className="relative">
              <div className="flex flex-col items-start">
                <span className="relative z-10 inline-flex size-14 items-center justify-center rounded-2xl bg-primary font-display text-sm font-bold text-primary-foreground shadow-card">
                  {step.number}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Warum Lasse ------------------------------- */

const BENEFITS = [
  {
    icon: Zap,
    title: "Schnelle Umsetzung",
    text: "Dein Design wird zügig gestaltet, ohne lange Wartezeiten.",
  },
  {
    icon: Palette,
    title: "Individuelles Design",
    text: "Keine Vorlagen von der Stange – dein Design wird für dich gemacht.",
  },
  {
    icon: Heart,
    title: "Faire Preise",
    text: "Klare, faire Preise ab 25 € – ohne versteckte Kosten.",
  },
  {
    icon: Sparkles,
    title: "Mit Leidenschaft gestaltet",
    text: "Jedes Design entsteht mit Herzblut und Liebe zum Detail.",
  },
  {
    icon: Sprout,
    title: "Du unterstützt einen jungen Designer",
    text: "Mit einer Anfrage unterstützt du einen 16-Jährigen auf seinem Weg.",
  },
];

function Warum() {
  return (
    <section id="warum" className="scroll-mt-20 bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Vorteile"
          title="Warum Lasse.Design?"
          text="Das macht Lasse.Design besonders – und warum sich eine Anfrage lohnt."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-6">
          {BENEFITS.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={(i % 3) * 100}
              className={cn(
                "md:col-span-2",
                i === 3 && "md:col-span-3",
                i === 4 && "md:col-span-3"
              )}
            >
              <div className="group flex h-full items-start gap-5 rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <benefit.icon className="size-5.5" strokeWidth={1.8} aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {benefit.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Über mich -------------------------------- */

function UeberMich() {
  return (
    <section id="ueber-mich" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <SectionHeading
          eyebrow="Über mich"
          title="Hi, ich bin Lasse."
          align="left"
        />
        <Reveal delay={150}>
          <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Ich bin Lasse, 16 Jahre alt, und beschäftige mich mit großer Leidenschaft
              für Grafikdesign. Was als Spaß am Gestalten begann, ist heute
              Lasse.Design – mein persönliches Hobbyprojekt, in dem ich moderne und
              individuelle Designs entstehen lasse.
            </p>
            <p>
              Lasse.Design ist kein Unternehmen, sondern ein privates Hobbyprojekt. Mein
              Ziel: Mit jedem Design besser werden, meinen Stil weiterentwickeln und
              gleichzeitig Designs gestalten, die wirklich gefallen.
            </p>
            <p>
              Wenn du Lust auf ein eigenes Design hast, freue ich mich auf deine
              Nachricht – gestaltet wird hier aus Leidenschaft.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------- FAQ ----------------------------------- */

const FAQS = [
  {
    question: "Was kostet ein Design?",
    answer:
      "Poster und Plakate starten bei 25 € pro Design. Für Produktdesigns und weitere Designs erstelle ich dir gerne ein individuelles Angebot – schreib mir dazu einfach auf Instagram.",
  },
  {
    question: "Wie lange dauert die Gestaltung?",
    answer:
      "Das hängt vom Umfang deines Projekts ab. Melde dich einfach mit deiner Idee auf Instagram und ich sage dir, wie schnell ich sie umsetzen kann.",
  },
  {
    question: "Kann ich eigene Bilder oder Logos einbringen?",
    answer:
      "Klar! Wenn du eigene Bilder, Logos oder Vorlagen hast, bring sie gerne ein – so wird dein Design noch persönlicher.",
  },
  {
    question: "Sind Änderungswünsche möglich?",
    answer:
      "Ja. Während der Gestaltung schauen wir uns das Ergebnis gemeinsam an und ich passe dein Design an, bis es für dich passt.",
  },
  {
    question: "In welchen Formaten bekomme ich mein Design?",
    answer:
      "Dein Design bekommst du in den Formaten, die du brauchst – sprich mich auf Instagram einfach darauf an.",
  },
  {
    question: "Kannst du auch andere Designs erstellen?",
    answer:
      "Ja! Neben Postern und Werbeplakaten gestalte ich auch Produktdesigns und weiteres. Frag mich einfach – zusammen finden wir eine Lösung.",
  },
  {
    question: "Brauche ich schon eine genaue Idee?",
    answer:
      "Nein. Eine grobe Vorstellung reicht völlig – gemeinsam finden wir heraus, wie dein Design am besten aussieht.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Häufige Fragen"
          text="Alles Wichtige auf einen Blick – falls deine Frage fehlt, schreib mir einfach auf Instagram."
        />

        <div className="mt-12 flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 60}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border bg-card transition-colors duration-300",
                    isOpen ? "border-primary/30 shadow-card" : "border-border"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-foreground">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-5 shrink-0 text-primary transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------- Kontakt --------------------------------- */

function Kontakt() {
  return (
    <section id="kontakt" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-primary to-primary-deep px-6 py-16 text-center shadow-soft sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute -left-20 -top-20 size-64 rounded-full bg-primary-foreground/10 blur-3xl" />
              <div className="absolute -bottom-24 -right-16 size-72 rounded-full bg-primary-foreground/10 blur-3xl" />
            </div>
            <div className="relative flex flex-col items-center gap-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                <FileCheck className="size-3.5" aria-hidden />
                Anfrage stellen
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Interesse an einem Design?
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                Schreib mir einfach deine Anfrage auf Instagram.
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2.5 rounded-full bg-primary-foreground px-8 py-3.5 text-sm font-semibold text-primary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
              >
                <Instagram className="size-4" aria-hidden />
                @lasse.design
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Footer ---------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 text-center sm:px-8">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          Lasse<span className="text-primary">.</span>Design
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

/* ----------------------------------- Page ---------------------------------- */

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Leistungen />
        <Ablauf />
        <Warum />
        <UeberMich />
        <Faq />
        <Kontakt />
      </main>
      <Footer />
    </div>
  );
}

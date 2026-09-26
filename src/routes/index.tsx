import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from "react";
import {
  Instagram,
  PenTool,
  Heart,
  Handshake,
  Palette,
  FileCheck,
  Layers,
  ChevronDown,
  ArrowDown,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ConceptSliders } from "@/components/concept-sliders";
import {
  BackgroundAsset,
  Footer,
  Header,
  INSTAGRAM_URL,
  Reveal,
  SectionHeading,
} from "@/components/site-chrome";

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



/* ----------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section id="top" className="relative min-h-[76vh] overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-drift-light absolute -left-40 top-10 h-28 w-[46rem] rotate-[-12deg] bg-primary/25 blur-3xl" />
        <div className="animate-drift-light absolute -right-64 top-64 h-36 w-[54rem] rotate-[-18deg] bg-primary-deep/30 blur-3xl [animation-delay:-5s]" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 pb-16 pt-20 text-center sm:px-8 sm:pb-20 sm:pt-24">
        <Reveal>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Grafikdesign
            <br />
            <span className="slogan-gradient">
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
            className="group mt-10 inline-flex items-center gap-2.5 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
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

function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Meine Konzepte"
          text={"\n"}
        />

        <ConceptSliders />

        <Reveal delay={150} className="mt-12 flex justify-center">
          <Link
            to="/konzepte"
            className="group inline-flex items-center gap-2.5 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Mehr Designs
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- Leistungen ------------------------------- */

const SERVICES = [
  {
    icon: PenTool,
    title: "Plakate & Poster",
    price: "25 € pro Design",
    description: "Egal ob Unternehmen, Werbeaktion, Flohmarkt oder privates Event – jedes Plakat wird individuell gestaltet, zum gleichen fairen Preis",
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
    <section id="leistungen" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Leistungen"
          title="Was ich gestalte"
          text="Von Plakaten bis zu individuellen Designprojekten – hier bekommst du einen Überblick. Schreib mir einfach, was du brauchst."
        />

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <div className="glass-panel group flex h-full flex-col rounded-xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
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
    icon: Palette,
    title: "Individuelle & moderne Designs",
    text: "Keine Designs von der Stange – jedes Projekt wird individuell und modern gestaltet.",
  },
  {
    icon: Handshake,
    title: "Persönliche Zusammenarbeit",
    text: "Direkter Austausch und deine Wünsche stehen bei jedem Projekt im Mittelpunkt.",
  },
  {
    icon: Heart,
    title: "Faire Preise",
    text: "Klare, faire Preise ab 25 € – ohne versteckte Kosten.",
  },
];

function Warum() {
  return (
    <section id="warum" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Vorteile"
          title="Warum Lasse.Design?"
          text="Das macht Lasse.Design besonders – und warum sich eine Anfrage lohnt."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={i * 100}
            >
              <div className="glass-panel group flex h-full items-start gap-5 rounded-xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
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
      "Plakate und Poster kosten 25 € pro Design. Für weitere Designs erstelle ich dir gerne ein individuelles Angebot – schreib mir dazu einfach auf Instagram.",
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
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
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
                    "glass-panel overflow-hidden rounded-xl transition-colors duration-300",
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
          <div className="glass-panel relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-deep/70 to-primary/25 px-6 py-16 text-center shadow-soft sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <div className="absolute -left-20 -top-20 size-64 rounded-full bg-primary-foreground/10 blur-3xl" />
              <div className="absolute -bottom-24 -right-16 size-72 rounded-full bg-primary-foreground/10 blur-3xl" />
            </div>
            <div className="relative flex flex-col items-center gap-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
                <FileCheck className="size-3.5" aria-hidden />
                Anfrage stellen
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Interesse an einem Design?
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Schreib mir einfach eine E-Mail – ich melde mich so schnell wie möglich bei dir.
              </p>
              <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-primary-foreground px-8 py-3.5 text-sm font-semibold text-primary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
                >
                  <Mail className="size-4" aria-hidden />
                  {EMAIL_ADDRESS}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-foreground/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-foreground/60 hover:text-foreground"
                >
                  <Instagram className="size-4" aria-hidden />
                  @lasse.design
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------- Page ---------------------------------- */

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-foreground">
      <BackgroundAsset />
      <Header home />
      <main>
        <Hero />
        <Warum />
        <Portfolio />
        <Leistungen />
        <Ablauf />
        <UeberMich />
        <Faq />
        <Kontakt />
      </main>
      <Footer home />
    </div>
  );
}

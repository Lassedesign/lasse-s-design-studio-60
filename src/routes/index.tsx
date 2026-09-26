import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Mail,
  PenTool,
  Heart,
  Handshake,
  Palette,
  FileCheck,
  Layers,
  ArrowDown,
  ArrowRight,
} from "lucide-react";
import { ConceptSliders } from "@/components/concept-sliders";
import {
  BackgroundAsset,
  Footer,
  Header,
  EMAIL_ADDRESS,
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
    text: "Du schreibst mir deine Idee einfach per E-Mail.",
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

/* ---------------------------------- Divider -------------------------------- */

function SectionDivider() {
  return (
    <div
      aria-hidden
      className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-border to-transparent"
    />
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
        <SectionDivider />
        <Warum />
        <SectionDivider />
        <Portfolio />
        <SectionDivider />
        <Leistungen />
        <SectionDivider />
        <Ablauf />
        <SectionDivider />
        <UeberMich />
        <SectionDivider />
        <Kontakt />
      </main>
      <Footer home />
    </div>
  );
}

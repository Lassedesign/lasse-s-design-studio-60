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
import dbMockup from "@/assets/poster-db-mockup.png.asset.json";
import diorMockup from "@/assets/poster-dior-mockup.png.asset.json";
import carportMockup from "@/assets/poster-carport-mockup2.jpg.asset.json";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import sandwichBeforeAsset from "@/assets/sandwich-ki-before.png.asset.json";
import sandwichAfterAsset from "@/assets/sandwich-ki-after.jpg.asset.json";
import immobilienBeforeAsset from "@/assets/immobilien-ki-before.png.asset.json";
import immobilienAfterAsset from "@/assets/immobilien-ki-after.png.asset.json";
import {
  BackgroundAsset,
  Footer,
  Header,
  EMAIL_ADDRESS,
  Reveal,
  SectionHeading,
} from "@/components/site-chrome";

const HOME_POSTERS = [
  { src: carportMockup.url, alt: "Sommeraktion Stahl Carports 6x6 – KI-Redesign (auf einem Werbetafel-Gestell)" },
  { src: dbMockup.url, alt: "DB – Wir suchen Sicherheitskräfte (Plakat in der Bahn)" },
  { src: diorMockup.url, alt: "Dior Sauvage Parfum (Plakat im Schaufenster)" },
];

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

        <Reveal delay={300} className="mx-auto w-full max-w-2xl">
          <BeforeAfterSlider
            beforeImage={sandwichBeforeAsset.url}
            afterImage={sandwichAfterAsset.url}
            beforeAlt="Vorher: dunkles Toastsandwiches-Plakat"
            afterAlt="Nachher: modernes Toast-Sandwich-Plakat"
            initialPosition={45}
            className="border border-border"
          />
          <p className="mt-3 text-center font-display text-sm font-medium tracking-wide text-muted-foreground">
            Sandwich – KI-Redesign
          </p>
        </Reveal>

        <Reveal delay={400}>
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

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {HOME_POSTERS.map((poster, i) => (
            <Reveal key={poster.src} delay={i * 100} className="h-full">
              <div className="h-full aspect-[3/4] overflow-hidden rounded-[16px] border border-border shadow-lg shadow-black/30">
                <img
                  src={poster.src}
                  alt={poster.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 hover:-translate-y-1.5"
                />
              </div>
            </Reveal>
          ))}
        </div>

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


/* ------------------------------- Warum Lasse ------------------------------- */

const BENEFITS = [
  {
    icon: Palette,
    title: "Individuelle & moderne Designs",
  },
  {
    icon: Handshake,
    title: "Persönliche Zusammenarbeit",
  },
  {
    icon: Heart,
    title: "Faire Preise",
  },
];

function Warum() {
  return (
    <section id="warum" className="scroll-mt-20 pb-16 pt-4 sm:pb-20 sm:pt-6">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Warum Lasse.Deisgn?"
          align="left"
        />

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={i * 100}
            >
              <div className="glass-panel group flex h-full items-center gap-5 rounded-xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <benefit.icon className="size-5.5" strokeWidth={1.8} aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
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
              <div className="mt-2">
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-primary-foreground px-8 py-3.5 text-sm font-semibold text-primary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent"
                >
                  <Mail className="size-4" aria-hidden />
                  {EMAIL_ADDRESS}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Section shading ---------------------------- */

function SectionShade() {
  return (
    <div
      aria-hidden
      className="pointer-events-none relative -my-24 h-48 w-full bg-gradient-to-b from-transparent via-background/12 to-transparent"
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
        <SectionShade />
        <Warum />
        <SectionShade />
        <Portfolio />
        <SectionShade />
        <Leistungen />
        <SectionShade />
        <UeberMich />
        <SectionShade />
        <Kontakt />
      </main>
      <Footer home />
    </div>
  );
}

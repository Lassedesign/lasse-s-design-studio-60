import { createFileRoute } from '@tanstack/react-router'
import {
  BackgroundAsset,
  Footer,
  Header,
  ImageSlot,
  InstagramButton,
  Reveal,
  SLOT_GRADS,
  SectionHeading,
} from "@/components/site-chrome";

export const Route = createFileRoute("/konzepte")({
  component: KonzeptePage,
  head: () => ({
    meta: [
      { title: "Meine Konzepte – Lasse.Design" },
      {
        name: "description",
        content:
          "Eine Auswahl der Konzepte und Gestaltungen von Lasse.Design – dem Grafikdesign-Hobbyprojekt von Lasse (16).",
      },
      { property: "og:title", content: "Meine Konzepte – Lasse.Design" },
      {
        property: "og:description",
        content:
          "Eine Auswahl der Konzepte und Gestaltungen von Lasse.Design – dem Grafikdesign-Hobbyprojekt von Lasse (16).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function KonzeptePage() {
  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-foreground">
      <BackgroundAsset />
      <Header />
      <main className="pt-16">
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Portfolio"
              title="Meine Konzepte"
              text="Ein Blick auf meine Gestaltungen – von Plakaten bis zu eigenen Designideen."
            />

            <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {SLOT_GRADS.map((gradient, i) => (
                <ImageSlot key={gradient} gradient={gradient} delay={(i % 4) * 100} />
              ))}
            </div>

            <Reveal delay={200} className="mt-16 flex justify-center">
              <div className="flex flex-col items-center gap-4 text-center">
                <p className="font-display text-sm font-medium tracking-wide text-muted-foreground">
                  Mehr Designs gibt’s auf Instagram.
                </p>
                <InstagramButton />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

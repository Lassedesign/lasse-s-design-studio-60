import { createFileRoute } from '@tanstack/react-router'
import { ConceptSliders } from "@/components/concept-sliders";
import { ConceptGallery } from "@/components/concept-gallery";
import {
  BackgroundAsset,
  Footer,
  Header,
  InstagramButton,
  Reveal,
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
            />

            <ConceptSliders className="mt-14" />

            <ConceptGallery className="mt-16" />

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

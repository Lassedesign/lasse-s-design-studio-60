import { cn } from "@/lib/utils";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Reveal } from "@/components/site-chrome";
import sandwichBeforeAsset from "@/assets/sandwich-ki-before.png.asset.json";
import sandwichAfterAsset from "@/assets/sandwich-ki-after.jpg.asset.json";
import immobilienBeforeAsset from "@/assets/immobilien-ki-before.png.asset.json";
import immobilienAfterAsset from "@/assets/immobilien-ki-after.png.asset.json";
import carportAsset from "@/assets/carport-ki.png.asset.json";

export const SLIDERS = [
  {
    before: sandwichBeforeAsset.url,
    after: sandwichAfterAsset.url,
    beforeAlt: "Vorher: dunkles Toastsandwiches-Plakat",
    afterAlt: "Nachher: modernes Toast-Sandwich-Plakat",
    caption: "Sandwich – KI-Redesign",
  },
  {
    before: immobilienBeforeAsset.url,
    after: immobilienAfterAsset.url,
    beforeAlt: "Vorher: klassisches Immobilien-Plakat",
    afterAlt: "Nachher: modernes Immobilien-Plakat",
    caption: "Immobilien – KI-Redesign",
  },
];

const SANDWICH = SLIDERS[0]!;
const IMMOBILIEN = SLIDERS[1]!;

export function ConceptSliders({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 gap-8 md:grid-cols-2", className)}>
      {/* Sandwich: Slider + zusätzliches Bild darunter */}
      <Reveal delay={0} className="h-full">
        <figure className="flex h-full flex-col gap-4 md:grid md:grid-rows-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-4">
          <BeforeAfterSlider
            beforeImage={SANDWICH.before}
            afterImage={SANDWICH.after}
            beforeAlt={SANDWICH.beforeAlt}
            afterAlt={SANDWICH.afterAlt}
            initialPosition={45}
            className="border border-border md:row-start-1 md:h-full md:w-auto md:aspect-[5/4] md:min-h-0 md:justify-self-center"
          />
          <figcaption className="text-center font-display text-sm font-medium tracking-wide text-muted-foreground">
            {SANDWICH.caption}
          </figcaption>
          <img
            src={carportAsset.url}
            alt="Carport-Plakat – KI-Redesign"
            draggable={false}
            className="w-1/2 rounded-[16px] border border-border shadow-lg shadow-black/30 md:row-start-3 md:h-full md:w-auto md:min-h-0 md:justify-self-center"
          />
        </figure>
      </Reveal>
      {/* Immobilien: nur Slider */}
      <Reveal delay={150} className="h-full">
        <figure className="flex h-full flex-col gap-4">
          <BeforeAfterSlider
            beforeImage={IMMOBILIEN.before}
            afterImage={IMMOBILIEN.after}
            beforeAlt={IMMOBILIEN.beforeAlt}
            afterAlt={IMMOBILIEN.afterAlt}
            initialPosition={45}
            className="border border-border"
          />
          <figcaption className="text-center font-display text-sm font-medium tracking-wide text-muted-foreground">
            {IMMOBILIEN.caption}
          </figcaption>
        </figure>
      </Reveal>
    </div>
  );
}

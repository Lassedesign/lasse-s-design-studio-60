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

export function ConceptSliders({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 gap-8 md:grid-cols-2", className)}>
      {/* Sandwich: Slider + zusätzliches Bild darunter */}
      <Reveal delay={0} className="h-full">
        <figure className="flex h-full flex-col gap-4">
          <BeforeAfterSlider
            beforeImage={SLIDERS[0].before}
            afterImage={SLIDERS[0].after}
            beforeAlt={SLIDERS[0].beforeAlt}
            afterAlt={SLIDERS[0].afterAlt}
            initialPosition={45}
            className="border border-border"
          />
          <figcaption className="text-center font-display text-sm font-medium tracking-wide text-muted-foreground">
            {SLIDERS[0].caption}
          </figcaption>
          <div className="relative md:min-h-0 md:flex-1">
            <img
              src={carportAsset.url}
              alt="Carport-Plakat – KI-Redesign"
              draggable={false}
              className="w-1/2 rounded-[16px] border border-border shadow-lg shadow-black/30 md:absolute md:inset-x-0 md:top-0 md:mx-auto md:h-full md:w-auto"
            />
          </div>
        </figure>
      </Reveal>
      {/* Immobilien: nur Slider */}
      <Reveal delay={150} className="h-full">
        <figure className="flex h-full flex-col gap-4">
          <BeforeAfterSlider
            beforeImage={SLIDERS[1].before}
            afterImage={SLIDERS[1].after}
            beforeAlt={SLIDERS[1].beforeAlt}
            afterAlt={SLIDERS[1].afterAlt}
            initialPosition={45}
            className="border border-border"
          />
          <figcaption className="text-center font-display text-sm font-medium tracking-wide text-muted-foreground">
            {SLIDERS[1].caption}
          </figcaption>
        </figure>
      </Reveal>
    </div>
  );
}

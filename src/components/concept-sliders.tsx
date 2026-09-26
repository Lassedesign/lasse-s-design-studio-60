import { cn } from "@/lib/utils";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Reveal } from "@/components/site-chrome";
import sandwichBeforeAsset from "@/assets/sandwich-ki-before.png.asset.json";
import sandwichAfterAsset from "@/assets/sandwich-ki-after.jpg.asset.json";
import immobilienBeforeAsset from "@/assets/immobilien-ki-before.png.asset.json";
import immobilienAfterAsset from "@/assets/immobilien-ki-after.png.asset.json";

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
      {SLIDERS.map((slider, i) => (
        <Reveal key={slider.caption} delay={i * 150}>
          <figure className="flex flex-col gap-4">
            <BeforeAfterSlider
              beforeImage={slider.before}
              afterImage={slider.after}
              beforeAlt={slider.beforeAlt}
              afterAlt={slider.afterAlt}
              initialPosition={45}
              className="border border-border"
            />
            <figcaption className="text-center font-display text-sm font-medium tracking-wide text-muted-foreground">
              {slider.caption}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

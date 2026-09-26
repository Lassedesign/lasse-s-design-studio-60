import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site-chrome";
import foodstreetAsset from "@/assets/poster-foodstreet.jpg.asset.json";
import flohmarktAsset from "@/assets/poster-flohmarkt.png.asset.json";
import dbAsset from "@/assets/poster-db.png.asset.json";
import barbershopAsset from "@/assets/poster-barbershop.jpg.asset.json";
import diorAsset from "@/assets/poster-dior.png.asset.json";
import iphoneAsset from "@/assets/poster-iphone.png.asset.json";

export const GALLERY = [
  {
    src: iphoneAsset.url,
    alt: "Werbeplakat: iPhone 17 Pro – Pro. Beyond.",
  },
  {
    src: flohmarktAsset.url,
    alt: "Plakat: Stadtflohmarkt – Schätze finden. Freude teilen.",
  },
  {
    src: dbAsset.url,
    alt: "Plakat: Wir suchen Sicherheitskräfte",
  },
  {
    src: barbershopAsset.url,
    alt: "Plakat: Next Level Barbershop – Neuer Look, fairer Preis",
  },
  {
    src: diorAsset.url,
    alt: "Produktdesign: Dior Sauvage Parfum",
  },
  {
    src: foodstreetAsset.url,
    alt: "Plakat: Grand Opening Minar-e-Pakistan Food Street",
  },
];

export function ConceptGallery({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3", className)}>
      {GALLERY.map((image, i) => (
        <Reveal key={image.src} delay={(i % 3) * 100}>
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            draggable={false}
            className="w-full rounded-[16px] border border-border shadow-lg shadow-black/30 transition-transform duration-300 hover:-translate-y-1.5"
          />
        </Reveal>
      ))}
    </div>
  );
}

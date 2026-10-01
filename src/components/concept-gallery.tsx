import { cn } from "@/lib/utils";
import { Reveal } from "@/components/site-chrome";
import foodstreetAssetSrc from "@/assets/poster-foodstreet.jpg";
const foodstreetAsset = { url: foodstreetAssetSrc };
import flohmarktAssetSrc from "@/assets/poster-flohmarkt.png";
const flohmarktAsset = { url: flohmarktAssetSrc };
import dbAssetSrc from "@/assets/poster-db.png";
const dbAsset = { url: dbAssetSrc };
import barbershopAssetSrc from "@/assets/poster-barbershop.jpg";
const barbershopAsset = { url: barbershopAssetSrc };
import diorAssetSrc from "@/assets/poster-dior.png";
const diorAsset = { url: diorAssetSrc };
import iphoneAssetSrc from "@/assets/poster-iphone.png";
const iphoneAsset = { url: iphoneAssetSrc };
import personalTrainerAssetSrc from "@/assets/poster-personal-trainer.png";
const personalTrainerAsset = { url: personalTrainerAssetSrc };
import carportMadejAssetSrc from "@/assets/poster-carport-madej.png";
const carportMadejAsset = { url: carportMadejAssetSrc };
import iphoneNaturallyAssetSrc from "@/assets/poster-iphone-naturally.png";
const iphoneNaturallyAsset = { url: iphoneNaturallyAssetSrc };
import hackfleischspiessAssetSrc from "@/assets/poster-hackfleischspiess.jpg";
const hackfleischspiessAsset = { url: hackfleischspiessAssetSrc };
import bubensahneAssetSrc from "@/assets/poster-bubensahne.jpg";
const bubensahneAsset = { url: bubensahneAssetSrc };

export const GALLERY = [
  // Hoch (schmal) + niedrig (breit) abwechselnd, damit alle Spalten gleich hoch sind
  {
    src: flohmarktAsset.url,
    alt: "Plakat: Stadtflohmarkt – Schätze finden. Freude teilen.",
  },
  {
    src: barbershopAsset.url,
    alt: "Plakat: Next Level Barbershop – Neuer Look, fairer Preis",
  },
  {
    src: dbAsset.url,
    alt: "Plakat: Wir suchen Sicherheitskräfte",
  },
  {
    src: diorAsset.url,
    alt: "Produktdesign: Dior Sauvage Parfum",
  },
  {
    src: iphoneAsset.url,
    alt: "Werbeplakat: iPhone 17 Pro – Pro. Beyond.",
  },
  {
    src: foodstreetAsset.url,
    alt: "Plakat: Grand Opening Minar-e-Pakistan Food Street",
  },
  {
    src: personalTrainerAsset.url,
    alt: "Plakat: Personal Trainer – Dein Ziel. Dein Plan. Dein Erfolg.",
  },
  {
    src: carportMadejAsset.url,
    alt: "Plakat: Madej Sommeraktion – Stahl Carports 6x6",
  },
  {
    src: iphoneNaturallyAsset.url,
    alt: "Werbeplakat: iPhone 17 Pro – Pro. Naturally.",
  },
  {
    src: hackfleischspiessAsset.url,
    alt: "Plakat: Georgische Hackfleischspieß – Jetzt probieren!",
  },
  {
    src: bubensahneAsset.url,
    alt: "Werbeplakat: Redo Bubensahne – Einfach direkt schlucken",
  },
];

export function ConceptGallery({ className }: { className?: string }) {
  return (
    <div className={cn("columns-2 gap-5 sm:gap-6 md:columns-3", className)}>
      {GALLERY.map((image, i) => (
        <Reveal
          key={image.src}
          delay={(i % 3) * 100}
          className="mb-5 break-inside-avoid sm:mb-6"
        >
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

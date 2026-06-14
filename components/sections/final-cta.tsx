import { MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, waLink } from "@/lib/site-config";

export function FinalCta() {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-balance font-heading text-3xl font-bold md:text-4xl">
          Encuentra lo que necesitas para tu hogar en un solo lugar
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/90">
          Escríbenos por WhatsApp o visítanos en {site.name}.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" variant="secondary" className="gap-2">
            <a href={waLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Escribir por WhatsApp
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <a href="#ubicacion">
              <MapPin className="h-5 w-5" />
              Ver ubicación
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

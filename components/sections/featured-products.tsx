import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/lib/content";
import { waLink } from "@/lib/site-config";

export function FeaturedProducts() {
  return (
    <section id="destacados" className="scroll-mt-16 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
            Productos destacados
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Espacio administrable para tus fotos, nombres y promociones. Las
            imágenes a continuación son contenido de demostración.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((p) => (
            <li
              key={p.name}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2 py-1 text-xs font-medium text-muted-foreground">
                  {p.note}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                    {p.category}
                  </span>
                  {p.available && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-secondary">
                      <span className="h-2 w-2 rounded-full bg-secondary" />
                      Disponible
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">
                  {p.name}
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 w-full gap-2"
                >
                  <a
                    href={waLink(
                      `Hola, quisiera consultar disponibilidad de: ${p.name}.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Consultar por WhatsApp
                  </a>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

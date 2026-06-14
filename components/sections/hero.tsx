import Image from "next/image";
import { MessageCircle, ShoppingBasket, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-16 bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:py-16 lg:grid-cols-2 lg:py-20">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            <BadgePercent className="h-4 w-4" />
            Productos esenciales seleccionados exentos de ITBIS
          </span>
          <h1 className="text-balance font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
            Todo lo que necesitas para tu hogar,{" "}
            <span className="text-primary">cerca de ti</span>
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Alimentos, bebidas, vegetales frescos, carnes, embutidos y productos
            de limpieza. Compra más y aprovecha mejor tu presupuesto en tu
            minimarket de confianza.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button size="lg" className="gap-2">
              <a href="#productos">
                <ShoppingBasket className="h-5 w-5" />
                Ver productos
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="gap-2">
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Comprar por WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
            <Image
              src="/images/hero-groceries.png"
              alt="Estantes organizados con vegetales frescos, bebidas y productos del hogar"
              width={720}
              height={620}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

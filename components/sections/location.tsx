import { MapPin, Clock, Phone, MessageCircle, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, waLink } from "@/lib/site-config";

export function Location() {
  return (
    <section id="ubicacion" className="scroll-mt-16 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
            Ubicación y horario
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Visítanos en tienda o escríbenos para coordinar tu compra.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Mapa de ubicación de Distribuidora Latinos"
              src={site.mapsEmbed}
              className="h-72 w-full lg:h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="flex gap-3">
              <MapPin
                className="h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-heading font-semibold text-foreground">
                  Dirección
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {site.address}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock
                className="h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-heading font-semibold text-foreground">
                  Horario
                </h3>
                <ul className="text-sm leading-relaxed text-muted-foreground">
                  {site.hours.map((h) => (
                    <li key={h.day}>
                      <span className="font-medium text-foreground">
                        {h.day}:
                      </span>{" "}
                      {h.time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone
                className="h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <h3 className="font-heading font-semibold text-foreground">
                  Teléfono
                </h3>
                <a
                  href={waLink()}
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

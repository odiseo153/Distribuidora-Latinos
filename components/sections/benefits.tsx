import { Check } from "lucide-react"
import { benefits } from "@/lib/content"

export function Benefits() {
  return (
    <section id="beneficios" className="scroll-mt-16 bg-muted/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
            ¿Por qué comprar con nosotros?
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            La comodidad de tu colmado de barrio con la variedad de una
            distribuidora.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <li
              key={b.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Check className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">
                  {b.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

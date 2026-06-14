import { Quote } from "lucide-react"
import { testimonials } from "@/lib/content"

export function Testimonials() {
  return (
    <section id="testimonios" className="scroll-mt-16 bg-muted/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-3 text-pretty text-sm text-muted-foreground">
            Sección de ejemplo. Reemplaza estos textos con testimonios reales y
            verificados de tus clientes.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li
              key={i}
              className="flex flex-col rounded-2xl border border-dashed border-border bg-card p-6"
            >
              <Quote className="h-7 w-7 text-secondary" aria-hidden="true" />
              <p className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {t.quote}
              </p>
              <div className="mt-5">
                <p className="font-heading font-semibold text-foreground">
                  {t.name}
                </p>
                <p className="text-sm text-muted-foreground">{t.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

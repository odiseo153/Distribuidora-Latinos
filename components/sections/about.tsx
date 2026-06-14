import { Heart, Store, Users } from "lucide-react"

const values = [
  { icon: Store, label: "Productos esenciales" },
  { icon: Heart, label: "Buena atención" },
  { icon: Users, label: "Comodidad para tu familia" },
]

export function About() {
  return (
    <section id="nosotros" className="scroll-mt-16 bg-muted/40 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
          Sobre Distribuidora Latinos
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Somos un minimarket comprometido con ofrecer productos esenciales,
          buena atención y comodidad para las familias de nuestra comunidad.
          Queremos ser el lugar de confianza donde encuentres lo que necesitas
          para tu hogar, todos los días.
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {values.map((v) => {
            const Icon = v.icon
            return (
              <li
                key={v.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              >
                <Icon className="h-4 w-4 text-secondary" aria-hidden="true" />
                {v.label}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

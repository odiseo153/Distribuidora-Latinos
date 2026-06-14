import { PiggyBank, ShoppingCart, Wallet } from "lucide-react"

const points = [
  {
    icon: PiggyBank,
    title: "Ahorra en lo esencial",
    text: "Productos básicos seleccionados que pueden estar exentos de ITBIS.",
  },
  {
    icon: ShoppingCart,
    title: "Compra más",
    text: "Llena tu despensa con precios competitivos en tu día a día.",
  },
  {
    icon: Wallet,
    title: "Cuida tu presupuesto",
    text: "Aprovecha mejor tu dinero comprando lo que tu hogar necesita.",
  },
]

export function Savings() {
  return (
    <section id="ahorro" className="scroll-mt-16 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl border border-secondary/30 bg-accent/60 p-8 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-semibold text-secondary-foreground">
              Beneficio para tu bolsillo
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
              Más productos para tu hogar, mejor aprovechamiento de tu dinero
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Una parte importante de los productos que vendemos corresponde a
              artículos esenciales que pueden estar exentos de ITBIS. Así
              compras lo que tu familia necesita aprovechando mejor tu
              presupuesto.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {points.map((p) => {
              const Icon = p.icon
              return (
                <li
                  key={p.title}
                  className="rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-heading font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </li>
              )
            })}
          </ul>

          <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-relaxed text-muted-foreground">
            La exención de ITBIS depende del tipo de producto y de la normativa
            tributaria vigente.
          </p>
        </div>
      </div>
    </section>
  )
}

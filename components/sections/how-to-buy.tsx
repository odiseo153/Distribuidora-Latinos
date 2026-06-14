const steps = [
  {
    n: "1",
    title: "Revisa nuestras categorías",
    text: "Explora los productos disponibles para tu hogar.",
  },
  {
    n: "2",
    title: "Consulta disponibilidad por WhatsApp",
    text: "Escríbenos y te confirmamos lo que necesitas.",
  },
  {
    n: "3",
    title: "Confirma tu pedido o visita la tienda",
    text: "Coordina tu compra o pásate por nuestro establecimiento.",
  },
]

export function HowToBuy() {
  return (
    <section id="como-comprar" className="scroll-mt-16 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
            Cómo comprar
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Un proceso simple, rápido y cercano.
          </p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-xl font-bold text-primary-foreground">
                {s.n}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

import { categories } from "@/lib/content"

export function Categories() {
  return (
    <section id="productos" className="scroll-mt-16 bg-muted/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
            Categorías de productos
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Encuentra de todo para tu hogar, organizado por categorías para que
            compres más fácil.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <li
                key={cat.name}
                className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {cat.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {cat.description}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

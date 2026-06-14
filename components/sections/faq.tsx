import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/content"

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 bg-muted/40 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Resolvemos las dudas más comunes sobre nuestra tienda.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-8 w-full">
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-4 mb-3"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

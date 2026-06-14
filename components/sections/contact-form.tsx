"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { waLink } from "@/lib/site-config"

type Errors = { name?: string; phone?: string; message?: string; consent?: string }

export function ContactForm() {
  const [values, setValues] = useState({ name: "", phone: "", message: "" })
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function validate() {
    const e: Errors = {}
    if (values.name.trim().length < 2) e.name = "Ingresa tu nombre."
    if (!/^[\d\s()+-]{7,}$/.test(values.phone.trim()))
      e.phone = "Ingresa un teléfono válido."
    if (values.message.trim().length < 5)
      e.message = "Escribe un mensaje más detallado."
    if (!consent) e.consent = "Debes aceptar para continuar."
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validate()) return
    const msg = `Hola, soy ${values.name} (Tel: ${values.phone}). ${values.message}`
    setSent(true)
    window.open(waLink(msg), "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contacto" className="scroll-mt-16 py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-4">
        <div className="text-center">
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
            Contáctanos
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Déjanos tus datos y tu consulta. Te responderemos por WhatsApp.
          </p>
        </div>

        {sent ? (
          <div
            role="status"
            className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-secondary/40 bg-accent/60 p-8 text-center"
          >
            <CheckCircle2 className="h-10 w-10 text-secondary" />
            <p className="font-heading text-lg font-semibold text-foreground">
              ¡Gracias por escribirnos!
            </p>
            <p className="text-sm text-muted-foreground">
              Abrimos WhatsApp para que envíes tu mensaje. Si no se abrió,{" "}
              <a
                href={waLink(
                  `Hola, soy ${values.name} (Tel: ${values.phone}). ${values.message}`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline"
              >
                haz clic aquí
              </a>
              .
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                value={values.name}
                onChange={(e) =>
                  setValues((v) => ({ ...v, name: e.target.value }))
                }
                aria-invalid={!!errors.name}
                placeholder="Tu nombre"
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                value={values.phone}
                onChange={(e) =>
                  setValues((v) => ({ ...v, phone: e.target.value }))
                }
                aria-invalid={!!errors.phone}
                placeholder="(809) 000-0000"
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                rows={4}
                value={values.message}
                onChange={(e) =>
                  setValues((v) => ({ ...v, message: e.target.value }))
                }
                aria-invalid={!!errors.message}
                placeholder="¿Qué producto necesitas?"
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={consent}
                  onCheckedChange={(c) => setConsent(c === true)}
                  aria-invalid={!!errors.consent}
                  className="mt-0.5"
                />
                <Label
                  htmlFor="consent"
                  className="text-sm font-normal leading-relaxed text-muted-foreground"
                >
                  Acepto que mis datos sean utilizados para responder mi
                  consulta, según la política de privacidad.
                </Label>
              </div>
              {errors.consent && (
                <p className="text-sm text-destructive">{errors.consent}</p>
              )}
            </div>

            <Button type="submit" size="lg" className="gap-2">
              <Send className="h-4 w-4" />
              Enviar por WhatsApp
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}

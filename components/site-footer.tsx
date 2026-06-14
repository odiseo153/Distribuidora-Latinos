import Link from "next/link"
import { AtSign, Clock, MapPin, Phone } from "lucide-react"
import { Logo } from "@/components/logo"
import { site } from "@/lib/site-config"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Catálogo" },
  { href: "/#categorias", label: "Categorías" },
  { href: "/#beneficios", label: "Ventajas" },
  { href: "/#contacto", label: "Contacto" },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-8 border-t border-white/60 bg-[#f6ecda]/90">
      <div className="page-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          <div>
            <Logo showText />
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
              {site.tagline}. Una experiencia visual más cálida y un catálogo
              claro para convertir visitas en pedidos.
            </p>
          </div>

          <nav aria-label="Enlaces del pie de página">
            <h3 className="text-lg font-semibold text-foreground">Navegación</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-lg font-semibold text-foreground">Contacto</h3>
            <ul className="mt-4 flex flex-col gap-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={`tel:+${site.phone}`} className="transition-colors hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  {site.hours.map((hour) => (
                    <span key={hour.day} className="block">
                      {hour.day}: {hour.time}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <AtSign className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href={site.social.instagram} className="transition-colors hover:text-primary">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/60 pt-6 text-sm text-muted-foreground">
          © {year} {site.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

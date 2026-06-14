"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, Store, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

const navLinks = [
  { href: "/#categorias", label: "Categorias" },
  { href: "/#coleccion", label: "Seleccion" },
  { href: "/#beneficios", label: "Ventajas" },
  { href: "/#contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-white/55 bg-[#fff8ec]/86 shadow-[0_12px_40px_-28px_rgba(76,41,16,0.45)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="page-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" aria-label="Ir al inicio">
            <Logo showText />
          </Link>

          <nav aria-label="Navegacion principal" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/productos"
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  Catalogo
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="outline">
              <Link href="/productos">
                <Store data-icon="inline-start" />
              </Link>
              Ver catalogo
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/60 bg-white/75 text-foreground shadow-sm backdrop-blur lg:hidden"
            aria-label={open ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/60 bg-[#fff8ec]/95 shadow-[0_20px_40px_-28px_rgba(76,41,16,0.35)] backdrop-blur-xl lg:hidden">
          <nav aria-label="Navegacion movil" className="page-shell py-5">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-white hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/productos"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-white hover:text-primary"
                >
                  Catalogo completo
                  <ArrowRight className="size-4" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

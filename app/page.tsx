import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  MapPin,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { Location } from "@/components/sections/location";
import { Button } from "@/components/ui/button";
import {
  benefits,
  categories,
  mission,
  products,
  testimonials,
  values,
  vision,
} from "@/lib/content";
import { site, waLink } from "@/lib/site-config";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GroceryStore",
  name: site.name,
  description: site.tagline,
  image: "/images/hero-groceries.png",
  telephone: `+${site.phone}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressCountry: "DO",
  },
  openingHours: ["Mo-Sa 07:00-21:00", "Su 08:00-14:00"],
  areaServed: "República Dominicana",
};

const highlights = [
  { icon: Sparkles, label: "Surtido completo de consumo diario" },
  { icon: Truck, label: "Pedidos ágiles por WhatsApp" },
  { icon: ShieldCheck, label: "Atención cercana y confiable" },
];

const steps = [
  {
    title: "Explora el catálogo",
    description:
      "Mira categorías, precios y productos destacados antes de pedir.",
  },
  {
    title: "Escribe por WhatsApp",
    description:
      "Consulta disponibilidad o arma tu pedido con un mensaje rápido.",
  },
  {
    title: "Recibe confirmación",
    description: "Coordinamos contigo retiro o entrega según disponibilidad.",
  },
];

export default function Page() {
  const featuredProducts = categories
    .flatMap((category) => {
      const product = products.find((item) => item.category === category.id);
      return product ? [product] : [];
    })
    .slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <section
          id="inicio"
          className="overflow-hidden pb-8 pt-6 md:pb-10 md:pt-8"
        >
          <div className="page-shell">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative">
                <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#ffc15a]/35 blur-3xl" />
                <div className="absolute bottom-12 left-28 h-36 w-36 rounded-full bg-[#8ccf9d]/30 blur-3xl" />

                <div className="relative">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/78 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground shadow-sm backdrop-blur">
                    <Sparkles className="size-4 text-primary" />
                    Mini market con sabor de barrio
                  </span>

                  <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.95] text-foreground md:text-6xl xl:text-7xl">
                    Compras diarias con una imagen mucho más viva, clara y útil.
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                    Desde comestibles y vegetales frescos hasta limpieza y
                    hogar. Un minimarket que se siente cercano, bien organizado
                    y listo para que tus clientes encuentren rápido lo que
                    buscan.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    {highlights.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="surface-glass inline-flex items-center gap-3 rounded-full px-4 py-3 text-sm text-foreground/85"
                        >
                          <span className="flex size-9 items-center justify-center rounded-full bg-accent text-primary">
                            <Icon className="size-4" />
                          </span>
                          {item.label}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="relative ">
                <div className="surface-glass relative overflow-hidden rounded-[2.2rem] p-4">
                  <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
                    <div className="relative overflow-hidden rounded-[1.9rem]">
                      <Image
                        src="/images/hero-groceries.png"
                        alt="Productos frescos y surtido del mini market"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      {categories.slice(0, 3).map((category) => {
                        const Icon = category.icon;
                        return (
                          <div
                            key={category.id}
                            className="rounded-[1.6rem] border border-white/70 bg-[#fffaf0] p-5 shadow-[0_18px_30px_-26px_rgba(76,41,16,0.45)]"
                          >
                            <div className="flex items-center gap-3">
                              <div>
                                <p className="text-base font-semibold text-foreground">
                                  {category.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {category.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      <div className="rounded-[1.8rem] bg-[#1f513f] p-6 text-white shadow-[0_20px_40px_-28px_rgba(31,81,63,0.8)]">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                          Compra fácil
                        </p>
                        <p className="mt-3 text-2xl font-semibold">
                          Catálogo, precio y pedido desde la misma experiencia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="categorias" className="section-space">
          <div className="page-shell">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <article
                    key={category.id}
                    className="surface-glass rounded-[2rem] p-6 transition-transform hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                        <Icon className="size-5" />
                      </span>
                      <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {category.name}
                      </span>
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold text-foreground">
                      {category.name}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {category.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="coleccion" className="section-space">
          <div className="page-shell">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  <Sparkles className="size-4 text-primary" />
                  Seleccion destacada
                </span>
                <h2 className="mt-5 text-4xl font-semibold text-foreground md:text-5xl">
                  Nuestros Productos
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                  Mostramos una muestra corta y clara para que el visitante vea
                  el surtido rapido y pase al catalogo completo cuando quiera.
                </p>
              </div>
              <Button variant="outline" className="self-start md:self-auto">
                <Link href="/productos">
                  <ArrowRight data-icon="inline-start" />
                </Link>
                Ver catalogo completo
              </Button>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {featuredProducts.map((product) => {
                const category = categories.find(
                  (item) => item.id === product.category,
                );

                return (
                  <article
                    key={product.id}
                    className="surface-glass flex flex-col gap-4 rounded-[1.8rem] p-4 sm:flex-row sm:items-center"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-28 w-full rounded-[1.2rem] object-cover sm:w-32"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          {category?.name}
                        </span>
                        <span className="rounded-full bg-[#1f513f] px-3 py-1 text-sm font-semibold text-white">
                          RD${product.price}
                        </span>
                      </div>
                      <h3 className="mt-3 text-xl font-semibold text-foreground">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {product.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="empresa" className="section-space pt-0">
          <div className="page-shell">
            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="surface-glass rounded-[2rem] p-8 md:p-10">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Identidad de marca
                </span>
                <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">
                  Una tienda de barrio con mensaje mas claro.
                </h2>
                <div className="mt-8 grid gap-4">
                  <article className="rounded-[1.5rem] bg-white/75 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      {mission.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {mission.description}
                    </p>
                  </article>
                  <article className="rounded-[1.5rem] bg-white/75 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      {vision.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {vision.description}
                    </p>
                  </article>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((value) => (
                  <article
                    key={value.title}
                    className="rounded-[1.7rem] border border-white/70 bg-[#fffdf8] p-6 shadow-[0_18px_40px_-28px_rgba(88,55,22,0.45)]"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      {value.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {value.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="section-space">
          <div className="page-shell">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="surface-glass rounded-[2.2rem] p-8 md:p-10">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Por qué funciona
                </span>
                <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">
                  Una página menos genérica y más enfocada en vender.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  El rediseño mezcla una estética más cálida con una estructura
                  práctica: navegación clara, catálogo visible, CTA consistentes
                  y secciones que ayudan a decidir sin saturar.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {benefits.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-[1.9rem] border border-white/70 bg-white/78 p-6 shadow-[0_18px_32px_-28px_rgba(76,41,16,0.45)]"
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      0{index + 1}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="page-shell">
            <div className="rounded-[2.2rem] bg-[#1f513f] px-6 py-10 text-white shadow-[0_26px_60px_-30px_rgba(31,81,63,0.9)] md:px-10">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-[0.22em] text-white/65">
                    Flujo de compra
                  </span>
                  <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                    Del catálogo al pedido sin fricción.
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {steps.map((step, index) => (
                    <article
                      key={step.title}
                      className="rounded-[1.8rem] border border-white/12 bg-white/8 p-5"
                    >
                      <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
                        Paso 0{index + 1}
                      </span>
                      <h3 className="mt-4 text-xl font-semibold">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/74">
                        {step.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space pt-0">
          <div className="page-shell">
            <div className="grid gap-5 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="surface-glass rounded-[2rem] p-7"
                >
                  <p className="text-lg leading-8 text-foreground/88">
                    “{item.quote}”
                  </p>
                  <div className="mt-6">
                    <p className="text-base font-semibold text-foreground">
                      {item.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Location />

        <section id="contacto" className="section-space pt-0">
          <div className="page-shell">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="surface-glass rounded-[2.2rem] p-8 md:p-10">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Contacto directo
                </span>
                <h2 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">
                  Listo para recibir pedidos y consultas.
                </h2>
                <div className="mt-8 flex flex-col gap-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3 rounded-[1.4rem] bg-white/70 p-4">
                    <MapPin className="mt-0.5 size-5 text-primary" />
                    <span>{site.address}</span>
                  </div>
                  <div className="flex items-start gap-3 rounded-[1.4rem] bg-white/70 p-4">
                    <Clock3 className="mt-0.5 size-5 text-primary" />
                    <span>
                      {site.hours.map((item) => (
                        <span key={item.day} className="block">
                          {item.day}: {item.time}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-[2.2rem] border border-white/70 bg-[#fffaf2] p-8 shadow-[0_24px_60px_-30px_rgba(76,41,16,0.45)] md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  CTA principal
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-foreground md:text-4xl">
                  Manda el primer mensaje y te ayudamos a armar el pedido.
                </h3>
                <p className="mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
                  Esta versión ya resuelve mejor la navegación, presenta
                  productos reales desde mock data y corrige los botones para
                  que icono y texto queden alineados.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" className="bg-green-500">
                    <a
                      href={waLink()}
                      target="_blank"
                      className=""
                      rel="noopener noreferrer"
                    >
                      <img
                        width={28}
                        height={28}
                        src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-whatsapp-icon-png-image_3584844.jpg"
                        alt=""
                        className="rounded-2xl bg-green-500"
                      />
                    </a>
                    Escribir por WhatsApps
                  </Button>

                  <Button size="lg" variant="outline">
                    <Link href="/productos">
                      <ArrowRight data-icon="inline-start" />
                    </Link>
                    Ver productos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  );
}

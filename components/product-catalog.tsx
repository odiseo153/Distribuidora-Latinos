"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, MessageCircle, Search, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, products, type CategoryId } from "@/lib/content";
import { waLink } from "@/lib/site-config";

type ProductCatalogProps = {
  preview?: boolean;
};

export function ProductCatalog({ preview = false }: ProductCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryId | "all">(
    "all",
  );
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    const normalizedQuery = query.trim().toLowerCase();
    const matchesQuery =
      normalizedQuery.length === 0 ||
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.description.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });

  const visibleProducts = preview
    ? filteredProducts.slice(0, 8)
    : filteredProducts;

  return (
    <section
      id={preview ? "coleccion" : "catalogo"}
      className={preview ? "section-space" : "pb-20 pt-8 md:pb-24 md:pt-10"}
    >
      <div className={preview ? "page-shell" : "page-shell"}>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="mt-5 text-4xl font-semibold text-foreground md:text-5xl">
              Productos listos para explorar por categoría
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Navega el surtido del mini market con nombres, precios,
              descripciones e imágenes de referencia. Cada tarjeta te lleva
              directo a WhatsApp.
            </p>
          </div>
          {preview && (
            <Button variant="outline" className="self-start md:self-auto">
              <Link href="/productos">
                <ArrowRight data-icon="inline-start" />
              </Link>
              Ver catálogo completo
            </Button>
          )}
        </div>

        <div className="surface-glass mt-10 rounded-[2rem] p-5 sm:p-7">
          <div className="flex flex-col gap-4">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar arroz, jugo, detergente..."
                className="h-12 w-full rounded-full border border-border bg-white pl-11 pr-4 text-sm text-foreground shadow-sm outline-none transition focus:border-primary"
              />
            </label>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === "all"
                    ? "bg-foreground text-white"
                    : "bg-white text-foreground/75 hover:bg-accent"
                }`}
              >
                Todas
              </button>
              {categories.map((category) => {
                const Icon = category.icon;
                const selected = activeCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                      selected
                        ? "bg-primary text-primary-foreground"
                        : "bg-white text-foreground/75 hover:bg-accent"
                    }`}
                  >
                    <Icon className="size-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product) => {
              const category = categories.find(
                (item) => item.id === product.category,
              );

              return (
                <article
                  key={product.id}
                  className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-[#fffdf8] shadow-[0_18px_40px_-28px_rgba(88,55,22,0.45)] transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 from-black/35 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-xs font-semibold text-foreground">
                      {category?.name}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {product.name}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {product.description}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-[#1f513f] px-3 py-1.5 text-sm font-semibold text-white">
                        RD${product.price}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row w-50%">
                      <a
                        href={waLink(
                          `Hola, quisiera confirmar disponibilidad de ${product.name}.`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-400 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-500 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                      >
                        <img
                          width={28}
                          height={28}
                          src="images/whatsapp.png"
                          alt=""
                          className="rounded-2xl"
                        />
                        Consultar
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {visibleProducts.length === 0 && (
            <div className="mt-8 rounded-[1.75rem] border border-dashed border-border bg-white/70 px-6 py-10 text-center">
              <p className="text-lg font-semibold text-foreground">
                No encontramos productos con ese criterio.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Prueba otra palabra o cambia la categoría seleccionada.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

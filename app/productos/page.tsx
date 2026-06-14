import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProductCatalog } from "@/components/product-catalog";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  return (
    <>
      <SiteHeader />
      <main className="pb-12 pt-6 md:pt-8">
        <div className="page-shell">
          <Button variant="outline">
            <Link href="/">
              <ArrowLeft data-icon="inline-start" />
            </Link>
            Volver al inicio
          </Button>
        </div>
        <ProductCatalog />
      </main>
      <SiteFooter />
    </>
  );
}

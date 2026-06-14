import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { site } from "@/lib/site-config";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});
const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const description =
  "Distribuidora Latinos: minimarket y distribuidora en República Dominicana. Comestibles, vegetales frescos, carnes, embutidos, bebidas y productos de limpieza. Ahorra en productos esenciales seleccionados exentos de ITBIS.";

export const metadata: Metadata = {
  metadataBase: new URL("https://distribuidoralatinos.com"),
  title: {
    default: "Distribuidora Latinos | Minimarket en República Dominicana",
    template: "%s | Distribuidora Latinos",
  },
  description,
  keywords: [
    "minimarket",
    "distribuidora",
    "colmado",
    "República Dominicana",
    "vegetales frescos",
    "productos de limpieza",
    "exento de ITBIS",
    "compra por WhatsApp",
  ],
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "es_DO",
    title: "Distribuidora Latinos | Todo para tu hogar, cerca de ti",
    description,
    siteName: site.name,
    images: [
      {
        url: "/images/hero-groceries.png",
        width: 1200,
        height: 630,
        alt: "Productos frescos en Distribuidora Latinos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Distribuidora Latinos",
    description,
    images: ["/images/hero-groceries.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#d11f2a",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`light ${fraunces.variable} ${dmSans.variable} bg-background`}
    >
      <link rel="icon" href="images/logo.png" />
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}

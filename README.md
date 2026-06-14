# Distribuidora Latinos

Sitio web de tipo catalogo para **Distribuidora Latinos**, un minimarket y distribuidora de productos de consumo diario. La app esta pensada para mostrar categorias, productos, informacion del negocio y facilitar el contacto directo por **WhatsApp**.

## Que resuelve esta app

- Presenta el negocio con una portada comercial clara.
- Muestra productos organizados por categoria.
- Permite buscar y filtrar productos desde la vista de catalogo.
- Lleva al cliente a WhatsApp con mensajes prearmados para pedir o consultar.
- Expone informacion importante del negocio: direccion, horarios, identidad de marca y ubicacion.

## Stack

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS 4`
- `lucide-react`

## Rutas principales

- `/`
  Landing principal del negocio con hero, categorias, productos destacados, beneficios, mision, vision, valores, testimonios y contacto.

- `/productos`
  Catalogo completo con filtro por categoria, buscador y CTA hacia WhatsApp.

## Estructura relevante

- [app/page.tsx](C:/Users/Odise/OneDrive/Escritorio/todo/Full%20Stack%20Project/Paginas%20de%20negocios/Distribuidora%20Latinos/app/page.tsx)
  Pagina principal.

- [app/productos/page.tsx](C:/Users/Odise/OneDrive/Escritorio/todo/Full%20Stack%20Project/Paginas%20de%20negocios/Distribuidora%20Latinos/app/productos/page.tsx)
  Pagina del catalogo completo.

- [components/product-catalog.tsx](C:/Users/Odise/OneDrive/Escritorio/todo/Full%20Stack%20Project/Paginas%20de%20negocios/Distribuidora%20Latinos/components/product-catalog.tsx)
  Componente principal del catalogo, con buscador, filtros y tarjetas de producto.

- [lib/content.ts](C:/Users/Odise/OneDrive/Escritorio/todo/Full%20Stack%20Project/Paginas%20de%20negocios/Distribuidora%20Latinos/lib/content.ts)
  Contenido comercial del sitio: categorias, productos, beneficios, testimonios, mision, vision y valores.

- [lib/site-config.ts](C:/Users/Odise/OneDrive/Escritorio/todo/Full%20Stack%20Project/Paginas%20de%20negocios/Distribuidora%20Latinos/lib/site-config.ts)
  Configuracion central del negocio: nombre, telefono, WhatsApp, direccion, mapas, horarios y redes.

## Como ejecutar el proyecto

1. Instala dependencias.

```bash
npm install
```

2. Inicia el entorno de desarrollo.

```bash
npm run dev
```

3. Abre el navegador en:

```bash
http://localhost:3000
```

## Scripts disponibles

- `npm run dev`
  Inicia el proyecto en modo desarrollo.

- `npm run build`
  Genera la version de produccion.

- `npm run start`
  Levanta la app en modo produccion.

- `npm run lint`
  Ejecuta ESLint.

Nota: en el estado actual del proyecto, `eslint` no esta instalado como dependencia activa, por lo que `npm run lint` puede fallar hasta completar esa configuracion.

## Donde editar el contenido

### Datos del negocio

Edita [lib/site-config.ts](C:/Users/Odise/OneDrive/Escritorio/todo/Full%20Stack%20Project/Paginas%20de%20negocios/Distribuidora%20Latinos/lib/site-config.ts) para cambiar:

- Nombre del negocio
- Eslogan
- Numero de WhatsApp
- Mensaje inicial de WhatsApp
- Telefono visible
- Direccion
- Enlace de Google Maps
- Horarios
- Redes sociales

### Catalogo y textos comerciales

Edita [lib/content.ts](C:/Users/Odise/OneDrive/Escritorio/todo/Full%20Stack%20Project/Paginas%20de%20negocios/Distribuidora%20Latinos/lib/content.ts) para cambiar:

- Categorias
- Productos
- Precios
- Descripciones
- URLs de imagenes
- Beneficios
- Testimonios
- FAQ
- Mision, vision y valores

## Flujo de pedido

La app no procesa pagos ni checkout interno. El flujo comercial actual es este:

1. El cliente navega por la portada o el catalogo.
2. Encuentra un producto o una categoria.
3. Pulsa el CTA para pedir o consultar.
4. Se abre WhatsApp con un mensaje prellenado.
5. El negocio confirma disponibilidad, entrega o retiro manualmente.

## Personalizacion visual

Si quieres cambiar el look general del sitio, revisa:

- [app/globals.css](C:/Users/Odise/OneDrive/Escritorio/todo/Full%20Stack%20Project/Paginas%20de%20negocios/Distribuidora%20Latinos/app/globals.css)
- [components/ui/button.tsx](C:/Users/Odise/OneDrive/Escritorio/todo/Full%20Stack%20Project/Paginas%20de%20negocios/Distribuidora%20Latinos/components/ui/button.tsx)
- [app/page.tsx](C:/Users/Odise/OneDrive/Escritorio/todo/Full%20Stack%20Project/Paginas%20de%20negocios/Distribuidora%20Latinos/app/page.tsx)

## Estado actual

La aplicacion funciona como una web comercial ligera para un negocio local, con foco en:

- Mostrar surtido de productos
- Reforzar la identidad del negocio
- Reducir friccion para iniciar pedidos
- Convertir visitas en conversaciones por WhatsApp

## Siguientes mejoras sugeridas

- Conectar productos a una fuente de datos real
- Agregar panel simple para actualizar precios
- Corregir y activar ESLint
- Optimizar imagenes remotas o migrarlas a assets propios
- Añadir SEO local mas completo
- Integrar analitica de clics en WhatsApp

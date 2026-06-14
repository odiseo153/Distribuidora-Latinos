import {
  Apple,
  Beef,
  CupSoda,
  Home,
  Sandwich,
  SprayCan,
  Carrot,
  type LucideIcon,
} from "lucide-react";

export type CategoryId =
  | "comestibles"
  | "vegetales"
  | "carnes"
  | "embutidos"
  | "bebidas"
  | "limpieza"
  | "hogar";

export type Category = {
  id: CategoryId;
  name: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: CategoryId;
};

export const categories: Category[] = [
  {
    id: "comestibles",
    icon: Apple,
    name: "Comestibles",
    description: "Despensa completa para resolver la semana sin dar vueltas.",
    accent: "from-[#fff0d2] to-[#ffd27f]",
    image: "/images/featured-pantry.png",
  },
  {
    id: "vegetales",
    icon: Carrot,
    name: "Vegetales",
    description: "Frescura diaria para tus comidas, sopas y ensaladas.",
    accent: "from-[#dff7d9] to-[#8dd67d]",
    image: "/images/featured-vegetables.png",
  },
  {
    id: "carnes",
    icon: Beef,
    name: "Carnes",
    description: "Cortes prácticos para cocinar rápido y comer mejor.",
    accent: "from-[#ffe1d7] to-[#f6a68c]",
    image: "/images/hero-groceries.png",
  },
  {
    id: "embutidos",
    icon: Sandwich,
    name: "Embutidos",
    description: "Opciones listas para desayuno, cena o picadera.",
    accent: "from-[#ffe5d5] to-[#f5b18f]",
    image: "/images/hero-groceries.png",
  },
  {
    id: "bebidas",
    icon: CupSoda,
    name: "Bebidas",
    description: "Refrescos, jugos y agua fría para el día completo.",
    accent: "from-[#ffe8b7] to-[#ffb861]",
    image: "/images/hero-groceries.png",
  },
  {
    id: "limpieza",
    icon: SprayCan,
    name: "Limpieza",
    description: "Lo esencial para mantener la casa limpia y abastecida.",
    accent: "from-[#daf6f0] to-[#89d8cc]",
    image: "/images/featured-cleaning.png",
  },
  {
    id: "hogar",
    icon: Home,
    name: "Hogar",
    description: "Artículos útiles del día a día para la rutina de casa.",
    accent: "from-[#f5eadf] to-[#dcbf9d]",
    image: "/images/hero-groceries.png",
  },
];

const productSeeds: Record<
  CategoryId,
  Array<{ name: string; price: number; description: string }>
> = {
  comestibles: [
    {
      name: "Arroz premium 5 lb",
      price: 185,
      description: "Grano suelto y rendidor para la mesa de todos los días.",
    },
    {
      name: "Habichuelas rojas 1 lb",
      price: 78,
      description: "Ideales para guisos caseros y comidas abundantes.",
    },
    {
      name: "Aceite",
      price: 210,
      description: "Rinde bien para freír, saltear y cocinar diario.",
    },
    {
      name: "Pasta espagueti",
      price: 65,
      description: "Una base rápida para almuerzos y cenas familiares.",
    },
    {
      name: "Salsa de tomate",
      price: 52,
      description: "Toque casero para pastas, guisos y víveres.",
    },
    {
      name: "Azúcar crema 2 lb",
      price: 95,
      description: "Perfecta para jugos, café y postres sencillos.",
    },
    {
      name: "Avena instantánea",
      price: 110,
      description: "Desayuno práctico para mañanas con poco tiempo.",
    },
    {
      name: "Harina de maíz",
      price: 70,
      description: "Lista para bollos, arepas y recetas rápidas.",
    },
    {
      name: "Leche evaporada",
      price: 84,
      description: "Básico de cocina para salsas, dulces y café.",
    },
    {
      name: "Galletas saladas",
      price: 48,
      description: "Acompañante versátil para meriendas y sopas.",
    },
  ],
  vegetales: [
    {
      name: "Tomates maduros",
      price: 55,
      description: "Seleccionados para ensaladas, guisos y salsas frescas.",
    },
    {
      name: "Cebolla roja",
      price: 40,
      description: "Buen sabor y textura para sofrítos completos.",
    },
    {
      name: "Lechuga",
      price: 65,
      description: "Crujiente y fresca para ensaladas rápidas.",
    },
    {
      name: "Zanahoria",
      price: 45,
      description: "Ideal para sopas, ensaladas y loncheras.",
    },
    {
      name: "Papa",
      price: 50,
      description: "Lista para freír, hervir u hornear.",
    },
    {
      name: "Ajo criollo",
      price: 32,
      description: "Punto de sabor para cualquier sazón casero.",
    },
    {
      name: "Pepino verde",
      price: 38,
      description: "Ligero y fresco para jugos o ensaladas.",
    },
    {
      name: "Repollo",
      price: 48,
      description: "Rinde bastante y combina con todo.",
    },
    {
      name: "Plátano verde",
      price: 28,
      description: "Perfecto para mangú, fritos o guarniciones.",
    },
  ],
  carnes: [
    {
      name: "Pollo fresco por libra",
      price: 92,
      description: "Buena opción para comidas caseras y rendidoras.",
    },
    {
      name: "Carne molida",
      price: 165,
      description: "Versátil para albóndigas, pastas y picadillos.",
    },
    {
      name: "Chuleta ahumada",
      price: 145,
      description: "Lista para freír o acompañar arroz y habichuelas.",
    },
    {
      name: "Muslos de pollo",
      price: 96,
      description: "Jugosos y prácticos para guisos y frituras.",
    },
    {
      name: "Longaniza fresca",
      price: 135,
      description: "Sabor intenso para desayuno o picadera.",
    },
  ],
  embutidos: [
    {
      name: "Salami especial",
      price: 92,
      description: "Clásico para desayunos y cenas rápidas.",
    },
    {
      name: "Queso amarillo lonjeado",
      price: 115,
      description: "Fácil de usar en sandwiches y tostas.",
    },
  ],
  bebidas: [
    {
      name: "Agua Planeta",
      price: 35,
      description: "Hidratación diaria para casa o trabajo.",
    },
    {
      name: "Refresco cola 2 L",
      price: 110,
      description: "El acompañante clásico para compartir.",
    },
    {
      name: "Jugo de naranja",
      price: 95,
      description: "Sabor fresco para desayunos y meriendas.",
    },
    {
      name: "Malta",
      price: 55,
      description: "Una favorita para cualquier momento del día.",
    },
    {
      name: "Agua con gas",
      price: 62,
      description: "Refrescante y ligera para acompañar comidas.",
    },
    {
      name: "Vive 100",
      price: 95,
      description: "Ideal para días largos o jornadas activas.",
    },
  ],
  limpieza: [
    {
      name: "Detergente en polvo",
      price: 135,
      description: "Buen rendimiento para la colada semanal.",
    },
    {
      name: "Cloro multiusos",
      price: 68,
      description: "Útil para baño, cocina y superficies.",
    },
    {
      name: "Suavizante floral",
      price: 120,
      description: "Deja aroma agradable en la ropa.",
    },
    {
      name: "Jabón de fregar",
      price: 44,
      description: "Práctico para platos y limpieza rápida.",
    },
    {
      name: "Desinfectante",
      price: 98,
      description: "Ayuda a mantener los espacios frescos.",
    },
    {
      name: "Esponjas pack",
      price: 58,
      description: "Set útil para cocina y tareas del hogar.",
    },
    {
      name: "Papel toalla",
      price: 85,
      description: "Siempre a mano para derrames y cocina.",
    },
    {
      name: "Fundas de basura",
      price: 74,
      description: "Resistentes para la rutina diaria.",
    },
    {
      name: "Limpiador de piso",
      price: 112,
      description: "Deja brillo y aroma fresco.",
    },
    {
      name: "Guantes de limpieza",
      price: 66,
      description: "Protección simple para trabajos del hogar.",
    },
  ],
  hogar: [
    {
      name: "Velas de emergencia",
      price: 40,
      description: "Siempre útiles para imprevistos en casa.",
    },
    {
      name: "Fósforos",
      price: 22,
      description: "Artículo básico para cocina y emergencia.",
    },
    {
      name: "Servilletas pack",
      price: 52,
      description: "Perfectas para comidas familiares y meriendas.",
    },
    {
      name: "Vasos desechables",
      price: 60,
      description: "Prácticos para visitas y reuniones.",
    },
    {
      name: "Platos desechables",
      price: 72,
      description: "Solución rápida para compartir sin complicaciones.",
    },
    {
      name: "Papel higiénico 4 rollos",
      price: 130,
      description: "Un esencial fijo para el hogar.",
    },
    {
      name: "Pilas AA",
      price: 96,
      description: "Útiles para controles, juguetes y equipos.",
    },
    {
      name: "Encendedor",
      price: 30,
      description: "Práctico para cocina y uso diario.",
    },
    {
      name: "Toallitas húmedas",
      price: 84,
      description: "Muy útiles para limpieza rápida.",
    },
    {
      name: "Aluminio doméstico",
      price: 78,
      description: "Para conservar alimentos y cocinar mejor.",
    },
  ],
};

const productImagesByName: Record<string, string> = {
  "Arroz premium 5 lb":
    "https://gruporamos.vtexassets.com/arquivos/ids/166350-800-800?v=639112078300670000&width=800&height=800&aspect=true",
  "Habichuelas rojas 1 lb":
    "https://green.com.do/wp-content/uploads/2018/01/Habichuela-roja-1.jpg",
  Aceite:
    "https://d37orfp70tellf.cloudfront.net/wp-content/uploads/2016/09/11000154/32-FL.-Oz.-Aceite-MaiCC81z-Mazola-300x300.png",
  "Pasta espagueti":
    "https://grupobocel.com/wp-content/uploads/2020/08/composiciones-para-web_01-min.jpg",
  "Salsa de tomate":
    "https://cdn-ilddihb.nitrocdn.com/MgqZCGPEMHvMRLsisMUCAIMWvgGMxqaj/assets/images/optimized/rev-12f5f61/www.goya.com/wp-content/uploads/2016/02/3961_Tomato-Sauce_8-OZ_Front-1-440x320.png",
  "Azucar crema 2 lb":
    "https://tienda.farmaciacarol.com/Images/Products/21097705.jpg",
  "Avena instantanea":
    "https://gruporamos.vtexassets.com/arquivos/ids/164013/1-und-7462275402751.jpg?v=639101496158230000",
  "Harina de maiz":
    "https://d37orfp70tellf.cloudfront.net/wp-content/uploads/2016/08/30183705/Nuevo-empaque-MazorcaMaiz-397g_B.png",
  "Leche evaporada":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi5-_T2cac-F8mYdI4y8aUA3kLChKi0_jw5A&s",
  "Galletas saladas":
    "https://res.cloudinary.com/riqra/image/upload/v1678811322/sellers/12/a3oxxbwtnab9kluxeptd.jpg",
  "Tomates maduros":
    "https://images.unsplash.com/photo-1642372849465-ad4afb304542?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "Cebolla roja":
    "https://www.gastronomiavasca.net/uploads/image/file/3338/cebolla_roja.jpg",
  Lechuga:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj726Yp7Dx7-O-DM6w3nUuKY0OEM0gGvTA4g&s",
  Zanahoria:
    "https://verduras.consumer.es/sites/verduras/files/styles/pagina_cabecera_desktop/public/2025-05/zanahoria_0.webp?h=1e66e246&itok=ekbnPp6C",
  Papa: "https://www.herbazest.com/imgs/0/a/c/451775/papa.jpg",
  "Ajo criollo":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDUwzRwgXn-eC2L1SukKzCTSX7N-nahpOGA&s",
  "Pepino verde":
    "https://www.recetasnestlecam.com/sites/default/files/2022-04/que-es-el-pepino.jpg",
  Repollo:
    "https://s1.abcstatics.com/media/bienestar/2021/02/10/repollo-ficha-kk2C--1248x698@abc.jpg",
  "Platano verde":
    "https://i.ytimg.com/vi/SHrzIpJjDGA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDPrSr-r24YlHjGkphtmYDat3S-VA",
  "Pollo fresco por libra":
    "https://kitchenacademy.es/wp-content/uploads/pollo.jpg",
  "Carne molida":
    "https://sigmafoodservice.com/medias/515Wx515H-Ground-Beef-80-Lean-Ground-Beef-1-.jpg?context=bWFzdGVyfGltYWdlc3wyMTgzOTZ8aW1hZ2UvcG5nfGFHUTVMMmd6TVM4NU5qUXpOREV3TWpJM01qTXdMelV4TlZkNE5URTFTRjlIY205MWJtUWdRbVZsWmlBdElEZ3dKU0JNWldGdUlFZHliM1Z1WkNCQ1pXVm1JQ2d4S1M1cWNHY3xhMWM1MmM1ZDNjOTgyMmYwMzcwYjQ0MGVmYjczY2M2OWVkMzZlNjdmZTU3NmExMTBkMGYyN2I1NTczZTI4YWU4",
  "Chuleta ahumada":
    "https://static.compreloadomicilio.com/supermercadoisaric/products/01382/602a8f14b9492929576917.webp",
  "Muslos de pollo":
    "https://www.gastronomiavasca.net/uploads/image/file/4317/muslo_de_pollo.jpg",
  "Longaniza fresca":
    "https://carniceriacatala.es/wp-content/uploads/2023/05/LONGANIZA-FRESCA.jpg",
  "Jamon cocido": "https://i.blogs.es/cf7a27/jamon_cocido/500_333.jpeg",
  "Salami especial":
    "https://d3d4s9jdu9j4x0.cloudfront.net/wp-content/uploads/2021/09/20164932/Salamito-0.75Lb-Super-Especial-1lb.png",
  "Queso amarillo lonjeado":
    "https://thumbs.dreamstime.com/b/mont%C3%B3n-de-lonchas-queso-amarillo-cremoso-sobre-un-plato-madera-perfecto-para-blogs-comida-sitios-recetas-o-men%C3%BAs-restaurantes-424576913.jpg",
  "Queso de freir":
    "https://images.unsplash.com/photo-1620567721632-c5e257b4dcef?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "Jamon picnic":
    "https://media.istockphoto.com/id/2249653110/photo/sausages-grilled-on-the-barbecue-grill.webp?a=1&b=1&c=eXN_AW8rIc8e7A0GeSxLELk0_3vh4LCX5jiRnx_rYVs%3D&k=20&s=612x612&w=0",
  "Chorizo parrillero":
    "https://media.istockphoto.com/id/2249653110/photo/sausages-grilled-on-the-barbecue-grill.webp?a=1&b=1&c=eXN_AW8rIc8e7A0GeSxLELk0_3vh4LCX5jiRnx_rYVs%3D&k=20&s=612x612&w=0",
  "Agua Planeta":
    "https://farmaciasloshidalgos.com.do/wp-content/uploads/2023/10/017069.png",
  "Refresco cola 2 L":
    "https://gruporamos.vtexassets.com/arquivos/ids/160255-800-800?v=639090402163670000&width=800&height=800&aspect=true",
  "Jugo de naranja":
    "https://www.gruporica.com/wp-content/uploads/2021/03/jugo-100-sin-azucar2-1024x504-new2.png",

  Malta: "https://cdn.almacen.do/2022/03/Malta-India-12-oz-Front-600x600.jpg",
  "Agua con gas":
    "https://d31f1ehqijlcua.cloudfront.net/n/4/5/d/f/45dfe033ed8c48d8c7edb38249fe9730f29cd7d2_Water_486796_01.jpg",
  "Te frio limon":
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "Vive 100":
    "https://d31f1ehqijlcua.cloudfront.net/n/a/b/8/2/ab8205f370adca2bd6afa64b0afd326f931fa53f_Beverage_510021_01.jpg",
  "Detergente en polvo":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PoA-oQypUTKL4cYA_F-RHiwqFmS8Z2GJew&s",
  "Cloro multiusos":
    "https://kywiec.vtexassets.com/arquivos/ids/156721/471585.jpg?v=638380020034400000",
  "Suavizante floral":
  "https://img.plazalama.com.do/cdn-cgi/imagedelivery/sGmYOLqUIPM1LW64nOGaRw/a1572324-4c1f-4009-2a91-4113f562f600/base",
  "Jabon de fregar":
    "https://images.unsplash.com/photo-1550505393-2c5dbec5de87?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMGl0ZW1zfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  Desinfectante:
    "https://www.tuhogar.com/adobe/dynamicmedia/deliver/dm-aid--9cc34a0a-7851-4990-a9bd-593291aa984e/fabuloso-desinfectante-2l.png?quality=85&preferwebp=true",
  "Esponjas pack":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4rhOhJ9EDDOz6YAQDOVEwu5JbXmj8I47Lg&s",
  "Papel toalla":
    "https://static.compreloadomicilio.com/supermercadoisaric/products/01740/604fe3ff00188091776219.webp",
  "Fundas de basura":
    "https://www.suplidorarenma.com/cdn/shop/products/fundas55galon_c6cf67e2-ab85-4668-8306-5ec83a89b37b_1024x.jpg?v=1633558164",
  "Limpiador de piso":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTiBh1TiwkgTjisqJa_fpZNRgnfe0MB2W7w&s",
  "Guantes de limpieza":
    "https://ferremix.com.do/cdn/shop/files/T23260.jpg?v=1754320678",
  "Velas de emergencia":
    "https://m.media-amazon.com/images/I/31DuEwSRMsL._AC_UF894,1000_QL80_.jpg",
  "Fósforos":
    "https://tienda.farmaciacarol.com/Images/Products/21097959.jpg",
  "Servilletas pack":
    "https://d31f1ehqijlcua.cloudfront.net/n/4/a/a/9/4aa98f40db126d46f6a3ede37871d8ea124d822b_paper_331180_01.jpg",
  "Vasos desechables":
    "https://vocatus.com.do/web/image/product.template/14318/image_1024?unique=f2d0495",
  "Platos desechables":
    "https://m.media-amazon.com/images/I/71LIN++lfiL._AC_UF894,1000_QL80_.jpg",
  "Papel higiénico 4 rollos":
    "https://gruporamos.vtexassets.com/arquivos/ids/167237/1-und-7462381391475.jpg?v=639116988043930000",
  "Pilas AA":
    "https://cdn.almacen.do/2020/12/BateriCC81a-Alcalinas-Duracell-AA_-4-uds-Front.jpg",
  Encendedor:
    "https://walmartsv.vtexassets.com/arquivos/ids/696488-800-450?v=638764885840100000&width=800&height=450&aspect=true",
  "Toallitas húmedas":
    "https://bebemundo.com.do/media/catalog/product/cache/fde49a4ea9a339628caa0bc56aea00ff/2/0/2080597-1.png",
  "Aluminio doméstico":
    "https://http2.mlstatic.com/D_NQ_NP_977865-CBT96611204260_112025-O.webp",
};

export const products: Product[] = Object.entries(productSeeds).flatMap(
  ([categoryId, items]) =>
    items.map((item, index) => ({
      id: `${categoryId}-${index + 1}`,
      category: categoryId as CategoryId,
      image:
        productImagesByName[item.name] ??
        categories.find((category) => category.id === categoryId)?.image ??
        "/placeholder.jpg",
      ...item,
    })),
);

export const mission = {
  title: "Mision",
  description:
    "Abastecer a cada familia del sector con productos utiles, frescos y accesibles, ofreciendo una atencion cercana y un proceso de compra rapido.",
} as const;

export const vision = {
  title: "Vision",
  description:
    "Ser el minimarket de referencia del barrio por su servicio confiable, surtido practico y experiencia digital simple para pedir y comprar.",
} as const;

export const values = [
  {
    title: "Cercania",
    description: "Tratamos cada pedido con atencion directa, clara y humana.",
  },
  {
    title: "Responsabilidad",
    description:
      "Mostramos precios de referencia y confirmamos cada pedido con transparencia.",
  },
  {
    title: "Rapidez",
    description:
      "Buscamos que el cliente encuentre y pida lo necesario sin perder tiempo.",
  },
  {
    title: "Calidad diaria",
    description:
      "Priorizamos productos frescos y surtido util para la rutina del hogar.",
  },
] as const;

export const benefits = [
  {
    title: "Entrega rápida de barrio",
    description: "Responde por WhatsApp en minutos y coordina sin complicarte.",
  },
  {
    title: "Surtido real para la semana",
    description: "Comida, limpieza y hogar en un mismo pedido.",
  },
  {
    title: "Frescura que se nota",
    description:
      "Vegetales y básicos seleccionados para comprar con confianza.",
  },
  {
    title: "Atención cercana",
    description: "Un servicio directo, práctico y sin vueltas.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Siempre resuelvo la compra de la semana rápido y por WhatsApp me responden de una vez.",
    name: "María Reyes",
    detail: "Cliente frecuente",
  },
  {
    quote:
      "Tienen una mezcla muy buena entre productos frescos, despensa y limpieza. Me evita ir a varios sitios.",
    name: "José Paredes",
    detail: "Vecino del sector",
  },
  {
    quote:
      "Los precios están claros y el catálogo ayuda bastante para saber qué pedir antes de escribir.",
    name: "Rosa Peña",
    detail: "Compra para su hogar",
  },
] as const;

export const faqs = [
  {
    q: "¿Dónde puedo ver todos los productos?",
    a: "En la vista de catálogo puedes navegar por categoría y consultar precios, descripciones e imágenes.",
  },
  {
    q: "¿Cómo hago un pedido?",
    a: "Puedes escribir por WhatsApp desde cualquier producto o desde los botones principales del sitio.",
  },
  {
    q: "¿Los precios pueden cambiar?",
    a: "Sí, este catálogo es de referencia. La confirmación final se hace por WhatsApp o directamente en tienda.",
  },
  {
    q: "¿Tienen productos frescos todos los días?",
    a: "Sí, trabajamos con reposición constante en vegetales, bebidas y básicos de consumo diario.",
  },
] as const;

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
      name: "Lechuga crespa",
      price: 65,
      description: "Crujiente y fresca para ensaladas rápidas.",
    },
    {
      name: "Zanahoria",
      price: 45,
      description: "Ideal para sopas, ensaladas y loncheras.",
    },
    {
      name: "Papa lavada",
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
      name: "Pechuga deshuesada",
      price: 205,
      description: "Opción limpia para recetas ligeras.",
    },
    {
      name: "Alitas de pollo",
      price: 88,
      description: "Buenas para reuniones, frituras o salsas.",
    },
    {
      name: "Longaniza fresca",
      price: 135,
      description: "Sabor intenso para desayuno o picadera.",
    },
  ],
  embutidos: [
    {
      name: "Jamón cocido",
      price: 85,
      description: "Suave y práctico para sándwiches y meriendas.",
    },
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
    {
      name: "Salchichas jumbo",
      price: 125,
      description: "Rápidas de preparar y rendidoras.",
    },
    {
      name: "Pechuga de pavo",
      price: 145,
      description: "Alternativa ligera para meriendas o wraps.",
    },
    {
      name: "Mortadela",
      price: 74,
      description: "Ideal para picar o resolver la cena.",
    },
    {
      name: "Queso de freír",
      price: 165,
      description: "Básico dominicano para desayuno o cena.",
    },
    {
      name: "Tocineta",
      price: 155,
      description: "Aporta sabor en desayunos y pastas.",
    },
    {
      name: "Jamón picnic",
      price: 68,
      description: "Buen rendimiento para sándwiches familiares.",
    },
    {
      name: "Chorizo parrillero",
      price: 172,
      description: "Perfecto para picadera y fines de semana.",
    },
  ],
  bebidas: [
    {
      name: "Agua purificada 1.5 L",
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
      name: "Bebida de avena",
      price: 88,
      description: "Opción práctica para desayunar rápido.",
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
      name: "Té frío limón",
      price: 58,
      description: "Toque cítrico y refrescante para la tarde.",
    },
    {
      name: "Energizante",
      price: 95,
      description: "Ideal para días largos o jornadas activas.",
    },
    {
      name: "Chocolate listo para beber",
      price: 72,
      description: "Merienda rápida para grandes y chicos.",
    },
    {
      name: "Jugo de frutas tropicales",
      price: 90,
      description: "Sabor dulce para acompañar el almuerzo.",
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
  "Lechuga crespa":
    "https://images.unsplash.com/photo-1642372849465-ad4afb304542?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  Zanahoria:
    "https://images.unsplash.com/photo-1642372849465-ad4afb304542?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "Papa lavada":
    "https://images.unsplash.com/photo-1642372849465-ad4afb304542?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "Ajo criollo":
    "https://images.unsplash.com/photo-1642372849465-ad4afb304542?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
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
  "Salchichas jumbo":
    "https://media.istockphoto.com/id/2249653110/photo/sausages-grilled-on-the-barbecue-grill.webp?a=1&b=1&c=eXN_AW8rIc8e7A0GeSxLELk0_3vh4LCX5jiRnx_rYVs%3D&k=20&s=612x612&w=0",
  "Pechuga de pavo":
    "https://media.istockphoto.com/id/2249653110/photo/sausages-grilled-on-the-barbecue-grill.webp?a=1&b=1&c=eXN_AW8rIc8e7A0GeSxLELk0_3vh4LCX5jiRnx_rYVs%3D&k=20&s=612x612&w=0",
  Mortadela:
    "https://media.istockphoto.com/id/2249653110/photo/sausages-grilled-on-the-barbecue-grill.webp?a=1&b=1&c=eXN_AW8rIc8e7A0GeSxLELk0_3vh4LCX5jiRnx_rYVs%3D&k=20&s=612x612&w=0",
  "Queso de freir":
    "https://images.unsplash.com/photo-1620567721632-c5e257b4dcef?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000",
  Tocineta:
    "https://media.istockphoto.com/id/2249653110/photo/sausages-grilled-on-the-barbecue-grill.webp?a=1&b=1&c=eXN_AW8rIc8e7A0GeSxLELk0_3vh4LCX5jiRnx_rYVs%3D&k=20&s=612x612&w=0",
  "Jamon picnic":
    "https://media.istockphoto.com/id/2249653110/photo/sausages-grilled-on-the-barbecue-grill.webp?a=1&b=1&c=eXN_AW8rIc8e7A0GeSxLELk0_3vh4LCX5jiRnx_rYVs%3D&k=20&s=612x612&w=0",
  "Chorizo parrillero":
    "https://media.istockphoto.com/id/2249653110/photo/sausages-grilled-on-the-barbecue-grill.webp?a=1&b=1&c=eXN_AW8rIc8e7A0GeSxLELk0_3vh4LCX5jiRnx_rYVs%3D&k=20&s=612x612&w=0",
  "Agua purificada 1.5 L":
    "https://images.unsplash.com/photo-1561041695-d2fadf9f318c?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym90dGxlZCUyMHdhdGVyfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  "Refresco cola 2 L":
    "https://plus.unsplash.com/premium_photo-1667543228378-ec4478ab2845?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "Jugo de naranja":
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "Bebida de avena":
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  Malta:
    "https://plus.unsplash.com/premium_photo-1667543228378-ec4478ab2845?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "Agua con gas":
    "https://images.unsplash.com/photo-1561041695-d2fadf9f318c?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym90dGxlZCUyMHdhdGVyfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  "Te frio limon":
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  Energizante:
    "https://plus.unsplash.com/premium_photo-1667543228378-ec4478ab2845?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "Chocolate listo para beber":
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "Jugo de frutas tropicales":
    "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "Detergente en polvo":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0PoA-oQypUTKL4cYA_F-RHiwqFmS8Z2GJew&s",
  "Cloro multiusos":
    "https://images.unsplash.com/photo-1550505393-2c5dbec5de87?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMGl0ZW1zfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  "Suavizante floral":
    "https://images.unsplash.com/photo-1550505393-2c5dbec5de87?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMGl0ZW1zfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  "Jabon de fregar":
    "https://images.unsplash.com/photo-1550505393-2c5dbec5de87?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMGl0ZW1zfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  Desinfectante:
    "https://images.unsplash.com/photo-1550505393-2c5dbec5de87?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMGl0ZW1zfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  "Esponjas pack":
    "https://images.unsplash.com/photo-1550505393-2c5dbec5de87?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMGl0ZW1zfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  "Papel toalla":
    "https://images.unsplash.com/photo-1550505393-2c5dbec5de87?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMGl0ZW1zfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  "Fundas de basura":
    "https://images.unsplash.com/photo-1550505393-2c5dbec5de87?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMGl0ZW1zfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  "Limpiador de piso":
    "https://images.unsplash.com/photo-1550505393-2c5dbec5de87?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMGl0ZW1zfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  "Guantes de limpieza":
    "https://images.unsplash.com/photo-1550505393-2c5dbec5de87?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMGl0ZW1zfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  "Velas de emergencia":
    "https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2Vob2xkJTIwaXRlbXN8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  Fosforos:
    "https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2Vob2xkJTIwaXRlbXN8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "Servilletas pack":
    "https://images.unsplash.com/photo-1550505393-2c5dbec5de87?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMGl0ZW1zfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  "Vasos desechables":
    "https://images.unsplash.com/photo-1550505393-2c5dbec5de87?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMGl0ZW1zfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  "Platos desechables":
    "https://images.unsplash.com/photo-1550505393-2c5dbec5de87?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMGl0ZW1zfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  "Papel higienico 4 rollos":
    "https://images.unsplash.com/photo-1550505393-2c5dbec5de87?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMGl0ZW1zfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  "Pilas AA":
    "https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2Vob2xkJTIwaXRlbXN8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  Encendedor:
    "https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2Vob2xkJTIwaXRlbXN8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
  "Toallitas humedas":
    "https://images.unsplash.com/photo-1550505393-2c5dbec5de87?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlaG9sZCUyMGl0ZW1zfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
  "Aluminio domestico":
    "https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2Vob2xkJTIwaXRlbXN8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
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

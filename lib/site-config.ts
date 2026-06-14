/**
 * Configuración central editable del negocio.
 * Cambia estos valores para actualizar toda la página.
 */
export const site = {
  name: "Distribuidora Latinos",
  tagline: "Minimarket y distribuidora de productos de consumo diario",
  // Número de WhatsApp en formato internacional, solo dígitos (RD = 1)
  whatsapp: "18494760100",
  whatsappMessage:
    "Hola, vengo desde la página web y quisiera consultar disponibilidad de productos.",
  phoneDisplay: "(849) 476-0100",
  phone: "18494760100",
  address: "C. Miramar Nte., Santo Domingo Este 11011",
  // URL de Google Maps embebida (reemplazable)
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2606825742005!2d-69.82199398871356!3d18.471847582539716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf87eeecb83e59%3A0xed9d465fc30147cf!2sDISTRIBUIDORA%20LATINOS!5e0!3m2!1sen!2sdo!4v1781445324254!5m2!1sen!2sdo",
  mapsDirections: "https://maps.app.goo.gl/kG2JrzvBaJVJmSVq5",
  hours: [
    { day: "Lunes a Sábado", time: "8:00 a.m. – 6:00 p.m." },
    { day: "Domingo", time: "8:00 a.m. – 3:00 p.m." },
  ],
  social: {
    facebook: "#",
    instagram: "#",
  },
} as const;

export function waLink(message?: string) {
  const text = encodeURIComponent(message ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

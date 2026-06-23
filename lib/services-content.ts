import type { Metadata } from "next"
import { SITE_URL, type Faq } from "@/lib/seo"

export type ServiceContent = {
  slug: string
  /** Etiqueta corta para navegación y breadcrumbs. */
  navLabel: string
  /** Texto del <title> (sin el sufijo de marca, que aporta el template). */
  title: string
  description: string
  keywords: string
  serviceType: string
  /** Título de la sección de hero (eyebrow encima del H1). */
  eyebrow: string
  /** Encabezado principal de la página (único <h1>). */
  h1: string
  /** Resalte en cursiva dentro del H1 (subcadena de h1). */
  h1Accent: string
  heroSubtitle: string
  /** Texto inicial del WhatsApp para esta página. */
  whatsappText: string
  /** Párrafos introductorios (contenido único por página). */
  intro: string[]
  /** Bloque de lista con título: fallas atendidas, pasos o beneficios. */
  list: {
    title: string
    items: string[]
  }
  faqs: Faq[]
}

export const SERVICES: ServiceContent[] = [
  {
    slug: "reparacion-calefones-montevideo",
    navLabel: "Reparación de calefones",
    title: "Reparación de Calefones en Montevideo y Canelones",
    description:
      "Reparación de calefones a domicilio en Montevideo y Canelones. Técnicos especializados en calefones que no calientan, pierden agua o cortan la térmica. Presupuesto por WhatsApp.",
    keywords:
      "reparación de calefones, reparación calefones Montevideo, técnico calefones Montevideo, calefón no calienta, calefón pierde agua",
    serviceType: "Reparación de calefones",
    eyebrow: "Reparación de calefones",
    h1: "Reparación de calefones en Montevideo y Canelones",
    h1Accent: "Montevideo y Canelones",
    heroSubtitle:
      "Técnicos especializados en reparar calefones que no calientan, pierden agua o cortan la térmica. Coordinamos el diagnóstico y la visita por WhatsApp, muchas veces el mismo día.",
    whatsappText: "Hola, vengo de TodoCalefones.com.uy: necesito reparar mi calefón. ",
    intro: [
      "En TodoCalefones nos dedicamos exclusivamente a la reparación de calefones en Montevideo y la zona metropolitana de Canelones. Atendemos fallas de termostato, resistencia, válvulas, pérdidas de agua y problemas eléctricos en calefones de todas las marcas.",
      "El calefón es un equipo que combina agua y electricidad, por lo que su reparación requiere manipulación técnica responsable. Nuestros técnicos diagnostican la falla, le explican qué necesita el equipo y le pasan un presupuesto estimado antes de intervenir.",
      "Para agilizar, podés enviarnos por WhatsApp la marca y modelo del calefón, una descripción de la falla y, si es posible, una foto del equipo. Con esos datos orientamos el presupuesto y coordinamos la visita.",
    ],
    list: {
      title: "Fallas de calefón que reparamos",
      items: [
        "No calienta el agua o calienta poco",
        "Pierde o gotea agua",
        "Salta la térmica o corta la corriente",
        "Falla de termostato o resistencia",
        "Válvula de seguridad o de corte con problemas",
        "Ruidos, olores o señales de desgaste",
      ],
    },
    faqs: [
      {
        q: "¿Cuánto cuesta reparar un calefón en Montevideo?",
        a: "El costo depende de la falla y del repuesto necesario. Enviando por WhatsApp la marca, el modelo y la descripción del problema le damos una orientación de presupuesto antes de la visita. El presupuesto es sin compromiso.",
      },
      {
        q: "¿Mi calefón no calienta, qué puede ser?",
        a: "Las causas más frecuentes son la resistencia quemada o el termostato dañado. También puede deberse a un problema en la instalación eléctrica. Un técnico debe revisarlo para diagnosticar con seguridad.",
      },
      {
        q: "¿Reparan calefones el mismo día?",
        a: "Cuando es posible coordinamos la visita el mismo día, especialmente en casos urgentes como pérdidas de agua o falta total de agua caliente. Escribinos por WhatsApp para conocer la disponibilidad.",
      },
      {
        q: "¿Trabajan con todas las marcas de calefones?",
        a: "Sí, reparamos calefones de todas las marcas que se comercializan en Uruguay: James, Junkers, Bosch, Orbis, Rheem, Sherman, Ariston y muchas más.",
      },
    ],
  },
  {
    slug: "instalacion-calefon",
    navLabel: "Instalación de calefones",
    title: "Instalación de Calefones y Cambio de Termotanque",
    description:
      "Instalación de calefones nuevos y sustitución de termotanques en Montevideo y Canelones. Conexiones seguras y puesta en funcionamiento por técnicos especializados. Consultá por WhatsApp.",
    keywords:
      "instalación de calefón, instalar calefón, cambio de termotanque, sustitución de calefón, instalación calefones Montevideo",
    serviceType: "Instalación de calefones",
    eyebrow: "Instalación de calefones",
    h1: "Instalación de calefones y cambio de termotanque",
    h1Accent: "cambio de termotanque",
    heroSubtitle:
      "Instalamos calefones nuevos y sustituimos termotanques antiguos cuidando las conexiones, la seguridad y la puesta en funcionamiento. Coordinamos por WhatsApp.",
    whatsappText: "Hola, vengo de TodoCalefones.com.uy: quiero instalar o cambiar un calefón. ",
    intro: [
      "Realizamos la instalación de calefones nuevos y la sustitución de termotanques antiguos en Montevideo y Canelones. Nos ocupamos de las conexiones de agua y electricidad, la fijación segura del equipo y la puesta en funcionamiento.",
      "Una instalación correcta evita pérdidas, problemas eléctricos y desgaste prematuro del calefón. Por eso trabajamos respetando las indicaciones del fabricante y los criterios de seguridad necesarios para un equipo que combina agua y corriente.",
      "Si estás por comprar un calefón o necesitás reemplazar uno viejo, escribinos por WhatsApp y te orientamos sobre la capacidad adecuada, la ubicación y todo lo necesario para coordinar la instalación.",
    ],
    list: {
      title: "Qué incluye la instalación",
      items: [
        "Instalación de calefones nuevos",
        "Sustitución de termotanques antiguos",
        "Conexión de agua y electricidad",
        "Fijación segura del equipo",
        "Puesta en funcionamiento y prueba",
        "Asesoramiento sobre capacidad y ubicación",
      ],
    },
    faqs: [
      {
        q: "¿Cuánto sale instalar un calefón?",
        a: "El precio depende del tipo de instalación y de si hay que adaptar conexiones existentes. Contanos por WhatsApp tu situación y el modelo de calefón para darte una orientación de presupuesto.",
      },
      {
        q: "¿Puedo cambiar un calefón viejo por uno nuevo?",
        a: "Sí. Retiramos el termotanque antiguo y dejamos instalado el nuevo, revisando que las conexiones queden seguras y sin pérdidas. Te asesoramos también sobre la capacidad adecuada.",
      },
      {
        q: "¿Qué capacidad de calefón necesito?",
        a: "Depende de la cantidad de personas y de puntos de agua caliente del hogar. Escribinos por WhatsApp y te orientamos según tu caso antes de coordinar la instalación.",
      },
    ],
  },
  {
    slug: "service-calefones",
    navLabel: "Service de calefones",
    title: "Service de Calefones en Montevideo y Canelones",
    description:
      "Service de calefones en Montevideo y Canelones: diagnóstico técnico, revisión de componentes y reparación. Atención por WhatsApp con técnicos especializados.",
    keywords:
      "service de calefones, service calefones Montevideo, diagnóstico de calefón, revisión de calefón",
    serviceType: "Service de calefones",
    eyebrow: "Service de calefones",
    h1: "Service de calefones en Montevideo y Canelones",
    h1Accent: "Montevideo y Canelones",
    heroSubtitle:
      "Diagnóstico técnico y revisión de componentes para que tu calefón vuelva a funcionar bien. Coordinamos la visita por WhatsApp.",
    whatsappText: "Hola, vengo de TodoCalefones.com.uy: necesito service para mi calefón. ",
    intro: [
      "Nuestro service de calefones se centra en el diagnóstico y la solución de un problema concreto: revisamos el equipo, identificamos la falla y resolvemos lo que necesita para volver a funcionar correctamente.",
      "A diferencia del mantenimiento preventivo, el service responde a una situación puntual: el calefón empezó a fallar, perdió rendimiento o muestra un comportamiento extraño. Revisamos termostato, resistencia, válvulas y conexiones para llegar a la causa.",
      "Trabajamos con todas las marcas y atendemos en Montevideo y la zona metropolitana de Canelones. Escribinos por WhatsApp con los datos del equipo y coordinamos la visita técnica.",
    ],
    list: {
      title: "Qué incluye el service",
      items: [
        "Diagnóstico técnico de la falla",
        "Revisión de termostato y resistencia",
        "Control de válvulas y conexiones",
        "Verificación del sistema eléctrico",
        "Presupuesto del repuesto o reparación necesaria",
        "Prueba de funcionamiento final",
      ],
    },
    faqs: [
      {
        q: "¿Qué diferencia hay entre service y mantenimiento?",
        a: "El service responde a una falla concreta: el calefón dejó de andar bien y hay que diagnosticarlo. El mantenimiento es preventivo y periódico, para evitar fallas y prolongar la vida útil del equipo.",
      },
      {
        q: "¿Cuánto demora el service de un calefón?",
        a: "Muchas revisiones se resuelven en la misma visita. Si se necesita un repuesto específico, lo coordinamos y te avisamos el plazo. Escribinos por WhatsApp para conocer la disponibilidad.",
      },
      {
        q: "¿Hacen service a calefones de cualquier marca?",
        a: "Sí, trabajamos con todas las marcas que se comercializan en Uruguay. Contanos la marca y el modelo por WhatsApp para orientarte mejor.",
      },
    ],
  },
  {
    slug: "mantenimiento-calefones",
    navLabel: "Mantenimiento de calefones",
    title: "Mantenimiento de Calefones — Service Preventivo",
    description:
      "Mantenimiento preventivo de calefones en Montevideo y Canelones. Revisión periódica de componentes para prolongar la vida útil y evitar fallas. Coordiná por WhatsApp.",
    keywords:
      "mantenimiento de calefones, mantenimiento calefones Montevideo, service preventivo calefón, limpieza de calefón",
    serviceType: "Mantenimiento de calefones",
    eyebrow: "Mantenimiento de calefones",
    h1: "Mantenimiento preventivo de calefones",
    h1Accent: "preventivo",
    heroSubtitle:
      "Revisión periódica de tu calefón para prolongar su vida útil, mantener el rendimiento y evitar fallas inesperadas. Coordinamos por WhatsApp.",
    whatsappText: "Hola, vengo de TodoCalefones.com.uy: quiero coordinar el mantenimiento de mi calefón. ",
    intro: [
      "El mantenimiento preventivo de calefones consiste en revisiones periódicas del equipo para detectar desgaste antes de que se convierta en una falla. Es la mejor forma de evitar quedarse sin agua caliente de un día para el otro.",
      "Durante el mantenimiento revisamos la resistencia, el termostato, las válvulas y el estado general del calefón. Un equipo mantenido funciona mejor, consume de forma más eficiente y dura más años.",
      "Recomendamos un mantenimiento periódico, especialmente en equipos con varios años de uso o en zonas con agua dura. Escribinos por WhatsApp para coordinar la revisión de tu calefón.",
    ],
    list: {
      title: "Qué revisamos en el mantenimiento",
      items: [
        "Estado de la resistencia",
        "Funcionamiento del termostato",
        "Válvulas de seguridad y de corte",
        "Conexiones de agua y electricidad",
        "Señales de desgaste o corrosión",
        "Recomendaciones para prolongar la vida útil",
      ],
    },
    faqs: [
      {
        q: "¿Cada cuánto conviene hacer mantenimiento al calefón?",
        a: "Como referencia general, conviene una revisión periódica, más seguido en equipos antiguos o en zonas con agua dura. Escribinos por WhatsApp y te orientamos según el estado de tu calefón.",
      },
      {
        q: "¿Para qué sirve el mantenimiento preventivo?",
        a: "Sirve para detectar desgaste a tiempo, mantener el rendimiento del equipo, mejorar la eficiencia y evitar fallas inesperadas que dejen al hogar sin agua caliente.",
      },
      {
        q: "¿El mantenimiento incluye reparación?",
        a: "El mantenimiento es una revisión preventiva. Si durante la revisión detectamos una falla, te pasamos el presupuesto del repuesto o reparación necesaria antes de intervenir.",
      },
    ],
  },
  {
    slug: "calefon-roto",
    navLabel: "Calefón roto",
    title: "Calefón Roto — Atención Urgente por WhatsApp",
    description:
      "¿Calefón roto? Atendemos urgencias de calefones que no calientan, pierden agua o cortan la térmica en Montevideo y Canelones. Escribinos por WhatsApp y vamos hoy si es posible.",
    keywords:
      "calefón roto, calefón no calienta, calefón pierde agua, calefón gotea, urgencia calefón Montevideo",
    serviceType: "Reparación urgente de calefones",
    eyebrow: "Calefón roto",
    h1: "¿Calefón roto? Lo resolvemos hoy",
    h1Accent: "hoy",
    heroSubtitle:
      "Si tu calefón no calienta, pierde agua, gotea o saltó la térmica, escribinos por WhatsApp. Atendemos urgencias y coordinamos la visita lo antes posible.",
    whatsappText: "Hola, vengo de TodoCalefones.com.uy: tengo el calefón roto y necesito ayuda. ",
    intro: [
      "Un calefón roto suele aparecer en el peor momento: te quedás sin agua caliente, aparece una pérdida o salta la térmica. En TodoCalefones atendemos estas urgencias en Montevideo y Canelones y coordinamos la visita lo antes posible.",
      "Lo primero es identificar la falla. Por seguridad, si notás una pérdida de agua importante o un problema eléctrico, conviene cortar la corriente del calefón y el suministro de agua hasta que llegue el técnico.",
      "Escribinos por WhatsApp contando qué le pasa al calefón, la marca y el modelo. Con esos datos orientamos el diagnóstico y te decimos cómo seguimos para resolverlo cuanto antes.",
    ],
    list: {
      title: "Síntomas de un calefón roto",
      items: [
        "No calienta el agua",
        "Pierde o gotea agua",
        "Saltó la térmica o corta la corriente",
        "Hace ruidos extraños",
        "Olor a quemado o señales eléctricas",
        "El agua sale con mal olor o color",
      ],
    },
    faqs: [
      {
        q: "Mi calefón perdió agua, ¿qué hago?",
        a: "Por seguridad, cortá el suministro de agua y la corriente del calefón. Después escribinos por WhatsApp describiendo la pérdida para coordinar la visita y resolverla cuanto antes.",
      },
      {
        q: "¿Atienden urgencias de calefón el mismo día?",
        a: "Sí, priorizamos las urgencias como pérdidas de agua o falta total de agua caliente y coordinamos la visita el mismo día cuando es posible. Escribinos por WhatsApp para conocer la disponibilidad.",
      },
      {
        q: "¿Conviene reparar o cambiar un calefón roto?",
        a: "Depende de la falla, la antigüedad del equipo y el costo del repuesto. Tras el diagnóstico te damos nuestra recomendación honesta para que decidas con la información clara.",
      },
    ],
  },
]

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug)
}

/** Genera la metadata de Next a partir del contenido del servicio. */
export function buildServiceMetadata(item: ServiceContent): Metadata {
  const url = `${SITE_URL}/${item.slug}`
  return {
    title: item.title,
    description: item.description,
    keywords: item.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "es_UY",
      url,
      title: `${item.title} | TodoCalefones`,
      description: item.description,
      siteName: "TodoCalefones",
      images: [{ url: "/open-graph.webp", width: 1731, height: 909, alt: item.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.description,
      images: ["/open-graph.webp"],
    },
  }
}

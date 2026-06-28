/**
 * Site imagery map — replace files in /public when client provides
 * official project renderings and photography.
 */
export const siteImages = {
  hero: {
    src: "/hero-bg.jpg",
    alt: "International container port supporting global trade and logistics operations",
  },
  about: {
    src: "/about.jpg",
    alt: "Corporate investment partners reviewing strategic growth opportunities",
  },
  projects: {
    sunyani: {
      src: "/projects/sunyani.jpg",
      alt: "Sunyani student accommodation development, Ghana",
    },
    trade: {
      src: "/projects/trade.jpg",
      alt: "Global trade expansion — international container port and commerce",
    },
    logistics: {
      src: "/projects/logistics.jpg",
      alt: "Logistics and supply chain — freight and warehouse operations",
    },
    property: {
      src: "/projects/prampram.jpg",
      alt: "Property development — residential building project in Ghana",
    },
    mixedUse: {
      src: "/projects/mixed-use.jpg",
      alt: "Future mixed-use and apartment development",
    },
  },
  gallery: [
    {
      src: "/gallery/construction.jpg",
      alt: "Construction and development site",
      label: "Construction",
    },
    {
      src: "/gallery/commercial.jpg",
      alt: "Commercial building development",
      label: "Commercial Buildings",
    },
    {
      src: "/gallery/infrastructure.jpg",
      alt: "Infrastructure development project",
      label: "Infrastructure",
    },
    {
      src: "/gallery/trade.jpg",
      alt: "Global trade operations",
      label: "Global Trade",
    },
    {
      src: "/gallery/logistics.jpg",
      alt: "Logistics and supply chain",
      label: "Logistics",
    },
    {
      src: "/gallery/ghana-development.jpg",
      alt: "Ghana development project",
      label: "Ghana Development Projects",
    },
  ],
} as const;

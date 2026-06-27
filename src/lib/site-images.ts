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
      alt: "Student accommodation development — modern multi-storey residential housing, Sunyani, Ghana",
    },
    prampram: {
      src: "/projects/prampram.jpg",
      alt: "Apartment building development — contemporary urban residential tower, Prampram, Ghana",
    },
  },
} as const;

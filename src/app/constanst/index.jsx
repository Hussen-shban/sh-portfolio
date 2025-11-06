
const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const expCards = [
  {
    source: "I started my journey with the basics: HTML, CSS, and JavaScript from Abdullah Gamal's channel.",
    imgPath: "/images/abdo(1).jpg",
    logoPath: "/svg/html.svg",
    title: "Step 1: Web Development Basics",
    date: "2024",
    exp: [
      "Learned page structure using HTML.",
      "Mastered styling and responsive design with CSS.",
      "Acquired JavaScript fundamentals to make pages interactive.",
    ],
  },
  {
    source: "I further developed my skills in React, and worked with Sass and Tailwind, from Osama Elzero's channel and Tamriz Academy.",
    imgPath: "/images/elzero.jpg",
    logoPath: "/svg/react.svg",
    title: "Step 2: React & Styling Tools",
    date: "2024 - 2025",
    exp: [
      "Understood components (Components) and state management (State).",
      "Built modern and responsive interfaces using Sass and Tailwind.",
      "Learned Git and GitHub to manage and track my projects.",
    ],
  },
  {
    source: "I advanced to Next.js, which I also learned from Tamriz Academy, to build more complete applications.",
    imgPath: "/images/tarmez.jpg",
    logoPath: "/svg/next.svg",
    title: "Step 3: Next.js",
    date: "2025",
    exp: [
      "Learned to create dynamic pages with Next.js.",
      "Used SSR and SSG to improve performance and SEO.",
      "Deployed my projects on Netlify for professional hosting experience.",
    ],
  },
];

const projects = [
  {
    img: "/images/NETFLIX-D4N9fd2i.png",
    name: "NETFLIX",
    code: "https://github.com/Hussen-shban/NETFLIX",
    web: "https://shflix.netlify.app/",
  },
  {
    img: "/images/SH-Ecommerce-CLnKsJBh.png",
    name: "SH-Ecommerce",
    code: "https://github.com/Hussen-shban/SH-e-comerce",
    web: "https://hussen-sh.netlify.app/",
  },
  {
    img: "/images/fresh-YpiBluqz.png",
    name: "FreshoSh",
    code: "https://github.com/Hussen-shban/FreshoSh",
    web: "https://hussen-shban.github.io/FreshoSh/",
  },
  {
    img: "/images/weather-DZMyF2oI.png",
    name: "weather-APP",
    code: "https://github.com/Hussen-shban/weather-APP",
    web: "https://hussen-shban.github.io/weather-APP/",
  },
  {
    img: "/images/HooBank-BSsK8QPi.png",
    name: "hoobank",
    code: "https://github.com/Hussen-shban/Hoobank",
    web: "https://hussen-shban.github.io/Hoobank/",
  },
  {
    img: "/images/social-DhrVlOJh.png",
    name: "SH-social",
    code: "https://github.com/Hussen-shban/SH-social",
    web: "https://hussen-shban.github.io/SH-social/",
  },
];

const cardimg = [
  {
    img: "svg/next.svg"
  },
  {
    img: "svg/react.svg"
  }, {
    img: "svg/tailwind.svg"
  }, {
    img: "svg/sass.svg"
  }, {
    img: "svg/js.svg"
  }, {
    img: "svg/html.svg"
  }, {
    img: "svg/github.svg"
  }, {
    img: "svg/git.svg"
  },
  {
    img: "svg/css.svg"
  },
  {
    img: "svg/bootstrap.svg"
  },
]

const nav =["Home" ,"Journey","Project", "Skills" , ]


export {
  words, expCards, projects ,cardimg ,nav
}



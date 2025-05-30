export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Priorizo la colaboración con los clientes, fomentando una comunicación abierta",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Destaco en la comunicación en inglés. ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "tecnologías con las que trabajo",
    description: "siempre busco mejorar.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Apasionado por la tecnología con un fervor por el desarrollo.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Explorando y aprendiendo sobre microservicios con NEST.js",
    description: "actualmente me encuentro:",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Quieres iniciar un proyecto juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 5,
    title: "Trust People - Página Corporativa",
    des: "Trust People es una página web corporativa diseñada para promover sus servicios y facilitar el contacto con clientes.",
    img: "/trust.png",
    iconLists: ["/webflow.svg", "/javascript.svg"],
    link: "https://www.trustpeople.company/",
  },

  {
    id: 1,
    title: "Clon de Reddit - Red Social",
    des: "con Autenticación, Autorización y Subida de Archivos a AWS S3",
    img: "/p1.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/supabase.svg",
      "/next.svg",
      "/postg.svg",
    ],
    link: "https://reddit-clone-iota-tawny.vercel.app/",
  },
  {
    id: 2,
    title: "Teslo Shop - ECommerce",
    des: "E-Commerce Completo con Subida de Archivos, Autenticación, Autorización, Pagos Reales, Creación de Órdenes y Transacciones Complejas utilizando Prisma Client",
    img: "/p2.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/dock.svg",
      "/cloud.svg",
      "/postg.svg",
    ],
    link: "https://teslo-shop-tan.vercel.app/",
  },
  {
    id: 3,
    title: "PeacePath - Psicologo virtual",
    des: "Psicologo virtual integrado con inteligencia artificial (OpenAi) capaz de recordar conversaciones y generar meditaciones",
    img: "/p3.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/openai.svg",
      "/ts.svg",
      "/postg.svg",
    ],
    link: "https://peacepath.vercel.app/home",
  },
  {
    id: 4,
    title: "Picturify - AI app",
    des: "Picturify es una aplicacion para la generación de imágenes y traducciones usando inteligencia artificial",
    img: "/picturify.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/dock.svg", "/nestjs.svg"],
    link: "https://picturify-rho.vercel.app/home",
  },
  {
    id: 4,
    title: "Zoom Clone",
    des: "Un clone de zoom totalmente funcional y listo para ser utilizado",
    img: "/zoom.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/cloud.svg", "/next.svg"],
    link: "https://zoom-clone-tau-seven.vercel.app/",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ALDRICHCODE45",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/aldrich_code45",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/aldrich-flores-vazquez-446b7b223",
  },
];

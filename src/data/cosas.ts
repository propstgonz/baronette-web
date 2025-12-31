import type { Cosa } from "../types/cosas";

/*
## PLANTILLA DEL MAPEO
  {
    img: "",
    title: "",
    description: "",
    link: "",
  },
*/

export const cosas: Cosa[] = [
    {
    img: "/img/FAQ.svg",
    title: "FAQ",
    description: "Preguntas y respuestas sobre la página",
    link: "/faq",
  },

/*
## Aquí irá la página graciosa que le voy a dedicar a Javier Tebas
  {
    img: "",
    title: "",
    description: "",
    link: "",
  },
*/
  {
    img: "/img/pokedle.png",
    title: "PokéDle",
    description: "Un juego de adivinar pokémons para gente de 300 kg by Patinni (está el 90% del tiempo caída)",
    link: "http://patinni.duckdns.org/",
  },
  {
    img: "/img/trollface.png",
    title: "Mi primera web",
    description: "Tal cual, mi primera web",
    link: "http://localhost:80",
  },
  {
    img: "/img/Baronette.png",
    title: "baronette.es (Primera versión)",
    description: "La primera versión de Baronette.es",
    link: "https://github.com/propstgonz/baronette-webapp-old",
  },
];
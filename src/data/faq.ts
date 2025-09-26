import type { FAQItem } from '../types/faq';

/*

PLANTILLA DEL FAQ:

  {
    question: '',
    answer: ``,
  },

*/
export const faq: FAQItem[] = [
  {
    question: 'Qué es este sitio?',
    answer: `Una página proyecto de <a href="https://propstgonz.baronette.es">Propst<a/> para hacer
    y subir sus gilipolleces, realmente no tiene otro uso lol.`,
  },
  {
    question: 'Por qué creaste esta web?',
    answer: `En verdad, compré el dominio en verano de 2024 para mis testeos gilipollas, al final me lo quedé ya que me permite
    desplegar servicios en mi propia "cloud personal", además de que me gusta el nombre del dominio. Tras eso, decidí darle
    varios usos, y uno de ellos fue probar a hacer un servidor web, y de ahí nació la idea.
    <br><br>Historia completa en la <a href="/">página de inicio<a>.`,
  },
  {
    question: 'Cada cuánto actualizarás el sitio?',
    answer: `Pues igual cada 2 semanas o cada alineación de los astros, dependiendo de la pereza.`,
  },
    {
    question: 'Puedo ya hacerme una cuenta?',
    answer: `Sí, ya te puedes registrar, aunque ahora mismo no te sirve para nada tener cuenta aquí, lol`,
  },
  {
    question: 'Qué planeas agregar en un futuro?',
    answer: `[REDACTED]`,
  },
  {
    question: 'Vas a volver a hacer el chiste de la ip?',
    answer: `Que va, no te preocupes, pero por si te la olvidaste, te recuerdo que tu ip es <span id="client-ip">loading...</span> ;) `,
  },
];

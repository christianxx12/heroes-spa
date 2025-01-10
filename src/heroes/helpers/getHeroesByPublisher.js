/*
Esta función toma un nombre de editorial como argumento,
verifica si es válido y luego devuelve una lista de héroes que pertenecen a esa editorial.
*/

import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" is not valid`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};

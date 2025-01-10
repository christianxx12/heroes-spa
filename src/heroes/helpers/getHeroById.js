/*
Esta función toma un ID como argumento y devuelve el héroe que tiene 
ese ID, o undefined si no se encuentra ningún héroe con ese ID.
*/

import { heroes } from "../data/heroes";

export const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
};

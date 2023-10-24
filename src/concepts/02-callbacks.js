import { heroes } from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbackComponent = element => {
  console.log('callbackComponent');
};

/**
 *
 * @param {String} id
 * @param {Function} callback
 */
const findHero = (id, callback) => {
  const hero = heroes.find(hero => hero.id === id);
  callback(hero);
};

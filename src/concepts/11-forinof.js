/**
 *
 * @param {HTMLDivElement} element
 */
export const forInOfComponent = element => {
  const cursoJS = [
    'Intro a JS',
    'Variables y tipos',
    'conversión de tipos',
    'Funciones',
  ];
  for (let i = 0; i < cursoJS.length; i++) {
    console.log(`${i + 1}. ${cursoJS[i]}`);
  }

  for (const curso of cursoJS) {
    console.log(curso);
  }
};

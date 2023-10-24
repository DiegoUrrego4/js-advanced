/**
 *
 * @param {HTMLDivElement} element
 */
export const environmentsComponents = element => {
  console.log(import.meta.env);
  const html = `
  Dev: ${import.meta.env.DEV}
  Prod: ${import.meta.env.PROD}
  KEY: ${import.meta.env.VITE_API_KEY}
  URL: ${import.meta.env.VITE_BASE_URL}
  `;
  element.innerHTML = html;
};

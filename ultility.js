export const getElementById = (id) =>
  document.getElementById(id) || console.error(`${id} not found`);

export const querySelector = (selector) =>
  document.querySelector(selector) || console.error(`${selector} not found`);

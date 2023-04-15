const decideCase = (word, index) => {
  return index !== 0 ? word.toLowerCase() : word.toUpperCase();
};

export const camelize = (str: string) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, decideCase).replace(/\s+/g, "");
};

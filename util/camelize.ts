const decideCase = (word, index) => {
  return index !== 0 ? word.toLowerCase() : word.toUpperCase();
};

export const camelize = (str: string) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, decideCase).replace(/\s+/g, "");
};

export function toPascalCase(str) {
  const lowerStr = str.toLowerCase();
  const lowerList = lowerStr.split(" ");
  const pascalList = lowerList.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1)
  );
  let pascalString = "";
  pascalList.forEach((word, index) => {
    if (index == 0) {
      pascalString += word;
    } else {
      pascalString += ` ${word}`;
    }
  });

  // Returning string to camelcase
  return pascalString;
}

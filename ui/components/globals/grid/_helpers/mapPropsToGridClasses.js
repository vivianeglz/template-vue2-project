/**
 * Takes an array of props and converts it to valid HTML classes with standard BEM prefixes
 * example : mapPropsToGridClasses(["s6", "m3"], "grid__col");
 * Returns : "grid__col--s6 grid__col--m3"
 *
 * @param {Object} classProps object of props to be converted to valid HTML classes
 * @param {String} className className to prefix to the classes
 * @returns {String}
 */
const mapPropsToGridClasses = (props, className) => {
  if (!props || typeof props !== "object" || Array.isArray(props)) return "";
  const filteredClassProps = Object.keys(props).filter(prop => props[prop] === "");
  const builtClasses = filteredClassProps
    .map(prop => `${className}--${prop}`)
    .join(" ")
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
  return builtClasses;
};

export default mapPropsToGridClasses;

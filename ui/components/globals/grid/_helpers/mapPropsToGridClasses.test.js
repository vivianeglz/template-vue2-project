import mapPropsToGridClasses from "./mapPropsToGridClasses";

test("Should return empty string if props are undefined or incorrect", () => {
  expect(mapPropsToGridClasses()).toBe("");
  expect(mapPropsToGridClasses({})).toBe("");
  expect(mapPropsToGridClasses([])).toBe("");
  expect(mapPropsToGridClasses(false)).toBe("");
});

test("Should return valid html grid classes", () => {
  expect(mapPropsToGridClasses({ s12: "" }, "grid__col")).toBe("grid__col--s12");
  expect(mapPropsToGridClasses({ s12: "", m6: "" }, "grid__col")).toBe("grid__col--s12 grid__col--m6");
});

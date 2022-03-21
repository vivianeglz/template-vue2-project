require("../css/style.scss");
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      date: /Date$/
    }
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  options: {
    storySort: {
      method: "",
      order: ["globals", "segments", "pages"],
      locales: ""
    }
  }
};

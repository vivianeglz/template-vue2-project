const path = require("path");
const { setConfig } = require("storybook-addon-playwright/configs");
const playwright = require("playwright");

const buildPlaywright = async () => {
  let browser = {
    chromium: await playwright["chromium"].launch(),
    firefox: await playwright["firefox"].launch(),
    webkit: await playwright["webkit"].launch()
  };
  setConfig({
    storybookEndpoint: `http://localhost:6006/`,
    getPage: async (browserType, options) => {
      const page = await browser[browserType].newPage(options);
      return page;
    },
    afterScreenshot: async page => {
      await page.close();
    }
  });
};

if (process.env.STORYBOOK_PLATFORM === "local") {
  buildPlaywright();
}

const commonAddons = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/preset-scss",
  "@storybook/addon-a11y",
  "@whitespace/storybook-addon-html"
];

const addons =
  process.env.STORYBOOK_PLATFORM === "local"
    ? [...commonAddons, "@storybook/addon-knobs/dist/register", "storybook-addon-playwright/preset", "storybook-addon-playwright/register"]
    : commonAddons;

module.exports = {
  stories: ["../components/**/*.stories.mdx", "../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons,
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@ui": path.resolve(__dirname, "../"),
      "@common": path.resolve(__dirname, "../../common")
    };
    return config;
  }
};

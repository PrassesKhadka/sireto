import type { StorybookConfig } from "@storybook/nextjs";

// const path = require("path");
const config: StorybookConfig = {
  // resolving storybook and typescript path error
  // not needed -> tsconfig.js added baseUrl:"." and it worked
  // webpackFinal: async (config, { configType }) => {
  //   // @ts-ignore
  //   config.resolve.modules.push(path.resolve("@/", "./"));
  //   return config;
  // },
  // staticDirs: ["./public/images"],
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {},
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;

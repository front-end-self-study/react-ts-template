import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { lingui } from "@lingui/vite-plugin";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["macros"],
      },
    }),
    lingui(),
  ],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/assets/css/mixin.less";',
        javascriptEnabled: true,
        modifyVars: {
          "@primary-color": "#034078",
          "@link-color": "#034078",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@img": fileURLToPath(new URL("./src/assets/img", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

import { defineConfig } from "vite";

export default defineConfig({
  root: "./src", //ระบุ root ที่เก็บไฟล์
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "./src/main.html",
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});

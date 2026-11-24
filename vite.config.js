import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// "base" must match your GitHub repository name.
// Live URL will be: https://adhishri123.github.io/adhishri-portfolio/
export default defineConfig({
  base: "/adhishri-portfolio/",
  plugins: [react()],
});

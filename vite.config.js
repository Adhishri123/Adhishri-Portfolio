import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// On GitHub Actions, the repo name is read automatically (so upper/lower case always matches).
// Locally, base is "/" so `npm run dev` opens at http://localhost:5173/
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserSite = repo?.toLowerCase().endsWith(".github.io");

export default defineConfig({
  base: repo && !isUserSite ? `/${repo}/` : "/",
  plugins: [react()],
});

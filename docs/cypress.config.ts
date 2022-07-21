import { defineConfig } from "cypress";

export default defineConfig({
  userAgent: "mocked-user-agent",
  video: false,

  e2e: {
    baseUrl: "http://localhost:3000/",
  },
});

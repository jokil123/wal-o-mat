import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [sveltekit()],
    test: {
        globals: true,
        include: ["src/**/*.{test,spec}.{js,ts}"], // Test file pattern
        coverage: {
            reporter: ["text", "html"], // Coverage reports
        },
    },
});

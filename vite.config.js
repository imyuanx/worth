import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssPresetEnv from "postcss-preset-env";

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        postcss: {
            plugins: [
                postcssPresetEnv({
                    autoprefixer: { grid: true },
                }),
            ],
        },
    },
    plugins: [react()],
    server: {
        open: true,
        host: "0.0.0.0",
        port: 5174,
    },
});

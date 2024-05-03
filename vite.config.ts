import webExtension from "@samrum/vite-plugin-web-extension";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { getManifest } from "./src/manifest";

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		plugins: [
			react(),
			webExtension({
				manifest: getManifest(),
			}),
		],
		resolve: {
			alias: {
				"~": path.resolve(__dirname, "./src"),
				"@": path.resolve(__dirname, "./src"),
			},
		},
	};
});

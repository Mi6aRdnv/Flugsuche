import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
	server: {
		proxy: {
			// "/api": "http://localhost:8080", // Uncomment this line if you want to proxy API requests to a backend server
		},
	},
	plugins: [react(), svgr()],
});

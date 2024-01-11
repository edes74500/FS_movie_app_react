import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "~/src", // Utilisez des chemins relatifs plutôt que des chemins absolus
      assets: "~/src/assets", // Utilisez des chemins relatifs plutôt que des chemins absolus
    },
  },
  server: {
    host: "0.0.0.0", // Écoute sur toutes les adresses IPv4 de la machine locale.
    // Vous pouvez ajouter d'autres configurations de serveur ici, comme le proxy ou les options HMR
    // Exemple de configuration HMR
    hmr: {
      overlay: false,
    },
    // Exemple de configuration de proxy
    // proxy: {
    //   '/api': 'http://localhost:5000',
    // },
  },
});

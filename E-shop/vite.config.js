import { defineConfig } from 'vite';
import {resolve} from "path"

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),  // Your main HTML file
        second: resolve(__dirname,"addToCart.html"),  // Path to your second HTML file
        third : resolve(__dirname, "Contact.html")
      }
    }
  }
});

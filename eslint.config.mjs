// eslint.config.js (FINAL VERSION)
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    
    // Ignore minified files and test folder
    ignores: [
      "assets/js/*.min.js", 
      "**/__test__/"
    ],
    
    plugins: { js }, 
    extends: ["js/recommended"], 
    
    languageOptions: { 
      // Define all necessary environments/globals for all your scripts
      globals: {
        ...globals.browser, // Includes window, document, setTimeout, etc. (for critiqueEffect.js)
        $: "readonly",      // jQuery global (for util.js, main.js)
        jQuery: "readonly", // jQuery global (for util.js, main.js)
        breakpoints: "readonly" // Global provided by one of your min.js files
      } 
    },
    
    rules: {
        // Fixes any "Invalid typeof comparison value" errors
        "valid-typeof": "error", 
        "no-undef": "error"
    }
  },
]);
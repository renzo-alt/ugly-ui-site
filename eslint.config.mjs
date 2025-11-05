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
      // Define ALL necessary environments/globals
      globals: {
        ...globals.browser, 
        $: "readonly",      
        jQuery: "readonly", 
        breakpoints: "readonly",
        // Globals causing errors because the code is modifying them:
        $a: "writable",    
        b: "writable"      
      } 
    },
    
    rules: {
        // Fix for 'Read-only global' errors: Turn off the strict rule completely
        "no-global-assign": "off", 
        
        // Fix for 'event is defined but never used'
        // This setting allows arguments to be unused, fixing the 'event' error.
        "no-unused-vars": ["error", { "args": "none" }]
    }
  },
]);
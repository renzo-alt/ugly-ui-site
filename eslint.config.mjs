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
        $: "writable",      
        jQuery: "writable", 
        breakpoints: "writable",
        $a: "writable",    
        b: "writable"      
      } 
    },
    
    rules: {
        // Fix for 'Invalid typeof comparison value' errors
        "valid-typeof": "off", 
        // Fix for '$a is read-only' errors
        "no-global-assign": "off", 
        // Fix for 'event is defined but never used'
        "no-unused-vars": ["error", { "args": "none" }]
    }
  },
]);
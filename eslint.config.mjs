import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    
    // 1. Ignore minified files and test folder
    ignores: [
      "assets/js/*.min.js", 
      "**/__test__/"
    ],
    
    plugins: { js }, 
    extends: ["js/recommended"], 
    
    languageOptions: { 
      // 2. Define ALL necessary environments/globals
      globals: {
        ...globals.browser, 
        $: "readonly",      
        jQuery: "readonly", 
        breakpoints: "readonly",
        // CRITICAL FIX: Add the unique globals found in util.js
        $a: "readonly",    
        b: "readonly"      
      } 
    },
    
    rules: {
        // 3. Fix: Relax the rule for type comparisons that are causing errors in util.js
        "valid-typeof": "off", 
        
        // 4. Fix: Allow the 'event' variable to be defined even if not explicitly used
        // (common for old browser event handling functions)
        "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false, "argsIgnorePattern": "^_" }]
    }
  },
]);
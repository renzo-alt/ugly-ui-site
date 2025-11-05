// jest.config.js

module.exports = {
    // 1. Use the JSDOM environment to simulate a browser/DOM for jQuery
    testEnvironment: 'jsdom',
    
    // 2. Run this file after the test environment is set up
    setupFilesAfterEnv: ['./jest.setup.js'], 
    
    // 3. Mocks non-JS assets like CSS imports to prevent errors
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    },
    
    // 4. This pattern allows Jest to find your test file in assets/js/__test__/
    testMatch: [
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ]
};
// jest.config.js (FINAL FIX)
module.exports = {
    // FIX: Set testEnvironment to the required module path for jsdom
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./jest.setup.js'], 
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    },
    testMatch: [
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ]
};
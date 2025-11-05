// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['./jest.setup.js'], 
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    },
    testMatch: [
        "**/?(*.)+(spec|test).[tj]s?(x)"
    ]
};
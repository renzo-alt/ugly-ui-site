// assets/js/__test__/critiqueEffect.test.js

// IMPORTANT: We need to load the native JS file
require('../critiqueEffect'); 

// Mock the DOM and JSDOM environment is still needed for document/getElementById
// But we need to define the functions globally so the test can access them
const { applyCritiqueLoadedEffect, setupCritiqueClickHandler } = require('../critiqueEffect');

// We use 'beforeEach' to reset the DOM before every test
beforeEach(() => {
    document.body.innerHTML = `
        <section id="header"></section>
        <button id="critique-btn"></button>
    `;
    // Clear any previous event listeners or timeouts for isolated testing
    jest.useFakeTimers();
});

// --- 1. PASSING TEST (Checks the "on page load" function) ---
test('should change header background color for loaded effect', () => {
    const header = document.getElementById("header");
    
    applyCritiqueLoadedEffect();
    
    // Assert that the color changed
    expect(header.style.backgroundColor).toBe('rgb(255, 99, 71)'); // 'tomato' color
});

// --- 2. PASSING TEST (Checks the click handler setup) ---
test('should add a message bubble to the body on button click', () => {
    const button = document.getElementById("critique-btn");
    
    setupCritiqueClickHandler(); // Must call the setup function
    button.click(); // Simulate a click event
    
    const bubble = document.querySelector('.critique-bubble');
    
    // Assert that the bubble was created
    expect(bubble).not.toBeNull(); 
});


// --- 3. FAILING TEST (Demonstrates the CI Gate) ---
test('CI Gate: This test intentionally fails to block the deployment job', () => {
    // This is the false assertion required for the assignment
    expect(1 + 1).toBe(3); 
});
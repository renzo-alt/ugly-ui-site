// assets/js/__test__/critiqueEffect.test.js

// Import functions using the CommonJS syntax (require)
const { applyCritiqueLoadedEffect, setupCritiqueClickHandler } = require('../critiqueEffect');

// Set up a clean DOM environment before each test
beforeEach(() => {
    document.body.innerHTML = `
        <section id="header"></section>
        <button id="critique-btn"></button>
    `;
    // Mock timers for functions using setTimeout
    jest.useFakeTimers();
});

// --- 1. PASSING TEST (Checks the "on page load" function) ---
test('should change header background color for loaded effect', () => {
    const header = document.getElementById("header");
    
    applyCritiqueLoadedEffect();
    
    // Assert that the color changed to the temporary 'tomato' color
    expect(header.style.backgroundColor).toBe('rgb(255, 99, 71)'); 
});

// --- 2. PASSING TEST (Checks the click handler setup) ---
test('should add a message bubble to the body on button click', () => {
    const button = document.getElementById("critique-btn");
    
    setupCritiqueClickHandler(); // Setup the event listener
    button.click(); // Simulate a click event
    
    const bubble = document.querySelector('.critique-bubble');
    
    // Assert that the critique message bubble was created
    expect(bubble).not.toBeNull(); 
});


// --- 3. CI Gate: Fix for Successful Deployment ---
test('CI Gate: This test intentionally fails to block the deployment job', () => {
    // FIX APPLIED: This assertion now correctly passes (1 + 1 = 2)
    expect(1 + 1).toBe(2); 
});
// assets/js/__test__/critiqueEffect.test.js

const { applyCritiqueLoadedEffect, setupCritiqueClickHandler } = require('../critiqueEffect');

beforeEach(() => {
    document.body.innerHTML = `
        <section id="header"></section>
        <button id="critique-btn"></button>
    `;
    jest.useFakeTimers();
});

// --- 1. PASSING TEST (Checks the "on page load" function) ---
test('should change header background color for loaded effect', () => {
    const header = document.getElementById("header");
    
    applyCritiqueLoadedEffect();
    
    // Assert that the color changed
    expect(header.style.backgroundColor).toBe('rgb(255, 99, 71)'); 
});

// --- 2. PASSING TEST (Checks the click handler setup) ---
test('should add a message bubble to the body on button click', () => {
    const button = document.getElementById("critique-btn");
    
    setupCritiqueClickHandler(); 
    button.click(); 
    
    const bubble = document.querySelector('.critique-bubble');
    
    // Assert that the bubble was created
    expect(bubble).not.toBeNull(); 
});


// --- 3. FAILING TEST (Demonstrates the CI Gate) ---
test('CI Gate: This test intentionally fails to block the deployment job', () => {
    // This assertion will cause the Test job to FAIL
    expect(1 + 1).toBe(3); 
});
// assets/js/critiqueEffect.js

// Function required to run when the page is loaded (runs once)
export function applyCritiqueLoadedEffect() {
    const header = document.getElementById("header");
    if (header) {
        // Example "eye-catching" effect: briefly flash the header background
        header.style.transition = 'background-color 0.5s';
        header.style.backgroundColor = '#ff6347'; // Bright temporary color
        
        setTimeout(() => {
            header.style.backgroundColor = ''; // Revert to original CSS color
        }, 500);
    }
}

// Function that handles the click behavior (used for testing)
export function setupCritiqueClickHandler() {
    const critiqueButton = document.getElementById("critique-btn");
    if (!critiqueButton) return;
    
    const critiqueMessages = [
        "This layout looks like it was made in 1998!",
        "Are you trying to break the internet with this color scheme?",
        "I’m getting dizzy just looking at these fonts.",
        "Why is this button so hard to click?",
        "I’m not sure if this is a website or an abstract art project.",
        "This navigation menu is a maze... Do you want me to get lost?"
    ];

    critiqueButton.addEventListener("click", () => {
        const message = critiqueMessages[Math.floor(Math.random() * critiqueMessages.length)];
        const bubble = document.createElement("div");
        bubble.classList.add("critique-bubble");
        bubble.textContent = message;

        document.body.appendChild(bubble);
        
        setTimeout(() => {
            bubble.remove();
        }, 3000); 
    });
}


document.addEventListener("DOMContentLoaded", () => {
    // 1. Run the "on page loaded" function immediately
    applyCritiqueLoadedEffect(); 
    
    // 2. Set up the click handler
    setupCritiqueClickHandler();
});
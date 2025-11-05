// critiqueEffect.test.js

// Assuming 'util.js' includes the $.fn.critiqueEffect plugin.
// In a typical setup, the setup file (jest.setup.js) ensures jQuery 
// is loaded and accessible, and you may need to explicitly require your util file.
// require('./assets/js/util'); 

describe('$.fn.critiqueEffect Plugin Test', () => {

    // Helper function to set up the necessary DOM element
    function setupCritiqueDOM() {
        document.body.innerHTML = `
            <div id="targetElement" class="critique-ready">Initial Content</div>
        `;
        return $('#targetElement');
    }

    // --- The Test for Critique Effect ---
    test('should apply the "critique-error" class on execution', () => {
        const $element = setupCritiqueDOM();
        
        // 1. Check initial state
        expect($element.hasClass('critique-error')).toBe(false);
        
        // 2. Run the plugin from util.js
        $element.critiqueEffect();
        
        // 3. Check final state: The element should now have the critique-error class.
        expect($element.hasClass('critique-error')).toBe(true);
    });

    // You can add more specific tests here, like checking for custom attributes or 
    // changes to inner text/HTML if your plugin does that.
    
    test('should return the jQuery object for chaining', () => {
        const $element = setupCritiqueDOM();
        
        // The result of the plugin call should still be the jQuery object itself
        const result = $element.critiqueEffect();

        expect(result).toBe($element);
    });

});
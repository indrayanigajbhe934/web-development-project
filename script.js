
/* BrightSpace JavaScript */

// Get Started button
const startButton = document.querySelector(".hero-btn");

// Button click action
if (startButton) {
    startButton.addEventListener("click", function(event) {
        event.preventDefault();

        alert("Welcome to BrightSpace! Let's get started.");
    });
}

// Navbar links hover message in console
console.log("Welcome to BrightSpace website!");


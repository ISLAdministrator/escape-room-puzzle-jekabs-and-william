// 1. Element Selectors
const mainBg = document.getElementById("main-bg");
const howToButton = document.getElementById("key-button");
const nextButton = document.getElementById("next-button");
const victoryButton = document.getElementById("victory-btn");
const userInput = document.getElementById("user-input");
const output = document.getElementById("output");

// 2. Transition: Intro -> How to Play
howToButton.addEventListener("click", function () {
  mainBg.src = "4how to play background.jpg"; 
  howToButton.style.display = "none"; 
  nextButton.style.display = "block";
});

// 3. Transition: How to Play -> Solving the Code
nextButton.addEventListener("click", function () {
  mainBg.src = "6solving the code background.jpg"; 
  nextButton.style.display = "none"; 
  userInput.style.display = "block";
  userInput.focus(); // Places the cursor in the box automatically
});

// 4. Input Logic: Checking the Code
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    // Clean input: lowercase, no spaces, no special characters
    let cleanInput = userInput.value
      .toLowerCase()
      .replace(/[^a-z0-9]/g, ""); 

    if (cleanInput === "romeoandjuliet") {
      // SUCCESS: Go to Victory Screen
      mainBg.src = "7victory.jpg"; 
      userInput.style.display = "none"; 
      output.innerText = ""; // Clear error messages
      victoryButton.style.display = "block"; // Show final button
    } else {
      // FAIL: Show error message
      output.innerText = "Wrong code. Try again!";
      output.style.color = "#ff0000";
      userInput.value = ""; // Clear box for retry
    }
  }
});

// 5. Final Button: Redirect to ISL
victoryButton.addEventListener("click", function() {
  window.location.href = "https://isladministrator.github.io/escape-room-puzzle-elias-stan/"; 
});
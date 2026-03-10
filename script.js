const playButton = document.getElementById("key-button");
const nextButton = document.getElementById("next-button");
const mainBg = document.getElementById("main-bg");
const userInput = document.getElementById("user-input");

// Stage 1: Transition to 'How to Play'
playButton.addEventListener("click", function () {
  mainBg.src = "4how to play background.jpg";
  playButton.style.display = "none";
  nextButton.style.display = "block";
});

// Stage 2: Transition to 'Solving the Code'
nextButton.addEventListener("click", function () {
  mainBg.src = "6solving the code background.jpg";
  nextButton.style.display = "none";
  
  // Reveal the text box when the 3rd background appears
  userInput.style.display = "block";
  userInput.focus();
});

// Stage 3: Capture and Check the Input
userInput.addEventListener("keydown", function (event) {
  // Check if the user pressed the 'Enter' key
  if (event.key === "Enter") {
    // 1. Convert to lowercase
    // 2. Remove all spaces using a Regular Expression (/\s+/g)
    const cleanInput = userInput.value.toLowerCase().replace(/\s+/g, '');

    if (cleanInput === "romeoandjuliet") {
      // Logic for when they get it right
      mainBg.src = "7victory.jpg"; // Replace with your final winning image
      userInput.style.display = "none"; 
      alert("Success! You escaped!");
    } else {
      // Feedback for wrong answer
      alert("The code is incorrect. Try again!");
      userInput.value = ""; // Clear the box for them
    }
  }
});
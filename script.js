// 1. Select the button and the main background image
// Make sure the ID in getElementById matches what is in your HTML!
const playButton = document.getElementById("key-button");
const mainBg = document.getElementById("main-bg");

playButton.addEventListener("click", function () {
  // 3. Change the background image to your new file
  // Replace "2how to play button.jpg" with your actual filename later
  mainBg.src = "4how to play background.jpg"; 

  // 4. Make the button disappear
  playButton.style.display = "none"; 
});
<<<<<<< HEAD
const mainBg = document.getElementById("main-bg");
const howToBtn = document.getElementById("how-to-btn");
const container = document.getElementById("your-room-container");

howToBtn.addEventListener("click", function() {
  // 1. Hide the entire container (this removes the old image and button)
  container.style.display = "none";
  
  // 2. Set the new image as the FULL SCREEN background of the body
  document.body.style.backgroundImage = "url('1introduction background.jpg')";
  
  // 3. Ensure the background covers everything
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
=======
// 1. Select the button and the main background image
// Make sure the ID in getElementById matches what is in your HTML!
const playButton = document.getElementById("key-button");
const mainBg = document.getElementById("main-bg");

// 2. Add the click listener
playButton.addEventListener("click", function () {
  // 3. Change the background image to your new file
  // Replace "2how to play button.jpg" with your actual filename later
  mainBg.src = "4how to play background.jpg"; 

  // 4. Make the button disappear
  playButton.style.display = "none"; 
>>>>>>> 1b14560 (Made background to full screen)
});
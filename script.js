const playButton = document.getElementById("key-button");
const mainBg = document.getElementById("main-bg");
const nextRoomLink = document.getElementById("next-room-link");

playButton.addEventListener("click", function () {
  // 1. Change the background image to your final screen
  mainBg.src = "victory.jpg"; 

  // 2. Make the first button disappear
  playButton.style.display = "none"; 

  // 3. Make the new link/button appear
  nextRoomLink.style.display = "block";
});
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
});
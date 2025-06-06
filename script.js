console.log("Happy Eid from Ibrahim! 🌙✨");

document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("playButton");
  const music = document.getElementById("eidMusic");

  playButton.addEventListener("click", () => {
    music.play();
    playButton.textContent = "Music Playing 🎶";
    playButton.disabled = true;
  });
});

function showSurprise() {
  document.getElementById("flower").style.display = "block";
  document.getElementById("message").style.display = "block";

  const audio = document.getElementById("bgmusic");
  audio.style.display = "block";
  audio.play();
}

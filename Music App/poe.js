var audio = document.getElementById("myAudio");
const playIcon = document.getElementById('play-icon');
const backwardButton = document.getElementById('backward-button');
const forwardButton = document.getElementById('forward-button');
var isPlaying = false;
const timeBar = document.getElementById("timeBar");
const timeBarContainer = document.getElementById("timeBarContainer");
const timer = document.getElementById("timer");
const durationSlider = document.getElementById("duration_slider");

let currentSongIndex = 0;



function toggleAudio() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
  
  } else {
    audio.play();
    isPlaying = true;
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
  }
} 


backwardButton.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
  audio.src = tracks[currentTrackIndex];
  if (isPlaying) {
    audio.play();
  }
});

forwardButton.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  audio.src = tracks[currentTrackIndex];
  if (isPlaying) {
    audio.play();
  }
});

audio.addEventListener("timeupdate", updateProgressBar);

function updateProgressBar() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  const progress = (currentTime / duration) * 100;

  timeBar.style.width = `${progress}%`;
  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = Math.floor(currentTime % 60);
  const durationMinutes = Math.floor(duration / 60);
  const durationSeconds = Math.floor(duration % 60);

  timer.textContent = `${formatTime(currentMinutes)}:${formatTime(currentSeconds)} / ${formatTime(durationMinutes)}:${formatTime(durationSeconds)}`;
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

timeBarContainer.addEventListener("click", seek);

function seek(event) {
  const clickX = event.clientX - timeBarContainer.offsetLeft;
  const containerWidth = timeBarContainer.offsetWidth;
  const seekTime = (clickX / containerWidth) * audio.duration;

  audio.currentTime = seekTime;
}





forwardButton.addEventListener("click", navigateToNextPage);

function navigateToNextPage() {
  window.location.href = "music2.html"; // Replace with your target page's URL
}

backwardButton.addEventListener("click", navigateTobreviousPage);

function navigateTobreviousPage() {
  window.location.href = "music1.html"; // Replace with your target page's URL
}












const songs = [
  {
    title: "First Song",
    artist: "First Artist",
    src: "songs/song1.mp3",
    cover: "images/cover1.jpg"
  },
  {
    title: "Second Song",
    artist: "Second Artist",
    src: "songs/song2.mp3",
    cover: "images/cover2.jpg"
  }
];

let currentSong = 0;
let isPlaying = false;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");

function loadSong(index) {
  const song = songs[index];
  title.innerText = song.title;
  artist.innerText = song.artist;
  cover.src = song.cover;
  audio.src = song.src;
}

function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.innerText = "⏸️";
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.innerText = "▶️";
}

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
  playSong();
});

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
  playSong();
});

audio.addEventListener("timeupdate", () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${progressPercent}%`;
});

// Initial load
loadSong(currentSong);

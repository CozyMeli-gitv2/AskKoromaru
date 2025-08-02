const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const log = document.getElementById("chat-log");

const barkSounds = [
  "sounds/bark1.mp3",
  "sounds/bark2.mp3",
  "sounds/bark3.mp3"
];

function playBark() {
  const barkFile = barkSounds[Math.floor(Math.random() * barkSounds.length)];
  const audio = new Audio(barkFile);
  audio.play();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text === "") return;

  const msg = document.createElement("div");
  msg.className = "message user";
  msg.textContent = text;
  log.appendChild(msg);
  log.scrollTop = log.scrollHeight;

  input.value = "";
  setTimeout(() => {
    playBark();
  }, 500);
});


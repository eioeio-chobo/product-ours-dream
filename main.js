const emojiContainer = document.getElementById("emoji-container");
const generateButton = document.getElementById("generate-button");

const emojis = [
  "😀", "😁", "😂", "😃", "😄", "😅", "😆", "😉",
  "😊", "😋", "😌", "😍", "😎", "😏", "😒", "😓",
  "😔", "😕", "😖", "😘", "😚", "😜", "😝", "😞",
  "😠", "😡", "😢", "😣", "😤", "😥", "😨", "😩",
  "😪", "😫", "😭", "😰", "😱", "😲", "😳", "😵",
  "😷", "🙁", "🙂", "🙃", "🙄", "🎉", "🎊", "🎁",
  "🎂", "✨", "🚀", "🌈", "🍀", "🌟", "🔥", "💫"
];

function generateRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  emojiContainer.textContent = emojis[randomIndex];
  emojiContainer.classList.remove("pop");
  requestAnimationFrame(() => {
    emojiContainer.classList.add("pop");
  });
}

generateButton.addEventListener("click", generateRandomEmoji);

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.code === "Enter") {
    event.preventDefault();
    generateRandomEmoji();
  }
});

generateRandomEmoji();

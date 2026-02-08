// 1️⃣ Auto typing quote
const quoteText = `Happy Valentine’s Day! I love you even more than I love watching TV Series 😉.
Thanks for putting up with me and for being the best part of my day, every single day.
Let's eat way too much chocolate tonight 😉🤫🥵❤😘`;

let q = 0;
const quoteTarget = document.getElementById("typingQuote");

function typeQuote() {
  if (q < quoteText.length) {
    const char = quoteText.charAt(q);
    quoteTarget.innerHTML += char;
    q++;

    let delay = 50;
    if ("😉🤫🥵❤😘".includes(char)) delay = 250;

    setTimeout(typeQuote, delay);
  }
}

typeQuote();


// 4️⃣ YES click → clear → confetti + final message
document.getElementById("yesBtn").addEventListener("click", () => {
  document.getElementById("mainContent").style.display = "none";

  const target = document.getElementById("finalMessage");
  target.innerHTML = "";

  // Play romantic sound
  const sound = document.getElementById("loveSound");
  sound.currentTime = 0;
  sound.volume = 0.6;
  sound.play();

  startConfetti();
  startHearts();

  const finalText = `You just made me the happiest husband 💖
I love you My Wify කෙල්ල ❤️`;

  let i = 0;

  function typeFinal() {
    if (i < finalText.length) {
      const char = finalText.charAt(i);
      target.innerHTML += char;
      i++;

      let delay = 70;
      if ("💖❤️💓".includes(char)) delay = 350;

      setTimeout(typeFinal, delay);
    }
  }

  typeFinal();
});


// 🎉 Confetti (simple)
function startConfetti() {
  for (let i = 0; i < 80; i++) {
    const conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 5000);
  }
}

// 💕 Floating hearts
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animation = "floatUp 4s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 400);
}

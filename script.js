const correctPassword = "0121";

// Unlock button only
document.getElementById("unlockBtn").addEventListener("click", function () {
  const input = document.getElementById("passwordInput").value.trim();
  if (input === correctPassword) {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    typeQuote();
  } else {
    document.getElementById("errorMsg").innerText = "Wrong password 😝";
  }
});

// Typing quote
const quoteText = `Happy Valentine’s Day! I love you even more than I love watching TV series 😉.
Thanks for putting up with me and for being the best part of my day,
every single day. LET'S EAT WAY TOO MUCH CHOCOLATE TONIGHT 😉🤫🥵❤️😘`;

let q = 0;
function typeQuote() {
  if (q < quoteText.length) {
    const quoteEl = document.getElementById("typingQuote");
    quoteEl.innerHTML += quoteText.charAt(q);
    q++;
    // Always scroll quote into view
    quoteEl.scrollIntoView({ behavior: "smooth", block: "end" });
    setTimeout(typeQuote, 50);
  } else {
    showPhotos();
  }
}

// Show photos one by one with smooth scroll
const photos = document.querySelectorAll(".photo");
let p = 0;

function showPhotos() {
  if (p < photos.length) {
    photos[p].style.display = "block";
    photos[p].scrollIntoView({ behavior: "smooth", block: "center" });
    p++;
    setTimeout(showPhotos, 800);
  } else {
    document.getElementById("proposal").classList.remove("hidden");
    document.getElementById("proposal").scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

// NO button runaway
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", function () {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
});

// YES button click
document.getElementById("yesBtn").addEventListener("click", function () {
  document.getElementById("mainContent").style.display = "none";
  startConfetti();
  startHearts();

  const finalText = "You just made me the happiest husband 💖 — I love you my wify කෙල්ල ❤️";
  let i = 0;
  const target = document.getElementById("finalMessage");

  function typeFinal() {
    if (i < finalText.length) {
      target.innerHTML += finalText.charAt(i);
      i++;
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(typeFinal, 70);
    }
  }
  typeFinal();
});

// Confetti function using requestAnimationFrame for proper mobile
function startConfetti() {
  const confettis = [];
  const colors = ["#ff4d6d", "#fff", "#ffb3c1"];

  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = confetti.style.height = (Math.random() * 8 + 6) + "px";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = -20 + "px";
    confetti.style.opacity = 1;
    document.body.appendChild(confetti);

    confettis.push({
      el: confetti,
      x: parseFloat(confetti.style.left),
      y: -20,
      speedY: Math.random() * 3 + 2,
      speedX: (Math.random() - 0.5) * 2,
    });
  }

  function animateConfetti() {
    confettis.forEach(c => {
      c.y += c.speedY;
      c.x += c.speedX;
      c.el.style.top = c.y + "px";
      c.el.style.left = c.x + "px";
      if (c.y > window.innerHeight) {
        c.el.remove();
      }
    });
    if (confettis.some(c => c.y < window.innerHeight)) {
      requestAnimationFrame(animateConfetti);
    }
  }
  animateConfetti();
}

// Hearts animation
function startHearts() {
  const heartInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    document.body.appendChild(heart);

    // Animate using CSS float
    setTimeout(() => heart.remove(), 6000);
  }, 400);
}

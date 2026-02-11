const correctPassword = "0121";

// Only unlock by button
document.getElementById("unlockBtn").addEventListener("click", function() {
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
    document.getElementById("typingQuote").innerHTML += quoteText.charAt(q);
    q++;
    setTimeout(typeQuote, 50);
  } else {
    showPhotos();
  }
}

// Show photos with proper scroll
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
  }
}

// NO button runaway
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", function() {
  noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
});

// YES button click
document.getElementById("yesBtn").addEventListener("click", function() {
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
      setTimeout(typeFinal, 70);
    }
  }
  typeFinal();
});

// Confetti
function startConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = ["#ff4d6d", "#fff", "#ffb3c1"][Math.floor(Math.random() * 3)];
    confetti.style.width = confetti.style.height = (Math.random() * 10 + 5) + "px";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}

// Hearts
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 400);
}

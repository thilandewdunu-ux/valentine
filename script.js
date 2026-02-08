// 1️⃣ Auto typing quote
const quoteText = "Happy Valentine’s Day! I love you even more than I love Watching TV Series 😉. Thanks for putting up with me and for being the best part of my day, every single day. Let's eat way too much chocolate tonight 😉🤫🥵❤😘";
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
typeQuote();

// 2️⃣ Show photos one by one
const photos = document.querySelectorAll(".photo");
let p = 0;

function showPhotos() {
  if (p < photos.length) {
    photos[p].style.display = "block";
    p++;
    setTimeout(showPhotos, 800);
  }
}

// 3️⃣ NO button runaway
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
});

// 4️⃣ YES click → clear screen → final message
document.getElementById("yesBtn").addEventListener("click", () => {
  document.getElementById("mainContent").style.display = "none";

  const finalText = "You just made me the happiest husband 💖 — I love you Hasintha ❤️";
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

// Floating hearts
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 400);

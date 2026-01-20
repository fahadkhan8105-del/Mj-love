document.addEventListener("DOMContentLoaded", () => {
  const CORRECT_PASSCODE = "24-01-2006"; // 🔑 change if you want

  const lockScreen = document.getElementById("lockScreen");
  const passcode = document.getElementById("passcode");
  const unlockBtn = document.getElementById("unlockBtn");
  const lockError = document.getElementById("lockError");

  const tapScreen = document.getElementById("tapScreen");
  const main = document.getElementById("main");
  const typing = document.getElementById("typing");
  const gift = document.getElementById("giftBox");
  const photoBox = document.getElementById("photoBox");
  const lines = document.querySelectorAll("#letter p");

  const text = "Happy Birthday, My Love 🤍";
  let index = 0;

  /* 🔒 Unlock */
  unlockBtn.addEventListener("click", () => {
    if (passcode.value === CORRECT_PASSCODE) {
      lockScreen.style.display = "none";
      tapScreen.classList.remove("hidden");
    } else {
      lockError.style.display = "block";
    }
  });

  /* Tap to begin */
  tapScreen.addEventListener("click", () => {
    tapScreen.style.display = "none";
    main.style.display = "block";
    typeText();
  });

  function typeText() {
    if (index < text.length) {
      typing.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 130);
    } else {
      gift.style.display = "block";
    }
  }

  /* 🎁 Gift click */
  gift.addEventListener("click", () => {
    gift.style.display = "none";
    photoBox.style.display = "block";

    setTimeout(() => {
      revealParagraph();
    }, 2000);
  });

  function revealParagraph() {
    lines.forEach((line, i) => {
      setTimeout(() => {
        line.classList.add("show");
      }, i * 1600);
    });
  }

  /* Subtle hearts */
  const hearts = document.querySelector(".hearts");
  setInterval(() => {
    const heart = document.createElement("span");
    heart.textContent = "🤍";
    heart.style.left = Math.random() * 100 + "vw";
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 12000);
  }, 800);
});

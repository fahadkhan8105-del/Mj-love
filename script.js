document.addEventListener("DOMContentLoaded", () => {
  const tap = document.getElementById("tapScreen");
  const main = document.getElementById("main");
  const typing = document.getElementById("typing");
  const music = document.getElementById("music");
  const gift = document.getElementById("giftBox");
  const lines = document.querySelectorAll("#letter p");

  const chime = new Audio("chime.mp3");

  const text = "Happy Birthday, My Love 🤍";
  let index = 0;

  tap.addEventListener("click", () => {
    tap.style.display = "none";
    main.style.display = "block";
    music.volume = 0;
    music.play();
    fadeInMusic();
    typeText();
  });

  function fadeInMusic() {
    const fade = setInterval(() => {
      if (music.volume < 0.6) music.volume += 0.02;
      else clearInterval(fade);
    }, 150);
  }

  function typeText() {
    if (index < text.length) {
      typing.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 130);
    } else {
      gift.style.display = "block";
    }
  }

  gift.addEventListener("click", () => {
    gift.textContent = "🤍";
    gift.style.animation = "none";
    setTimeout(() => {
      gift.style.display = "none";
      revealParagraph();
    }, 600);
  });

  function revealParagraph() {
    lines.forEach((line, i) => {
      setTimeout(() => {
        line.classList.add("show");
      }, i * 1700);
    });

    const total = lines.length * 1700 + 800;
    setTimeout(startFinale, total);
  }

  function startFinale() {
    chime.volume = 0.6;
    chime.play();
    startFireworks();
    setTimeout(fadeOutMusic, 3500);
  }

  function fadeOutMusic() {
    const fade = setInterval(() => {
      if (music.volume > 0.02) music.volume -= 0.02;
      else {
        music.pause();
        clearInterval(fade);
      }
    }, 200);
  }

  function startFireworks() {
    let count = 0;
    const interval = setInterval(() => {
      createFirework();
      count++;
      if (count > 10) clearInterval(interval);
    }, 450);
  }

  function createFirework() {
    const fw = document.createElement("div");
    fw.className = "firework";
    fw.style.left = Math.random() * 100 + "vw";
    fw.style.top = Math.random() * 60 + 20 + "vh";
    fw.style.background = randomColor();
    document.body.appendChild(fw);
    setTimeout(() => fw.remove(), 1200);
  }

  function randomColor() {
    const colors = ["#e6d8a8", "#fff2c2", "#d6c79a"];
    return colors[Math.floor(Math.random() * colors.length)];
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
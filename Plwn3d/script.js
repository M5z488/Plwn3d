document.addEventListener("DOMContentLoaded", function () {

  const logo = document.getElementById("logo");
  const button = document.getElementById("enterBtn");
  const joinBtn = document.getElementById("joinBtn");

  function playClickSound(freq = 800) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.type = "square";
    oscillator.frequency.value = freq;
    gainNode.gain.value = 0.08;

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.05);
  }

  logo.addEventListener("click", () => {
    playClickSound(900);
    logo.classList.add("glitch");

    setTimeout(() => {
      logo.classList.remove("glitch");
    }, 300);
  });

  button.addEventListener("click", () => {
    playClickSound(600);
    button.innerText = "Redirecionando...";
    setTimeout(() => {
      window.location.href = "https://discord.gg/VsMZCYyuw4";
    }, 800);
  });

  joinBtn.addEventListener("click", () => {
    playClickSound(700);
  });

  // PARTICLES
  const canvas = document.getElementById("particles");
  const ctx = canvas.getContext("2d");
  canvas.width = 250;
  canvas.height = 250;

  let particles = [];

  for (let i = 0; i < 35; i++) {
    particles.push({
      x: Math.random() * 250,
      y: Math.random() * 250,
      size: Math.random() * 3,
      speedX: (Math.random() - 0.5),
      speedY: (Math.random() - 0.5)
    });
  }

  function animateParticles() {
    ctx.clearRect(0, 0, 250, 250);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0 || p.x > 250) p.speedX *= -1;
      if (p.y < 0 || p.y > 250) p.speedY *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(88,101,242,0.8)";
      ctx.fill();
    });

    requestAnimationFrame(animateParticles);
  }

  animateParticles();

});
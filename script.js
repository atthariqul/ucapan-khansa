// Navigasi antar halaman
function goToForm() {
  document.getElementById("landing").classList.remove("active");
  document.getElementById("form-page").classList.add("active");
}

function showGreeting() {
  const guestName = document.getElementById("guestName").value.trim();

  // Cek apakah nama yang dimasukkan "Khansa"
  if (guestName.toLowerCase() !== "khansa") {
    alert("⚠️ Maaf, hanya KHANSA yang bisa lanjut!");
    return; // Stop, jangan lanjut
  }

  // Kalau cocok, lanjut ke halaman ucapan
  document.getElementById("form-page").classList.remove("active");
  document.getElementById("greeting").classList.add("active");

  document.getElementById("wishText").innerText =
    "Selamat Ulang Tahun KHANSA SYAQIRA MEDINA 🎉";
  document.getElementById("fromText").innerText = `Dari: ${guestName}`;

  startSlideshow();
  startConfetti();
  document.getElementById("bgMusic").play();
}

// Slideshow Foto
let slideIndex = 0;
function startSlideshow() {
  const slides = document.querySelectorAll(".slide");
  setInterval(() => {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
  }, 2500);
}

// Musik
function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Konfeti
function startConfetti() {
  const confetti = document.getElementById("confetti");
  const ctx = confetti.getContext("2d");
  confetti.width = window.innerWidth;
  confetti.height = window.innerHeight;

  let particles = [];
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * confetti.width,
      y: Math.random() * confetti.height - confetti.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 50 + 50,
      color: `hsl(${Math.random() * 360},100%,50%)`,
      tilt: Math.floor(Math.random() * 10) - 10
    });
  }

  function draw() {
    ctx.clearRect(0, 0, confetti.width, confetti.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.r, p.r);
    });
    update();
  }

  function update() {
    particles.forEach(p => {
      p.y += Math.cos(p.d) + 1 + p.r / 2;
      p.x += Math.sin(p.d);
      if (p.y > confetti.height) {
        p.y = -10;
        p.x = Math.random() * confetti.width;
      }
    });
  }

  setInterval(draw, 20);
}

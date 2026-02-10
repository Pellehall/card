const card = document.getElementById("card");

/* ===== DESKTOP MOUSE ===== */
document.addEventListener("mousemove", (e) => {
  if (window.innerWidth < 768) return;

  const x = (window.innerWidth / 2 - e.clientX) / 25;
  const y = (window.innerHeight / 2 - e.clientY) / 25;

  card.style.transform = `
    rotateY(${-x}deg)
    rotateX(${y}deg)
    scale(1.03)
  `;
});

document.addEventListener("mouseleave", () => {
  card.style.transform = "rotateY(0) rotateX(0) scale(1)";
});

/* ===== MOBILE GYRO ===== */
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", (e) => {
    const x = Math.min(Math.max(e.gamma, -20), 20);
    const y = Math.min(Math.max(e.beta, -20), 20);

    card.style.transform = `
      rotateY(${x / 2}deg)
      rotateX(${-y / 2}deg)
      scale(1.02)
    `;
  });
}

/* ===== TOUCH FALLBACK ===== */
document.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  const x = (window.innerWidth / 2 - touch.clientX) / 30;
  const y = (window.innerHeight / 2 - touch.clientY) / 30;

  card.style.transform = `
    rotateY(${-x}deg)
    rotateX(${y}deg)
    scale(1.02)
  `;
});

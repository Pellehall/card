const card = document.querySelector(".card");

document.addEventListener("mousemove", (e) => {
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

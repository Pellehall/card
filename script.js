const card = document.getElementById("card");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 20;
  const y = (window.innerHeight / 2 - e.clientY) / 20;

  card.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`;
});

document.addEventListener("mouseleave", () => {
  card.style.transform = "rotateY(0deg) rotateX(0deg)";
});

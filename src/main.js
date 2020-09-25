import Siema from "siema";

const carousel = new Siema({
  duration: 700,
  loop: true,
});

const tick = setInterval(() => carousel.next(), 5000);
document.querySelector("#left").addEventListener("click", () => {
  carousel.next();
  clearInterval(tick);
});

document.querySelector("#right").addEventListener("click", () => {
  carousel.prev();
  clearInterval(tick);
});

import { gsap } from "gsap";

window.addEventListener("scroll", function () {});

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".maison",
  {
    x: "0",
    y: "70vh",
  },
  {
    scrollTrigger: {
      trigger: "#chapitre1",
      pin: true,
      scrub: true,
    },
    x:
      document.querySelector(".chapitre").offsetWidth -
      document.querySelector(".maison").offsetWidth,
    y: "40vh",
  }
);

ScrollTrigger.create({
  trigger: ".scroll-story__header",
  start: "top top",
  end: "bottom",
});

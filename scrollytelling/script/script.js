import { gsap } from "gsap";

const body = document.querySelector('body');


let scrollTimer;


function addScrollClass() {
    body.classList.add('is-scrolling');

    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(() => {
        body.classList.remove('is-scrolling');
    }, 1000);
}


window.addEventListener('scroll', addScrollClass);

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
    ".maison", {
        x: "0",
        y: "70vh",
    }, {
        scrollTrigger: {
            trigger: "#chapitre1",
            pin: true,
            scrub: true,
        },
        x: document.querySelector(".chapitre").offsetWidth -
            document.querySelector(".maison").offsetWidth,
        y: "40vh",
    }
);

ScrollTrigger.create({
    trigger: ".scroll-story__header",
    start: "top top",
    end: "bottom",
});
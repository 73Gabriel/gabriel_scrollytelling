import { gsap } from "gsap";

window.addEventListener("scroll", function() {

});



gsap.registerPlugin(ScrollTrigger);


gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.create({
    trigger: ".scroll-story__header",
    start: "top top",
    end: "bottom",
});
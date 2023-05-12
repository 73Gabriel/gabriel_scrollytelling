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

gsap.to('.maison1', {
    scale: 15,
    duration: 2,

    scrollTrigger: {
        trigger: '.maison1',
        markers: true,

        start: 'bottom bottom',
        scrub: true
    },
    transformOrigin: 'center center',
    perspective: 800,
    transformStyle: 'preserve-3d',
    ease: 'power2.out'
});


const zzz = document.querySelector('.zzz');
const section = document.querySelector('chapitre2');

// créer la timeline pour l'animation du zzz
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: zzz,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        pin: section,
        markers: true
    }
});

// ajouter l'animation a la timeline pour qu'on puisse voir le zzz en scrollant
tl.to(zzz, {
    backgroundPosition: "0 -26400px",
    duration: 0.2,
    ease: "steps(33)"
});
//floating animation pour le fantome
const ghost = document.querySelector('.ghost');

gsap.to(ghost, {
    y: '-40%',
    duration: 40,
    ease: 'sine.inOut',
    scrollTrigger: {
        trigger: ghost,
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});
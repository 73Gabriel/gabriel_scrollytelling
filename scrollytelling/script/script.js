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
//zoom in sur la maison ou hendy dort
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

//Dans une nuit de primtemps, dans une maison entiurée de foret, hendy se voit rveiller en sursaut
const contenu = document.querySelector('.contenu');
const h2 = contenu.querySelector('h2');
const p = contenu.querySelector('p');

gsap.from(h2, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: h2,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});

gsap.from(p, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: p,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    }
});
gsap.from(contenu, {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: 'power1.out',
    scrollTrigger: {
        trigger: contenu,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true
    }
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
//hendy dort paisiblement il descend au scroll et remonte avec
const sleep = document.querySelector('.sleep');

gsap.to(sleep, {
    y: '120%',

    duration: 1,
    ease: 'power4.out',
    scrollTrigger: {
        trigger: sleep,
        pin: sleep,
        start: 'top 20%',
        end: 'bottom 20%',
        scrub: true
    }
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

const ghostMove = document.querySelector('.ghostmove');
const ghostFall = document.querySelector('.ghostfall');

const t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ghostMove,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
    },
});

t2.to(ghostMove, {
        left: "calc(40% - 25px)",
        duration: 1,
    })
    .to(ghostMove, {
        left: "calc(40% - 10px)",
        duration: 1,
    })
    .to(".ghostmove", {
        duration: 1,
        ease: "power4.out",
        top: "200%",
        transform: "translateX(0) scale(0.3) rotate(360deg)",
    });

const t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".ghostmove",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
    },
});

// add the animation to the timeline
// t3.to(".ghostfall", {
//     duration: 1,
//     ease: "power4.out",
//     top: "200%",
//     transform: "translateX(0) scale(0.3) rotate(360deg)",
// });
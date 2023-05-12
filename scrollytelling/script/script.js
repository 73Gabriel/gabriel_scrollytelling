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

const text = document.querySelector('.contenu p');
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
const ghostScared = document.querySelector('.ghostscared');
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
        start: "top 10%",
        end: "bottom 20%",
        scrub: true,
    },
});

gsap.to(ghostFall, {
    y: '300%',
    duration: 100,
    ease: 'power4.out',
    rotate: 90,
    transformOrigin: 'center center',
    scrollTrigger: {
        trigger: ".ghostfall",
        start: 'top 20%',
        end: 'bottom 20%',
        onEnter: () => {

            gsap.to(ghostFall, {
                y: '150%',
                duration: 0,
                ease: 'power4.out',
                rotate: 360,
                transformOrigin: 'center center',
            });
        },
        onLeaveBack: () => {

            gsap.to(ghostFall, {
                y: '0%',
                duration: 0,
                ease: 'power4.out',
                rotate: 0,
                transformOrigin: 'center center',
                reverse: true,
            });
        },
    },
});

gsap.to(text, {
    y: -100,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: text,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
    }
});
gsap.to('.monstre1', {
    x: '170%',
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.monstre1',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
    },
});

const scream = document.querySelector('.scream');


gsap.to(scream, {
    y: '1000%',
    duration: 10,
    ease: 'power2.out',
    opacity: 0,
    scrollTrigger: {
        trigger: scream,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true
    }
});
const weird = document.querySelector('.weird');

gsap.to(weird, {
    y: 20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut'
});

const feu = document.querySelector('#feu');
const glace = document.querySelector('#glace');

// Morph the path1 to path2
gsap.to(feu, {
    morphSVG: glace,
    duration: 2,
    ease: "power2.inOut"
});
gsap.to(ghostScared, {
    x: '-60%',
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: ghostScared,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true
    }
});
const shook = document.querySelector('.shook');

gsap.to(shook, {
    duration: 2,
    repeat: -1, // repeat indefinitely
    ease: 'power1.inOut',
    motionPath: {
        path: [
            { x: 0, y: 0 },
            { x: 100, y: 100 },
            { x: 0, y: 200 },
            { x: -100, y: 100 },
            { x: 0, y: 0 },
        ],
        curviness: 1.25, // make the circles more rounded
    },
    rotation: 360, // rotate the element 360 degrees
    transformOrigin: 'center center',
});




// add the animation to the timeline
// t3.to(".ghostfall", {
//     duration: 1,
//     ease: "power4.out",
//     top: "200%",
//     transform: "translateX(0) scale(0.3) rotate(360deg)",
// });
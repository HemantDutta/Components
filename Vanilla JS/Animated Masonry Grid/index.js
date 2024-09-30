// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", (event) => {
    const images = document.querySelectorAll('.masonry-layout img');

    images.forEach((img) => {
        gsap.fromTo(img, {
            opacity: 0,
            transform: "rotate3d(-2, 0, 0, 45deg)",
        }, {
            opacity: 1,
            duration: 0.4,
            transform: "rotate3d(0, 0, 0, 0)",
            scrollTrigger: {
                trigger: img,
                start: "top 100%",
                end: "top 20%",
                toggleActions: "play none play none",
                markers: false,
                scrub: 0.2,
            }
        });
    });
});


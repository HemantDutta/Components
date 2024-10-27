// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

//Image Array
const images = document.querySelectorAll(".image-gallery img");
const imgGallery = document.querySelector(".image-gallery");

const animation = gsap.timeline();

images.forEach((img, i) => {

    gsap.set(img,
        {y: `${imgGallery.offsetHeight * i}`}
    );

    animation.to(img,
        {
            y: `-${imgGallery.offsetHeight + img.offsetHeight * 1.5}`,
            duration: (i + 1) * 5,
            ease: "none"
        }, 0);

});

ScrollTrigger.create({
    animation: animation,
    trigger: ".image-gallery",
    start: "top top",
    end: `+=${(images.length) * imgGallery.offsetHeight}`,
    pin: true,
    scrub: 1,
    markers: true
})




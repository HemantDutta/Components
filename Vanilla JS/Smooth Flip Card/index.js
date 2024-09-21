const flipCards = document.querySelectorAll(".flip-card-wrapper");

flipCards.forEach(card => {

    let rotateYFrontValue = 0;
    let rotateYBackValue = -180;

    card.addEventListener("mouseenter", function () {
        const front = this.querySelector(".flip-card-front");
        const back = this.querySelector(".flip-card-back");

        rotateYFrontValue += 180;
        rotateYBackValue += 180;

        front.style.transform = `rotateY(${rotateYFrontValue}deg)`;
        back.style.transform = `rotateY(${rotateYBackValue}deg)`;
    });

    card.addEventListener("mouseleave", function () {
        const front = this.querySelector(".flip-card-front");
        const back = this.querySelector(".flip-card-back");

        rotateYFrontValue += 180;
        rotateYBackValue += 180;

        front.style.transform = `rotateY(${rotateYFrontValue}deg)`;
        back.style.transform = `rotateY(${rotateYBackValue}deg)`;
    })
})
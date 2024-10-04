import "../styles/TechPreLoader.css";

export const TechPreloader = () => {

    //Text Glitch Effect
    const textEffect = () => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        let interval = null;

        let text = document.getElementById("loader-text");

        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            text.innerText = text.innerText.split("").map((letter, index) => {
                if (index < iteration) {
                    return text.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            }).join("");

            if (iteration >= text.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 60)
    }

    return (
        <>
            <div className="tech-preloader">

            </div>
        </>
    )
}
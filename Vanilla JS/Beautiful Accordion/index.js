document.querySelectorAll(".accordion-item").forEach(item => {
    item.addEventListener("click", (e)=> accordionControls(e));
})

function accordionControls(e) {
    let target = e.target;
    let itemList = document.querySelectorAll(".accordion-item");

    itemList.forEach(item => item !== target ? item.classList.remove("item-open") : null);

    target.classList.add("item-open");
}
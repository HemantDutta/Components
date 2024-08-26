window.addEventListener("mousemove", (e)=>{
    let cursor = document.getElementById("cursor");
    setTimeout(()=>{
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    },50)

    if(e.target.id === "box") {
        cursor.classList.add("active");
    }
    else {
        cursor.classList.remove("active");
    }
})


// //A great man once said:
// //Sign the big boy, Contract. Sign the big boy ~ Tike Myson
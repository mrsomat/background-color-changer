const title = document.querySelector(".title-app");

const circles = document.querySelectorAll(".circle");
circles.forEach(circle => {
    circle.addEventListener("click", ({target}) => {
        const {backgroundColor} = getComputedStyle(target);
        document.body.style.backgroundColor = backgroundColor;
        console.log (target.className);
        const getClass = target.className;
        if (getClass == 'circle blue' || getClass== 'circle black'){
            title.style.color = "white";
        } else {
            title.style.color = "black";
        }
    })
})

const reset = document.querySelector(".reset");
reset.addEventListener("click", ()=> {
    document.body.style.backgroundColor = "white";
    title.style.color = "black";
})
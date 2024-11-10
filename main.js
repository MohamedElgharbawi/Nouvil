let stars = document.querySelector("#stars");
let moon = document.querySelector("#moon");
let mountain3 = document.querySelector("#mountain3");
let mountain4 = document.querySelector("#mountain4");
let river = document.querySelector("#river");
let boat = document.querySelector("#boat");
let main = document.querySelector(".main");
let li = document.querySelectorAll("li");

window.onscroll = _ => {
    stars.style.left = `${.5 * scrollY}px`;
    moon.style.top = `${3 * scrollY}px`;
    mountain3.style.top = `${.5 * scrollY}px`;
    mountain4.style.top = `${.75 * scrollY}px`;
    boat.style.left = `${2 * scrollY}px`;
    river.style.top = `${.5 * scrollY}px`;
    scrollY > 112 ? (main.style.background = "linear-gradient(#376281 , #10001f)") : (main.style.background = "linear-gradient(#200016 , #10001f)");
}

li.forEach( e => {
    e.onclick =  _ => {
        li.forEach(e => {
            e.classList.remove("active");
        })
        e.classList.add("active");
    }
})
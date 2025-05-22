let form = document.querySelector("form");
let afficher = document.querySelector(".active");
let cache = document.querySelector(".nom");

cache.addEventListener("click", (e) => {
    e.preventDefault();
    form.classList.add("hide");
    
});

afficher.addEventListener("click", (e) => {
    e.preventDefault();
    form.classList.remove("hide");

});


let search = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick= ()=>{
    search.classList.toggle("active");
    cart.classList.remove("active");
    login.classList.remove("active");
    nav.classList.remove("active");
}
let cart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-btn").onclick=()=>{
    cart.classList.toggle("active");
    search.classList.remove("active");
    login.classList.remove("active");
    nav.classList.remove("active");
}
let login = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick=()=>{
    login.classList.toggle("active");
    search.classList.remove("active");
    cart.classList.remove("active");
    nav.classList.remove("active");
}
let nav = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick=()=>{
    nav.classList.toggle("active");
    search.classList.remove("active");
    cart.classList.remove("active");
    login.classList.remove("active");
   
}


window.onscroll=()=>{
    search.classList.remove("active");
    cart.classList.remove("active");
    login.classList.remove("active");
    nav.classList.remove("active");
     
}
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


var swiper = new Swiper(".product-slider", {
    loop: true,               /* Slider khatam hone par dobara pehle se start ho jaye */
    grabCursor: true,         /* Mouse le jaane par pakadne (drag) ka icon aaye */
    spaceBetween: 20,         /* Boxes ke darmayan gap */
    autoplay: {
        delay: 3000,          /* 3 second ke baad automatic slide ho */
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1, /* Mobile par 1 product dikhe */
        },
        768: {
            slidesPerView: 2, /* Tablet par 2 products dikhein */
        },
        1024: {
            slidesPerView: 3, /* Laptop/Desktop par 3 ya 4 products dikhein */
        },
    },
});

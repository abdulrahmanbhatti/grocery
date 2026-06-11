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
    //   slidesPerView: 1,
    loop:true,
      spaceBetween: 20,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    autoplay :
    {
        delay:2000,
        disablOninteration:false,
    },
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });


    // review
     var swiper = new Swiper(".review-slider", {
    //   slidesPerView: 1,
    loop:true,
      spaceBetween: 20,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    autoplay :
    {
        delay:2000,
        disablOninteration:false,
    },
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });



 
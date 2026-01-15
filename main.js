const { Autoplay } = require("swiper/modules")

const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle("ri-close-large-line")
    })
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed:400,
  spaceBetween: 30,
  autoplay:{
    delay:3000,
    disableOnInteraction
  },



  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

});
let menu= document.querySelector('#menu-bars');
let navbar= document.querySelector('.navbar');
let searchIcon= document.querySelector("#search-icon");
let close= document.querySelector("#close");
let serachForm= document.querySelector("#serach-form")
let section= document.querySelectorAll("section");
let navLinks= document.querySelectorAll("header .navbar a");


menu.addEventListener("click", ()=>
{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
})

window.addEventListener("scroll", ()=>
{
  //menu.classList.toggle('fa-times');
  //navbar.classList.toggle('active');
  section.forEach(sec=>{
    let top= window.scrollY;
    let height= sec.offsetHeight;
    let offset=sec.offsetTop-150;

    let id=sec.getAttribute('id');
    if(top=>offset && top < offset + height)
    {
        navLinks.forEach(links=>{
          //links.classList.remove("active");
        //document.querySelector('header .navbar a[href*='+id+']').classList.add("active");

        });
        };

  });
})

searchIcon.addEventListener("click", ()=>
{
  serachForm.classList.toggle('active')
})
close.addEventListener("click", ()=>
{
  serachForm.classList.remove('active')
})

var swiper = new Swiper(".home-slider", {
        spaceBetween: 100,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
       loop:true,
      });

      var swiper = new Swiper(".review-slider", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
       loop:true,
       breakpoints:{
         0:{
           slidesPerView:1,
         },
         640:{
           slidesPerView:2,
         },
         768:{
           sliderPerView:2,
         },
         1024:{
           slidesPerView:3,
         },
       }
      });
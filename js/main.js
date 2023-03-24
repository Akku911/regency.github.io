$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})

// Toggle
const toggle = document.querySelector(".toggle");
const navHeader = document.querySelector("header");

const toggleNav = () => {
    navHeader.classList.toggle('active');
}

toggle.addEventListener('click',() => toggleNav());
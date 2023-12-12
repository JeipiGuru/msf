import VanillaRouter from './router.js'

document.addEventListener('DOMContentLoaded', function () {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            var spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    window.addEventListener('scroll', function () {
        var stickyNav = document.querySelector('.sticky-top');
        if (window.scrollY > 300) {
            stickyNav.classList.add('shadow-sm');
            stickyNav.style.top = '0px';
        } else {
            stickyNav.classList.remove('shadow-sm');
            stickyNav.style.top = '-150px';
        }
    });
 

    
});
function selectNavItem(element) {
    console.log('Item selected:', element.textContent);
    // Remove the 'active' class from all navigation items
    var navItems = document.querySelectorAll('.navbar-nav a');
    navItems.forEach(function(item) {
        item.classList.remove('active');
    });

    // Add the 'active' class to the clicked navigation item
    element.classList.add('active');
}


var previous = document.querySelector(".prev");
var next = document.querySelector(".next");
var slides = document.getElementsByClassName("slide");
var current = 0;

// Code that moves to the next slide
next.addEventListener("click", function () {
    console.log("fdfdfd");
  slides[current].classList.remove("active");
  current ++;
  if (current === slides.length)
    current = 0;
  slides[current].classList.add("active");
});

// Code that moves to the previous slide
previous.addEventListener("click", function () {
    console.log("sfsdf");
  slides[current].classList.remove("active");
  current --;
  if (current < 0)
    current = (slides.length - 1);
  slides[current].classList.add("active");
});



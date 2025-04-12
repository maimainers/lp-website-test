// HEADER LOGIC STARTS

const navbar = document.querySelector("header");
const hamburgerMenu = document.querySelector(".hamburger-toggle-menu");
const body = document.body; // Select body to control scrolling

// Function to check screen width and apply "is-mobile" class
function checkMobile() {
    if (window.innerWidth <= 991) {
        navbar.classList.add("is-mobile");
    } else {
        navbar.classList.remove("is-mobile");
    }
}

// Run on page load
checkMobile();

// Update class on window resize
window.addEventListener("resize", checkMobile);

// Scroll event to toggle "scrolled" class
document.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Toggle "toggled" class and disable scrolling when menu is open
hamburgerMenu.addEventListener("click", function () {
    navbar.classList.toggle("toggled");

    if (navbar.classList.contains("toggled")) {
        body.style.overflow = "hidden"; // Disable scrolling
        // body.style.position = "fixed";
    } else {
        body.style.overflow = ""; // Restore scrolling
        // body.style.position = "";
    }
});

// HEADER LOGIC ENDS

// HOME SEARCH / FORM LOGIC START

const form = document.querySelector('.home-filter-form');
const inputs = form.querySelectorAll('select, input');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    form.classList.toggle('enabled', [...inputs].some(i => i.value));
  });
});

// HOME SEARCH / FORM LOGIC ENDS

// PHOTO GALLERY STARTS

document.addEventListener("DOMContentLoaded", () => {
    let teamSwiperInstance;
  
    function initTeamSwiper() {
      const screenWidth = window.innerWidth;
  
      // Destroy existing Swiper instance if it exists
      if (teamSwiperInstance) {
        teamSwiperInstance.destroy(true, true);
        teamSwiperInstance = null;
      }
  
      // Initialize Swiper based on screen width
      teamSwiperInstance = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: screenWidth < 991 ? 1.1 : 1.5, // Adjust for mobile
        spaceBetween: screenWidth < 991 ? 30 : 30, // Adjust spacing for mobile
        centeredSlides: true,
        loop: true, 
  
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  
    // Initialize Swiper on page load
    initTeamSwiper();
  
    // Listen for window resize and update Swiper accordingly
    window.addEventListener('resize', () => {
      initTeamSwiper();
    });
  });

// PHOTO GALLERY ENDS
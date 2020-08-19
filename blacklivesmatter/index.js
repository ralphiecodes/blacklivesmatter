// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  scrollingNavBar();
};

let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollingNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

let slideIndex = 0;
movingSlideShow();

function movingSlideShow() {
  let slidePics = document.getElementByClassName("slides");
  for (let i = 0; i < slidePics.length; i++) {
    slidePics[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slidePics.length) {
    slideIndex = 1;
  }
  slidePics[slideIndex - 1].style.display = "block";
  setTimeout(movingSlideShow, 2000);
}

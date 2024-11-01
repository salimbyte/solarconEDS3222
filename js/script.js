const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})



let slideIndex = 0;
let timeout;
showSlides();

function showSlides() {
  clearTimeout(timeout);  // Clear any previous timeouts
  let i;
  let slides = document.getElementsByClassName("mySlides");

  // Hide all the slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    slides[i].style.zIndex = "1"; // Lower z-index to keep hidden slides behind
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Bring the current slide to the front
  slides[slideIndex - 1].style.zIndex = "2"; 
  slides[slideIndex - 1].style.opacity = "1";  // Fade in the current slide

  // Set a delay to show the next slide
  timeout = setTimeout(showSlides, 10000); // Change slide every 3 seconds
}


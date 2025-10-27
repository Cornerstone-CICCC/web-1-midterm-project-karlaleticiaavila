function enterSite() {
  const hero = document.getElementById('hero');
  hero.style.opacity = '0';
  setTimeout(() => {
    hero.style.display = 'none';
  }, 1000);
}









let index = 0;
const slides = document.querySelectorAll(".project-slide");

function showSlide() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

// first image and repeat
showSlide();

// every 3 sec..
setInterval(showSlide, 3000);




// ===========================
// Slider model
// ===========================
let modelIndex = 0;
const modelSlides = document.querySelectorAll(".model-photo");

function showModelSlide() {
    if (modelSlides.length === 0) return; //just in case
    modelSlides.forEach((slide) => {
        slide.classList.remove("active");
    });
    modelSlides[modelIndex].classList.add("active");
    modelIndex = (modelIndex + 1) % modelSlides.length;
}

// first image 
showModelSlide();

// every 3 sec
setInterval(showModelSlide, 3000);
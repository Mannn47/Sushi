const slides = document.querySelectorAll(".menu-slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let currentSlide = 0;

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentSlide);
    });
}

prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides();
});

nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides();
});

updateSlides();

"use strict";


const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev_btn");
const nextBtn = document.querySelector(".next_btn");
const pagination = document.querySelector(".pagination");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {
    if (index < 0) {
        currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
        currentSlide = 0;
    }

    slides.forEach((slide) => slide.classList.remove("active"));
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        goToSlide(index);
    });
});

showSlide(currentSlide);

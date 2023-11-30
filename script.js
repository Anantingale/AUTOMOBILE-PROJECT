let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
 showSlide(slideIndex += n);
}

function showSlide(n) {
 let i;
 let slides = document.getElementsByClassName("slide");
 let prev = document.getElementsByClassName("prev")[0];
 let next = document.getElementsByClassName("next")[0];

 if (n > slides.length - 1) {
    slideIndex = 0;
 }
 if (n < 0) {
    slideIndex = slides.length - 1;
 }

 for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    slides[i].classList.remove("active");
 }

 slides[slideIndex].style.opacity = "1";
 slides[slideIndex].classList.add("active");

 if (slideIndex === 0) {
    prev.style.display = "none";
 } else {
    prev.style.display = "inline-block";
 }

 if (slideIndex === slides.length - 1) {
    next.style.display = "none";
 } else {
    next.style.display = "inline-block";
 }
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var slicks = document.getElementsByClassName("slick")
    var bg = document.getElementsByClassName("bg")[0]
    var left_arrow = document.getElementsByClassName("left-button")[0]
    var right_arrow = document.getElementsByClassName("right-button")[0]
    if (n == slides.length) {
        right_arrow.style.display = "none"
    } else {
        right_arrow.style.display = "flex"
    }
    if (n < 2) {
        left_arrow.style.display = "none"
    } else {
        left_arrow.style.display = "flex"
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < slicks.length; i++) {
        slicks[i].className = slicks[i].className.replace(" slick-active", "");
    }
    let bg_text = ("url('images/bg" + slideIndex + ".jpg')")
    bg.style.backgroundImage = bg_text
    slides[slideIndex - 1].style.display = "block";
    slicks[slideIndex - 1].className += " slick-active";
}
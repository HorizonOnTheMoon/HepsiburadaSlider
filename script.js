var slideIndex = 1;
window.onload = function() {
    page_load(15);
    currentSlide(slideIndex)
};

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
    var slicks = document.getElementsByClassName("slick");
    var bg = document.getElementsByClassName("bg")[0];
    var left_arrow = document.getElementsByClassName("left-button")[0];
    var right_arrow = document.getElementsByClassName("right-button")[0];
    if (n == slides.length) {
        right_arrow.style.display = "none";
    } else {
        right_arrow.style.display = "flex";
    }
    if (n === 1) {
        left_arrow.style.display = "none";
    } else {
        left_arrow.style.display = "flex";
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slicks[i].className = slicks[i].className.replace(" slick-active", "");
    }
    let bg_text = ("url('images/bg" + slideIndex + ".jpg')");
    bg.style.backgroundImage = bg_text;
    slides[slideIndex - 1].style.display = "block";
    slicks[slideIndex - 1].className += " slick-active";
}

function page_load(n) {
    for (i = 0; i < n; i++) {
        slickCreate(i)
        bannerCreate(i)
    }
}

function bannerCreate(i) {
    console.log("aa")
    var bg = document.getElementsByClassName("bg")[0];
    var div1 = document.createElement("div");
    div1.className = "mySlides";
    var div2 = document.createElement("div");
    div2.className = "padding";
    var div3 = document.createElement("div");
    div3.className = "bg-white";
    var div4 = document.createElement("div");
    div4.className = "content";
    var div5 = document.createElement("div");
    div5.className = "left";
    var span1 = document.createElement("span");
    span1.className = "left-content";
    span1.innerHTML = "Ultra geniş kamera. Ufkunu genişlet."
    var span2 = document.createElement("span");
    span2.className = "content-2";
    span2.innerHTML = "avantajlı fiyatlarla burada"
    var a = document.createElement("a");
    a.className = "customButton";
    a.style = "background-color: rgb(255, 96, 0);"
    var span3 = document.createElement("span");
    span3.className = "customButtonText";
    span3.style = "background-color: rgb(255, 96, 0);"
    span3.innerHTML = "Acele et kaçırma"
    var div6 = document.createElement("div");
    div6.className = "right";
    var img = document.createElement("img");
    img.className = "image";
    img.src = "images/img" + (i + 1) + ".jpg"

    bg.appendChild(div1)
    div1.appendChild(div2)
    div2.appendChild(div3)
    div3.appendChild(div4)
    div4.appendChild(div5)
    div5.appendChild(span1)
    div5.appendChild(span2)
    div5.appendChild(a)
    a.appendChild(span3)
    div4.appendChild(div6)
    div6.appendChild(img)
}

function slickCreate(i) {
    var ul = document.getElementsByClassName("slick-ul")[0];
    var li = document.createElement("li");
    li.className = "slick"
    var a = document.createElement("a")
    a.setAttribute("onclick", "currentSlide(" + (i + 1) + ")")
    var div = document.createElement("div")
    div.className = "slick-image"
    var img = document.createElement("img")
    img.src = "images/thumbnail" + (i + 1) + ".jpg"
    ul.appendChild(li);
    li.appendChild(a)
    a.appendChild(div)
    div.appendChild(img)
}

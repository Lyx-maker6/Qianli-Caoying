window.addEventListener("load", function () {
    var slides = document.querySelectorAll(".story-slide");
    var dots = document.querySelectorAll(".story-dot");
    var prevBtn = document.querySelector(".story-prev");
    var nextBtn = document.querySelector(".story-next-btn");
    var slider = document.querySelector(".story-slider");

    var index = 0;
    var timer = null;

    function showSlide(n) {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
            dots[i].classList.remove("active");
        }

        slides[n].classList.add("active");
        dots[n].classList.add("active");
    }

    function nextSlide() {
        index++;

        if (index >= slides.length) {
            index = 0;
        }

        showSlide(index);
    }

    function prevSlide() {
        index--;

        if (index < 0) {
            index = slides.length - 1;
        }

        showSlide(index);
    }

    nextBtn.onclick = function () {
        nextSlide();
    };

    prevBtn.onclick = function () {
        prevSlide();
    };

    for (var i = 0; i < dots.length; i++) {
        dots[i].setAttribute("data-index", i);

        dots[i].onclick = function () {
            index = Number(this.getAttribute("data-index"));
            showSlide(index);
        };
    }

    timer = setInterval(nextSlide, 3000);

    slider.onmouseover = function () {
        clearInterval(timer);
    };

    slider.onmouseout = function () {
        timer = setInterval(nextSlide, 3000);
    };
});
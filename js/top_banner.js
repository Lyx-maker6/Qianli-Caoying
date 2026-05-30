window.addEventListener("load", function () {
    var slides = document.querySelectorAll(".top-slide");
    var dots = document.querySelectorAll(".top-dot");
    var prevBtn = document.querySelector(".top-prev");
    var nextBtn = document.querySelector(".top-next");
    var hero = document.querySelector(".hero");

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

    timer = setInterval(nextSlide, 4000);

    hero.onmouseover = function () {
        clearInterval(timer);
    };

    hero.onmouseout = function () {
        timer = setInterval(nextSlide, 4000);
    };
});
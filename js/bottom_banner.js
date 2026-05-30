window.addEventListener("load", function () {
    var sliders = document.querySelectorAll(".mini-slider");

    for (var i = 0; i < sliders.length; i++) {
        startMiniSlider(sliders[i], i);
    }

    function startMiniSlider(slider, sliderIndex) {
        var slides = slider.querySelectorAll(".mini-slide");
        var dots = slider.querySelectorAll(".mini-dot");
        var prevBtn = slider.querySelector(".mini-prev");
        var nextBtn = slider.querySelector(".mini-next");

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

        /* 点击右箭头 */
        nextBtn.onclick = function () {
            nextSlide();
        };

        /* 点击左箭头 */
        prevBtn.onclick = function () {
            prevSlide();
        };

        /* 点击小圆点 */
        for (var i = 0; i < dots.length; i++) {
            dots[i].setAttribute("data-index", i);

            dots[i].onclick = function () {
                index = Number(this.getAttribute("data-index"));
                showSlide(index);
            };
        }

        /* 自动轮播 */
        setTimeout(function () {
            timer = setInterval(nextSlide, 3000);
        }, sliderIndex * 600);

        /* 鼠标移入暂停 */
        slider.onmouseover = function () {
            clearInterval(timer);
        };

        /* 鼠标移出继续 */
        slider.onmouseout = function () {
            timer = setInterval(nextSlide, 3000);
        };
    }
});
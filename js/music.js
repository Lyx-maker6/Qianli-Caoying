window.addEventListener("load", function () {
    var bgm = document.getElementById("bgm");
    var musicBtn = document.getElementById("musicBtn");

    if (!bgm || !musicBtn) {
        return;
    }

    bgm.volume = 0.35;

    var isPlaying = false;

    // 页面加载后先尝试自动播放
    function tryAutoPlay() {
        var playPromise = bgm.play();

        if (playPromise !== undefined) {
            playPromise.then(function () {
                // 自动播放成功
                isPlaying = true;
                musicBtn.classList.add("playing");
                musicBtn.innerHTML = "♫";
            }).catch(function () {
                // 自动播放被浏览器拦截
                isPlaying = false;
                musicBtn.classList.remove("playing");
                musicBtn.innerHTML = "♪";
                console.log("浏览器拦截了自动播放，请点击音乐按钮播放。");
            });
        }
    }

    tryAutoPlay();

    // 点击按钮：播放 / 暂停
    musicBtn.onclick = function () {
        if (isPlaying) {
            bgm.pause();
            musicBtn.classList.remove("playing");
            musicBtn.innerHTML = "♪";
            isPlaying = false;
        } else {
            bgm.play();
            musicBtn.classList.add("playing");
            musicBtn.innerHTML = "♫";
            isPlaying = true;
        }
    };

    // 用户第一次点击页面任意位置时，再尝试播放一次
    document.addEventListener("click", function firstClickPlay() {
        if (!isPlaying) {
            bgm.play().then(function () {
                isPlaying = true;
                musicBtn.classList.add("playing");
                musicBtn.innerHTML = "♫";
            }).catch(function () {});
        }

        document.removeEventListener("click", firstClickPlay);
    });
});
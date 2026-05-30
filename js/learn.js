window.addEventListener("load", function () {
    var completed = {
        1: false,
        2: false,
        3: false,
        4: false
    };

    var answers = {
        1: "a",
        2: "b",
        3: "a",
        4: "a"
    };

    var buttons = document.querySelectorAll(".check-btn");
    var progressTip = document.getElementById("progressTip");
    var finishText = document.getElementById("finishText");
    var stampBox = document.getElementById("stampBox");
    var bookBtn = document.getElementById("bookBtn");

    function getSelectedRadio(name) {
        var radios = document.getElementsByName(name);
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                return radios[i].value;
            }
        }
        return "";
    }

    function countCompleted() {
        var count = 0;
        for (var key in completed) {
            if (completed[key]) {
                count++;
            }
        }
        return count;
    }

    function updateProgress() {
        var count = countCompleted();

        progressTip.innerHTML = "当前已完成 " + count + " / 4 个任务。";

        for (var i = 1; i <= 4; i++) {
            var item = document.getElementById("progress" + i);
            if (completed[i]) {
                item.classList.add("done");
            }
        }

        if (count === 4) {
            finishText.innerHTML = "恭喜你完成全部汉语任务！你已经掌握方位表达、比字句、路线描述和情境问答，可以进入最终预约体验。";
            stampBox.innerHTML = "<span>已完成</span>";
            stampBox.classList.add("done");
            bookBtn.classList.remove("disabled");
        } else {
            finishText.innerHTML = "你需要完成四个汉语任务，才能解锁最终体验入口。";
            stampBox.innerHTML = "<span>未完成</span>";
            stampBox.classList.remove("done");
            bookBtn.classList.add("disabled");
        }
    }

    function showResult(taskNum, isCorrect) {
        var result = document.getElementById("result" + taskNum);

        if (isCorrect) {
            result.innerHTML = "回答正确，任务完成！";
            result.className = "result-text result-correct";
            completed[taskNum] = true;
        } else {
            result.innerHTML = "答案不对，再试一次。";
            result.className = "result-text result-wrong";
        }

        updateProgress();
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            var taskNum = this.getAttribute("data-task");
            var userAnswer = "";

            if (taskNum === "1") {
                userAnswer = getSelectedRadio("q1");
            }

            if (taskNum === "2") {
                userAnswer = document.getElementById("q2").value;
            }

            if (taskNum === "3") {
                userAnswer = getSelectedRadio("q3");
            }

            if (taskNum === "4") {
                userAnswer = getSelectedRadio("q4");
            }

            if (userAnswer === "") {
                var result = document.getElementById("result" + taskNum);
                result.innerHTML = "请先选择一个答案。";
                result.className = "result-text result-wrong";
                return;
            }

            showResult(taskNum, userAnswer === answers[taskNum]);
        };
    }

    updateProgress();
});
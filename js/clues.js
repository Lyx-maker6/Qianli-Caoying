window.addEventListener("load", function () {
    var clueCards = document.querySelectorAll(".clue-card");
    var mapPoints = document.querySelectorAll(".map-point");

    var modal = document.getElementById("clueModal");
    var modalImg = document.getElementById("modalImg");
    var modalTitle = document.getElementById("modalTitle");
    var modalDesc = document.getElementById("modalDesc");
    var modalTask = document.getElementById("modalTask");
    var closeBtn = document.getElementById("clueClose");

    var nextBtn = document.getElementById("nextBtn");
    var unlockText = document.getElementById("unlockText");

    var viewedClues = {};

    var clueData = {
        letter: {
            title: "密信碎片",
            img: "./images/clues/clue/clue_secret_letter.jpg",
            desc: "密信中写道：漕银失踪，账册有异。若欲寻真相，须问东南角。它暗示案件并不只发生在一个地点，而是与多个地点之间的关系有关。",
            task: "线索提示：注意“东南角”这一方位词，它可能指向下一处调查地点。"
        },
        account: {
            title: "漕运账册",
            img: "./images/clues/clue/account_book_page.jpg",
            desc: "账册记录显示，临清关粮食比聊城关多三百石，而布匹数量却出现相反差异。账目不是简单遗漏，而是被人有意修改。",
            task: "线索提示：请使用“比”字句描述数量差异，例如：临清关粮食比聊城关多三百石。"
        },
        seal: {
            title: "钞关印章",
            img: "./images/clues/clue/clue_seal_record.jpg",
            desc: "钞关印章上的红印是真的，但印章旁边出现了细小暗码。由此可见，问题不在印章真假，而在盖章之后的转运环节。",
            task: "线索提示：印章是真，账本却有异，说明有人在核验之后改动了路线或记录。"
        },
        route: {
            title: "漕运路线",
            img: "./images/clues/clue/clue_canal_route.jpg",
            desc: "路线图显示，部分货物并未按照正常路线直接送往聊城，而是在中途出现异常转向。红线交叉处可能是货物被调换的关键位置。",
            task: "线索提示：请用“先……再……”描述路线顺序，帮助队伍还原转运过程。"
        }
    };

    function openModal(title, img, desc, task) {
        modalTitle.innerHTML = title;
        modalImg.src = img;
        modalDesc.innerHTML = desc;
        modalTask.innerHTML = task;
        modal.style.display = "block";
    }

    function checkUnlock() {
        var count = 0;

        for (var key in viewedClues) {
            if (viewedClues[key]) {
                count++;
            }
        }

        if (count >= 4) {
            unlockText.innerHTML = "四条关键线索已收集完成，已解锁下一步：进入汉语任务。";
            nextBtn.classList.remove("disabled");
        } else {
            unlockText.innerHTML = "当前已查看 " + count + " / 4 条关键线索，请继续调查。";
        }
    }

    for (var i = 0; i < clueCards.length; i++) {
        clueCards[i].onclick = function () {
            var clueName = this.getAttribute("data-clue");
            var data = clueData[clueName];

            viewedClues[clueName] = true;
            this.classList.add("checked");

            openModal(data.title, data.img, data.desc, data.task);
            checkUnlock();
        };
    }

    for (var j = 0; j < mapPoints.length; j++) {
        mapPoints[j].onclick = function () {
            var title = this.getAttribute("data-title");
            var img = this.getAttribute("data-img");
            var text = this.getAttribute("data-text");

            openModal(
                title,
                img,
                text,
                "地点提示：该地点与案件线索有关，请结合下方四条关键线索继续推理。"
            );
        };
    }

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    modal.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    checkUnlock();
});
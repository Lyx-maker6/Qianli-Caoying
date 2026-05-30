window.addEventListener("load", function () {
    var submitBtn = document.getElementById("submitBtn");
    var formTip = document.getElementById("formTip");

    var successModal = document.getElementById("successModal");
    var closeBtn = document.getElementById("closeBtn");
    var successText = document.getElementById("successText");

    function getValue(id) {
        return document.getElementById(id).value.trim();
    }

    submitBtn.onclick = function () {
        var username = getValue("username");
        var phone = getValue("phone");
        var role = getValue("role");
        var time = getValue("time");
        var people = getValue("people");

        if (username === "") {
            formTip.innerHTML = "请填写姓名。";
            return;
        }

        if (phone === "") {
            formTip.innerHTML = "请填写联系方式。";
            return;
        }

        if (role === "") {
            formTip.innerHTML = "请选择体验身份。";
            return;
        }

        if (time === "") {
            formTip.innerHTML = "请选择预约场次。";
            return;
        }

        if (people === "") {
            formTip.innerHTML = "请选择参与人数。";
            return;
        }

        formTip.innerHTML = "";

        successText.innerHTML =
            "预约人：" + username + "<br>" +
            "体验身份：" + role + "<br>" +
            "预约场次：" + time + "<br>" +
            "参与人数：" + people + "<br>" +
            "请按预约时间进入《聊城运河遗秘》沉浸式课堂。";

        successModal.style.display = "block";
    };

    closeBtn.onclick = function () {
        successModal.style.display = "none";
    };

    successModal.onclick = function (event) {
        if (event.target === successModal) {
            successModal.style.display = "none";
        }
    };
});
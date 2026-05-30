window.addEventListener("load", function () {
    var roleButtons = document.querySelectorAll(".role-btn");
    var modal = document.getElementById("roleModal");
    var modalRoleName = document.getElementById("modalRoleName");
    var modalRoleDesc = document.getElementById("modalRoleDesc");
    var closeBtn = document.getElementById("roleClose");

    var roleData = {
        "钞关文书": "你负责临清钞关账册登记与税银核验。你发现部分税银记录与实际船货数量不符，但账册上的印章却是真实的。你需要通过比较两份账目，判断是谁在中途调换了记录。",
        "漕运账房": "你掌管漕运货物账本，熟悉船号、货名与银两往来。你发现账本中有几页被人涂改，部分货物数量出现异常。你需要用清楚的数量表达向队友说明差异。",
        "茶馆掌柜": "你的茶馆位于运河码头附近，来往客商都会在此停留。案发前夜，有几名身份不明的人在茶馆中秘密会面。你需要通过询问和回忆，确认他们的行动路线。",
        "异国旅人": "你沿运河而来，随身携带地图与密封书信。你看不懂所有中文线索，但你熟悉地图和方向。你需要用方位词帮助队伍判断线索地点之间的位置关系。",
        "密信守护人": "你受人托付保管密信，知道密信中隐藏着官银去向的关键暗号。你不能轻易暴露全部内容，必须判断谁值得信任，并用推理表达说明你的判断依据。",
        "商帮学徒": "你跟随商帮往来南北，负责登记货物和路线。你发现其中一批货物并未按照正常路线运输。你需要用顺序表达描述货物流转过程，帮助队伍还原案件经过。"
    };

    for (var i = 0; i < roleButtons.length; i++) {
        roleButtons[i].onclick = function (event) {
            event.stopPropagation();

            var card = this.closest(".role-card");
            var roleName = card.getAttribute("data-role");

            modalRoleName.innerHTML = roleName;
            modalRoleDesc.innerHTML = roleData[roleName];
            modal.style.display = "block";
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
});
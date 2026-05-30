window.addEventListener("load", function () {
    var cards = document.querySelectorAll(".clue-card");
    var modal = document.getElementById("clueModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalContent = document.getElementById("modalContent");
    var closeBtn = document.getElementById("clueClose");

    for (var i = 0; i < cards.length; i++) {
        cards[i].onclick = function () {
            var title = this.getAttribute("data-title");
            var content = this.getAttribute("data-content");

            modalTitle.innerHTML = title;
            modalContent.innerHTML = content;
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
let circleSelected;

document.addEventListener("DOMContentLoaded", function () {
    circleSelected = document.getElementById("circle-selected");
    const items = document.querySelectorAll(".item-footer");
    items.forEach((item) => {
        item.addEventListener("click", function () {
            document.querySelector(".item-selected")?.classList.remove("item-selected");
            this.classList.add("item-selected");
            ajustaPosicao();
        });
    });
    ajustaPosicao();
});

function ajustaPosicao() {
    const selectedItem = document.querySelector(".item-selected");
    if (selectedItem && circleSelected) {
        const itemRect = selectedItem.getBoundingClientRect();
        const footerRect = selectedItem.closest("footer").getBoundingClientRect();
        const left = itemRect.left - footerRect.left + (itemRect.width / 2) - (circleSelected.offsetWidth / 2);
        circleSelected.style.left = `${left}px`;
    }
}
window.addEventListener("resize", ajustaPosicao);
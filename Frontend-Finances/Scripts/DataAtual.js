document.addEventListener("DOMContentLoaded", function () {
    let dataAtual = document.getElementById("DataAtual");
    let data = new Date();
    dataAtual.textContent = data.toLocaleDateString("pt-BR");
});

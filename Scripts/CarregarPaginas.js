function carregarPagina(pagina) {
    fetch(pagina)
    .then(res => res.text())
    .then(html => {
        document.getElementById("conteudo").innerHTML = html;
    });
}

window.onload = () => carregarPagina('Pages/dashboard.html');
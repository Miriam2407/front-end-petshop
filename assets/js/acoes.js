function abrirPopupAcoes() {
    document.getElementById("popup-acoes").style.display = "flex";
}

window.onclick = function(e) {
    const popup = document.getElementById("popup-acoes");
    if (e.target === popup) {
        popup.style.display = "none";
    }
}

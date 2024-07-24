function adicionarAoCarrinho(item) {
    alert(item + " foi adicionado ao carrinho!");
}

function toggleMenu() {
    const extraMenu = document.getElementById('extraMenu');
    if (extraMenu.style.display === "none" || extraMenu.style.display === "") {
        extraMenu.style.display = "flex";
    } else {
        extraMenu.style.display = "none";
    }
}

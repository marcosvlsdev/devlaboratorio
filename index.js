const alterarModo = document.getElementById ("modo");
const body  = document.querySelector("body");
const imagemModo = document.querySelector(".imagem-botao");

alterarModo.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle ("modo-escuro");

    if (modoEscuroAtivo) {
        imagemModo.setAttribute("src", "img/sun.png")
    } else {
        imagemModo.setAttribute("src", "img/lua1.png")
    }

    
     
})
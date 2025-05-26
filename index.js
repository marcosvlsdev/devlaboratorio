const alterarModo = document.getElementById ("modo");
const body  = document.querySelector("body");
const imagemModo = document.querySelector(".imagem-botao");
const imagemLogo = document.querySelector(".logo")
const imagemLogoFooter = document.querySelector(".logo-footer")

alterarModo.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle ("modo-escuro");

    if (modoEscuroAtivo) {
        imagemModo.setAttribute("src", "img/sun.png")
        imagemLogo.setAttribute("src", "img/lab-removebg-preview.png")
        imagemLogoFooter.setAttribute("src", "img/lab-removebg-preview.png")
    } else {
        imagemModo.setAttribute("src", "img/lua1.png")
        imagemLogo.setAttribute("src", "img/lab-claro.png")
        imagemLogoFooter.setAttribute("src", "img/lab-claro.png")
    }

    
     
})
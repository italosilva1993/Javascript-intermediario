const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar")
const setaAvancar = document.getElementById("seta-avancar")


let imagemAtual = 0;

function mostrarImagem() {
    imagens[imagemAtual].classList.add("mostrar");
}

setaAvancar.addEventListener("click", function () {
    if (imagemAtual === imagens.length - 1) {
        return;
    }

    imagemAtual++;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();

});

function esconderImagemAberta() {
    const imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar");
}

function mostrarOuEsconderSetas() {
    const naoEAPrimeiraImagem = imagemAtual !== 0;
    if (naoEAPrimeiraImagem) {
        setaVoltar.classList.remove("opacidade");
    } else {
        setaVoltar.classList.add("opacidade");
    }

    const chaegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
    if (chaegouNaUltimaImagem) {
        setaAvancar.classList.add("opacidade");
    } else {
        setaAvancar.classList.remove("opacidade");
    }
}

setaVoltar.addEventListener("click", function () {
    if (imagemAtual === 0) {
        return;
    }

    mostrarOuEsconderSetas();
    mostrarImagem();
    esconderImagemAberta();

    imagemAtual--;

    imagens[imagemAtual].classList.add("mostrar");
});
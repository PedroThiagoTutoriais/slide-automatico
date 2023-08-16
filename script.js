const box = document.querySelector(".container");
const imagens = document.querySelectorAll("img");

let contador = 0;

function slider() {
    contador++ //Toda vez que usar a minha função o contador será adicionando 1//
    
    if (contador > imagens.length - 1) { //Se o contador for maior que nossas imagens juntas ele vai voltar para 0
        contador = 0;
    }

    box.style.transform = `translateX(${-contador * 1250}px)`;
}

setInterval(slider, 2000); //Vai acessar uma propriedade para repetir em algum período de tempo
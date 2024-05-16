function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}


const listaDeTecla = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listaDeTecla.length; contador++) {

    const tecla = listaDeTecla[contador]
    const instrumento = tecla.classList[1];


    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function () {
        playSonido(idAudio);
    };
}

//Seletor de Música
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

//Variáveis
const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    //tocador de som
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
//Teclado numérico
         if (evento.code === "Numpad1") {
        document.getElementById("btn1").click();
        listaDeTeclas[6].classList.add('ativa');
        } else if (event.code === "Numpad2") {
        document.getElementById("btn2").click();
        listaDeTeclas[7].classList.add('ativa');
        } else if (event.code === "Numpad3") {
        document.getElementById("btn3").click();
        listaDeTeclas[8].classList.add('ativa');
        } else if (event.code === "Numpad4") {
        document.getElementById("btn4").click();
        listaDeTeclas[3].classList.add('ativa');
        } else if (event.code === "Numpad5") {
        document.getElementById("btn5").click();
        listaDeTeclas[4].classList.add('ativa');
        } else if (event.code === "Numpad6") {
        document.getElementById("btn6").click();
        listaDeTeclas[5].classList.add('ativa');
        } else if (event.code === "Numpad7") {
        document.getElementById("btn7").click();
        listaDeTeclas[0].classList.add('ativa');
        } else if (event.code === "Numpad8") {
        document.getElementById("btn8").click();
        listaDeTeclas[1].classList.add('ativa');
        } else if (event.code === "Numpad9") {
        document.getElementById("btn9").click();
        listaDeTeclas[2].classList.add('ativa');
        }

        tecla.onkeyup = function () {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.remove('ativa');
        }
        if (evento.code === "Numpad1") {
        listaDeTeclas[6].classList.remove('ativa');
        } else if (event.code === "Numpad2") {
        listaDeTeclas[7].classList.remove('ativa');
        } else if (event.code === "Numpad3") {
        listaDeTeclas[8].classList.remove('ativa');
        } else if (event.code === "Numpad4") {
        listaDeTeclas[3].classList.remove('ativa');
        } else if (event.code === "Numpad5") {
        listaDeTeclas[4].classList.remove('ativa');
        } else if (event.code === "Numpad6") {
        listaDeTeclas[5].classList.remove('ativa');
        } else if (event.code === "Numpad7") {
        listaDeTeclas[0].classList.remove('ativa');
        } else if (event.code === "Numpad8") {
        listaDeTeclas[1].classList.remove('ativa');
        } else if (event.code === "Numpad9") {
        listaDeTeclas[2].classList.remove('ativa');
        }
        }
    }
}




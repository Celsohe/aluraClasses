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

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

        if (evento.code === "Numpad1") {
        document.getElementById("btn1").click();
        listaDeTeclas[0].add('ativa');
        } else if (event.code === "Numpad2") {
        document.getElementById("btn2").click();
        document.getElementById("btn2").add('ativa');
        } else if (event.code === "Numpad3") {
        document.getElementById("btn3").click();
        tecla.classList.add('ativa');
        } else if (event.code === "Numpad4") {
        tecla.classList.add('ativa');
        document.getElementById("btn4").click();
        } else if (event.code === "Numpad5") {
        tecla.classList.add('ativa');
        document.getElementById("btn5").click();
        } else if (event.code === "Numpad6") {
        tecla.classList.add('ativa');
        document.getElementById("btn6").click();
        } else if (event.code === "Numpad7") {
        tecla.classList.add('ativa');
        document.getElementById("btn7").click();
        } else if (event.code === "Numpad8") {
        tecla.classList.add('ativa');
        document.getElementById("btn8").click();
        } else if (event.code === "Numpad9") {
        tecla.classList.add('ativa');
        document.getElementById("btn9").click();
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

 document.addEventListener("keydown", function(event) {

      });

/*
document.addEventListener('keydown', function(event) {
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    // code to press the button
  }
});
*/

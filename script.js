var botonEncriptar = document.querySelector(".btn-encript");
var botonDesencriptar = document.querySelector(".btn-descript");
var textresultado = document.querySelector(".resultado-text");
var contparrafo = document.querySelector(".parrafo");
var personaje = document.querySelector(".personaje");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarAdelante();
    var boxtext = recuperarTexto()
    textresultado.textContent = encriptarTexto(boxtext);
}

function desencriptar() {
    ocultarAdelante();
    var boxtext = recuperarTexto()
    textresultado.textContent = desencriptarTexto(boxtext);
}

function recuperarTexto() {
    var boxtext = document.querySelector(".boxtext")
    return boxtext.value

}

function ocultarAdelante() {
    personaje.classList.add("ocultar");
    contparrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        } else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        } else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        } else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        } else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        } else {
            textoFinal = textoFinal + texto[i]
        }



    }
    return textoFinal;
}



function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i + 1;
        } else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i + 4;
        } else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i + 3;
        } else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i + 3;
        } else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i + 3;
        } else {
            textoFinal = textoFinal + texto[i]
        }



    }
    return textoFinal;
}
const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".resultado-text").textContent;
    navigator.clipboard.writeText(contenido);
})
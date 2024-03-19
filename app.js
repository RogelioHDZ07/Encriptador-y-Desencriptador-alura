function mostrador(id, parrafo) {
    let textoEncriptado = document.getElementById(id);
    textoEncriptado.innerHTML = parrafo;
    return;
}

function minusculas(e) {
    e.value = e.value.toLowerCase();
}

function btnEncriptador() {
    let guardarTexto = document.getElementById("texto");
    let capturaTexto = document.getElementById("texto").value;
    let ParrafoTexto = document.getElementById("parrafo-exitoso");
    let cambioImagen = document.getElementById("img-cambio");

    let textoCifrado = capturaTexto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (capturaTexto.length != 0) {
        capturaTexto = textoCifrado;
        cambioImagen.src = "img/felicitaciones.jpg";
        ParrafoTexto.textContent = "Texto encriptado con exito";
        mostrador("texto-reflejado", `${guardarTexto.value}`);
        mostrador("texto-encriptado", `${textoCifrado}`);
    } else {
        cambioImagen.src = "img/wait.png";
        ParrafoTexto.textContent = "Esperando tu texto";
        mostrador("texto-reflejado", ``);
        mostrador("texto-encriptado", ``);
    }
    limpiarCaja();
    return;
}

function btnDesencriptador() {
    let guardarTexto = document.getElementById("texto");
    let capturaTexto = document.getElementById("texto").value;
    let ParrafoTexto = document.getElementById("parrafo-exitoso");
    let cambioImagen = document.getElementById("img-cambio");

    let textoCifrado = capturaTexto
        .replace(/ai/gi, "a")
        .replace(/imes/gi, "i")
        .replace(/enter/gi, "e")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (capturaTexto.length != 0) {
        capturaTexto = textoCifrado;
        cambioImagen.src = "img/felicitaciones.jpg";
        ParrafoTexto.textContent = "Texto encriptado con exito";
        mostrador("texto-reflejado", `${guardarTexto.value}`);
        mostrador("texto-encriptado", `${textoCifrado}`);
    } else {
        cambioImagen.src = "img/wait.png";
        ParrafoTexto.textContent = "Esperando tu texto";
        mostrador("texto-reflejado", ``);
        mostrador("texto-encriptado", ``);
    }
    limpiarCaja();
    return;
}



function btnCopiar() {
    let textoUsuario = document.getElementById("texto-reflejado");
    let btn = document.getElementById("btn1")

    navigator.clipboard.writeText(textoUsuario.textContent);
}

function btnCopiar2() {
    let textoUsuario2 = document.getElementById("texto-encriptado");
    let btn = document.getElementById("btn2")

    navigator.clipboard.writeText(textoUsuario2.textContent);
}


// Limpiador de textarea
function limpiarCaja() {
    document.querySelector("#texto").value = "";
    return;
}







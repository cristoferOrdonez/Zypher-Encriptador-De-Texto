/* 
*
*   ENCRITPADOR DE TEXTO - Challege Alura
*   
*   Hecho por: Cristofer Damián Camilo Ordoñez Osa
*
*/

// instrucciones principales

let resultadoHabilitado = false;
const limitePixeles = 1200;

window.addEventListener('resize', establecerLayout);

establecerLayout();

// functiones

// función para obtener un elemento de index.html
function obtenerElemento(idElemento){
    return document.getElementById(idElemento);
}

// función para obtener el estilo de un elemento de index.html
function obtenerElementoStyle(idElemento){
    return document.getElementById(idElemento).style;
}

// función para habilitar la sección en la que aparece el texto resultado de la encriptación/desencriptación
function habilitarResultado(){

    let imagenTextoStyle = obtenerElementoStyle('imagen_texto_no_encontrado');
    imagenTextoStyle.width = '0px';
    imagenTextoStyle.height = '0px';

    let tituloNoEncontrado = obtenerElemento('titulo_texto_no_encontrado');
    tituloNoEncontrado.innerHTML = '';

    let botonCopiarStyle = obtenerElementoStyle('boton_copiar');
    botonCopiarStyle.padding = '20px 20px';
    botonCopiarStyle.visibility = 'visible';
    botonCopiarStyle.height = 'fit-content';
    
    let textoResultadoStyle = obtenerElementoStyle('texto_texto_no_encontrado');
    textoResultadoStyle.fontSize = '1.5rem';
    textoResultadoStyle.textAlign = 'start';
    if(window.matchMedia(`(max-width: ${limitePixeles}px)`).matches) {
        textoResultadoStyle.marginTop = '4.35%';
        botonCopiarStyle.margin = '4.35%';
    } else {
        textoResultadoStyle.marginTop = '8%';
        botonCopiarStyle.margin = '8%';
    }

    let sectionTextoResultado = obtenerElementoStyle('section_texto_resultado');
    sectionTextoResultado.justifyContent = 'flex-end';

    let textoNoEncontradoStyle = obtenerElementoStyle('texto_no_encontrado');
    textoNoEncontradoStyle.gap = '0px';
    textoNoEncontradoStyle.margin = '0px';

    let divTextoResultadoStyle = obtenerElementoStyle('section_texto_resultado__div_texto');
    divTextoResultadoStyle.gap = '0px';
    divTextoResultadoStyle.height = '100%';

    resultadoHabilitado = true;

}

// función para deshabilitar la sección en la que aparece el texto resultado de la encriptación/desencriptación
function deshabilitarResultado(){

    let tituloNoEncontrado = obtenerElemento('titulo_texto_no_encontrado');
    tituloNoEncontrado.innerHTML = 'Ningún mensaje fue encontrado';

    let botonCopiarStyle = obtenerElementoStyle('boton_copiar');
    botonCopiarStyle.padding = '0px';
    botonCopiarStyle.visibility = 'hidden';
    botonCopiarStyle.height = '0px';
    botonCopiarStyle.margin = '0px';

    let textoResultadoStyle = obtenerElementoStyle('texto_texto_no_encontrado');
    textoResultadoStyle.fontSize = '1rem';
    textoResultadoStyle.textAlign = 'center';
    textoResultadoStyle.marginTop = '0%';

    let textoResultado = obtenerElemento('texto_texto_no_encontrado');
    textoResultado.innerHTML = 'Ingresa el texto que desees encriptar o desencriptar.';

    let sectionTextoResultado = obtenerElementoStyle('section_texto_resultado');
    sectionTextoResultado.justifyContent = 'center';

    let textoNoEncontradoStyle = obtenerElementoStyle('texto_no_encontrado');

    if(window.matchMedia(`(max-width: ${limitePixeles}px)`).matches){

        textoNoEncontradoStyle.marginTop = '4.35%';
        textoNoEncontradoStyle.marginBottom = '4.35%';

    } else {

        let imagenTextoStyle = obtenerElementoStyle('imagen_texto_no_encontrado');
        imagenTextoStyle.width = 'auto';
        imagenTextoStyle.height = 'auto';

        textoNoEncontradoStyle.gap = '18px';

    }

    let divTextoResultadoStyle = obtenerElementoStyle('section_texto_resultado__div_texto');
    divTextoResultadoStyle.gap = '15px';
    divTextoResultadoStyle.height = 'auto';

    resultadoHabilitado = false;

}

// función que se ejecuta cuando se oprime el boton "Encriptar"
function botonEncriptar(){

    let textarea = obtenerElemento('textarea_texto_para_trabajar');

    if(textarea.value != '') {
        habilitarResultado();
        obtenerElemento('texto_texto_no_encontrado').innerHTML = encriptar(textarea.value);
    } else
        deshabilitarResultado();

}

// función que se ejecuta cuando se oprime el boton "Desencriptar"
function botonDesencriptar(){

    let textarea = obtenerElemento('textarea_texto_para_trabajar');

    if(textarea.value != '') {
        habilitarResultado();
        obtenerElemento('texto_texto_no_encontrado').innerHTML = desencriptar(textarea.value);
    } else
        deshabilitarResultado();

}

// función que se ejecuta cuando se oprime el boton "Copiar"
function copiar(){
    navigator.clipboard.writeText(obtenerElemento('texto_texto_no_encontrado').innerHTML);
}

// función de encriptación
function encriptar(texto){
    return texto.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
}

// función de desencriptación
function desencriptar(texto){
    return texto.replaceAll('ufat', 'u').replaceAll('ober', 'o').replaceAll('ai', 'a').replaceAll('imes', 'i').replaceAll('enter', 'e');
}

// función para establecer el layout del proyecto
function establecerLayout(){

    let imagenLogoAlura = obtenerElemento('imagen_logo_alura');
    let imagenTextoNoEncontradoStyle = obtenerElementoStyle('imagen_texto_no_encontrado');
    let textoNoEncontradoStyle = obtenerElementoStyle('texto_no_encontrado');
    let textoTextoNoEncontradoStyle = obtenerElementoStyle('texto_texto_no_encontrado');
    let botonCopiarStyle = obtenerElementoStyle('boton_copiar');

    if(window.matchMedia(`(max-width: ${limitePixeles}px)`).matches){
        
        imagenLogoAlura.setAttribute('src', './assets/alura_logo_angosto.png');
        imagenTextoNoEncontradoStyle.width = '0px';
        imagenTextoNoEncontradoStyle.height = '0px';
        textoNoEncontradoStyle.gap = '0px';

        if(!resultadoHabilitado){
            textoNoEncontradoStyle.marginTop = '4.35%';
            textoNoEncontradoStyle.marginBottom = '4.35%';
        } else {
            textoTextoNoEncontradoStyle.marginTop = '4.35%';
            botonCopiarStyle.margin = '4.35%';
        }

    } else {

        imagenLogoAlura.setAttribute('src', './assets/alura_logo.png');

        if(!resultadoHabilitado){
            textoNoEncontradoStyle.gap = '18px';
            imagenTextoNoEncontradoStyle.width = 'auto';
            imagenTextoNoEncontradoStyle.height = 'auto';
            textoNoEncontradoStyle.marginTop = '0%';
            textoNoEncontradoStyle.marginBottom = '0%';
        } else {
            textoTextoNoEncontradoStyle.marginTop = '8%';
            botonCopiarStyle.margin = '8%';
        }

    }

}
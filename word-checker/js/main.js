function inputpalabra(respuestaform) {
    var palabra = respuestaform.palabrarecibida.value;
    var texto;

    if(esPalindromo(palabra)){
        texto ="<p><span class=\"italic\">"+palabra+"</span> <b>SÍ</b> es palíndromo.</p>";
    } else {
        texto ="<p><span class=\"italic\">"+palabra+"</span> <b>NO</b> es palíndromo.</p>";
    }

    if (cuentaPalabras(palabra)==0){
        texto += "<p><span class=\"italic\">"+palabra+"</span> no tiene palabras.";
    } else if (cuentaPalabras(palabra)==1){
        texto += "<p><span class=\"italic\">"+palabra+"</span> tiene "+cuentaPalabras(palabra)+" palabra.";
    } else {
        texto += "<p><span class=\"italic\">"+palabra+"</span> tiene "+cuentaPalabras(palabra)+" palabras.";
    }

    document.getElementById("response").innerHTML = texto;
}

function esPalindromo(frase) {
    var fraseCorrecta = frase.trim();                   // Formateamos la frase
    fraseCorrecta = fraseCorrecta.toLowerCase();
    fraseCorrecta = removeDiacritics(fraseCorrecta);
    fraseCorrecta = fraseCorrecta.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");   // 
    fraseCorrecta = fraseCorrecta.replace(/\s+/g,"");   // eliminamos espacios intermedios
    var longitud = fraseCorrecta.length;                // calculamos la longitud de la frase (sin espacios)
    var mitad = Math.floor(longitud/2);                 // calculamos la mitad (redondeada hacia abajo)

    var correcto;

    for (var i=0; i<mitad; i++) {
        var j = longitud-1-i;
        var a = fraseCorrecta.charAt(i);                // Guadamos el primer y último caracter.
        var b = fraseCorrecta.charAt(j);

        if (a == b) {                                   // Los comparamos.
            correcto = true;
        } else {
            correcto = false;
            return correcto;
        }
    };

    return correcto;
}

function cuentaPalabras(frase){
    var numPalabras = 0;
    var fraseCorrecta = frase.trim();                   // Formateamos la frase
    fraseCorrecta = fraseCorrecta.replace(/\s+/g," ");  // comprimimos espacios intermedios
    fraseCorrecta = fraseCorrecta.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");   // eliminamos signos de puntuación
    var longitudFrase = fraseCorrecta.length;

    if(fraseCorrecta!=" " && longitudFrase>0){          // Si la String no es " " y la longitud es mayor que 0
        numPalabras++;                                  // Hay 1 palabra como mínimo
        for (var i=0; i<longitudFrase; i++) {
            if(fraseCorrecta.charAt(i)==" "){           // Por cada espacio que encontremos,
                numPalabras++;                          // aumentamos el número de palabras
            }
        };
    } else {
        return numPalabras;
    }
    return numPalabras;
}

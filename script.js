var botonEncriptar = document.querySelector(".btn-encriptar")
var botonDesencriptar = document.querySelector(".btn-desencriptar")
var muneco = document.querySelector(".contenedor-muneco")
var Resultado = document.querySelector(".texto-resultado")
var contenedor = document.querySelector(".contenedor-parrafo")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante()
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptartexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante()
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptartexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector("cajatexto")
    return cajatexto.value
}   

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptartexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
       
}

function desencriptartexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
       
}

const btnCopiar = document.querySelector(".btn-copiar");
    btnCopiar.addEventListener("click", copiar = () =>{
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("log");
 })


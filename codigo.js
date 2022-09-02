const textoEntrada = document.querySelector(".entrada-texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoencriptado = encriptar(textoEntrada.value)
    mensaje.value= textoencriptado;
    mensaje.style.backgroundImage="none"
    textoEntrada.value= ""
}

function btnDesencriptar(){
    const textodesencriptado = desencriptar(textoEntrada.value)
    mensaje.value= textodesencriptado;
    mensaje.style.backgroundImage="none"
    textoEntrada.value= ""
}


function encriptar(stringEncriptado){

        let matrizcodigo = [["i","imes"],["e","enter"],["a","ai"],["o","ober"],["u","ufat"]];
        stringEncriptado= stringEncriptado.toLowerCase();
       
        alert("Su mensaje sera encriptado")

        for(let i=0; i < matrizcodigo.length;i++) {
            if(stringEncriptado.includes (matrizcodigo[i][0])){
                stringEncriptado=stringEncriptado.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
                
            }     
    }
    return stringEncriptado
}

function desencriptar(stringDesencriptado){
    let matrizcodigo = [["i","imes"],["e","enter"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado= stringDesencriptado.toLowerCase();

    alert("Su mensaje sera desencriptado")

    for(let i=0; i< matrizcodigo.length; i++) {
        if(stringDesencriptado.includes (matrizcodigo[i][1]))
        stringDesencriptado=stringDesencriptado.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0])
    }
    return stringDesencriptado;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value=""
    alert("Tu texto fue copiado con exito")
}
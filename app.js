function encriptar_texto() {
    let texto_entrante = document.getElementById("txt_entrada").value;

    let textoEncriptado = texto_entrante
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    if (texto_entrante.lenght !=0) {
    texto_entrante = textoEncriptado;
    }

    let texto_saliente = document.getElementById("txt_salida");
    texto_saliente.value = textoEncriptado;
}

function desencriptar_texto() {
    let texto = document.getElementById("txt_entrada").value;

    let texto_desencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.lenght !=0) {
    texto = texto_desencriptado;
    }

    let texto_saliente = document.getElementById("txt_salida");
    texto_saliente.value = texto_desencriptado;
}

function mostrar() {
    let elemento_txt = document.getElementById("txt_salida");
    let elemento_btn = document.getElementById("btn_copiar");

    elemento_txt.style.display = "flex";
    elemento_btn.style.display = "flex"
}

function mostrar_info() {
    let elemento_muneco = document.getElementById("img_muneco");
    let elemento_informacion = document.getElementById("id_informacion");
    
    elemento_muneco.style.display = "flex";
    elemento_informacion.style.display = "flex";
}


function ocultar() {
    let elemento_muneco = document.getElementById("img_muneco");
    let elemento_informacion = document.getElementById("id_informacion");
    
    elemento_muneco.style.display = "none";
    elemento_informacion.style.display = "none";
}

function ocultar_salida() {
    let elemento_texto = document.getElementById("txt_salida");
    let elemento_msj = document.getElementById("btn_copiar");
    elemento_texto.style.display = "none";
    elemento_msj.style.display = "none";
}

function copiar() {
    let texto_copiado = document.getElementById("txt_salida").value;
    navigator.clipboard.writeText(texto_copiado);
}

function determina_mayusculas(contenido) {
    const regex = /[A-Z]/;
    return regex.test(contenido);
}

function determina_tildes(contenido) {
    const regex = /[áéíóúÁÉÍÓÚ]/;
    return regex.test(contenido);
}

function encriptar() {
    let contenido = document.getElementById("txt_entrada").value;

    let tiene_mayusculas = determina_mayusculas(contenido);

    let tiene_tildes = determina_tildes(contenido);

    let resultado = document.getElementById("msj_titulo");
    
    if (tiene_mayusculas) {
        resultado.textContent = "El texto no debe contener letras mayúsculas ni tildes";
        ocultar_salida();
        mostrar_info();
    } else if (tiene_tildes) {
        resultado.textContent = "El texto no debe contener letras mayúsculas ni tildes";
        ocultar_salida();
        mostrar_info();
    } else {
        encriptar_texto();
        ocultar();
        mostrar();
    }
}

function desencriptar() {
    let contenido = document.getElementById("txt_entrada").value;

    let tiene_mayusculas = determina_mayusculas(contenido);

    let tiene_tildes = determina_tildes(contenido);

    let resultado = document.getElementById("msj_titulo");
    
    if (tiene_mayusculas) {
        resultado.textContent = "El texto no debe contener letras mayúsculas ni tildes";
        ocultar_salida();
        mostrar_info();
    } else if (tiene_tildes) {
        resultado.textContent = "El texto no debe contener letras mayúsculas ni tildes";
        ocultar_salida();
        mostrar_info();
    } else {
        desencriptar_texto();
        mostrar();
        ocultar();
    }
}
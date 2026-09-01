const boton = document.getElementById("cambiarColor");
const codigoColor = document.getElementById("codigoColor");

function generarColor() {
    const letras = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }

    return color;
}

boton.addEventListener("click", function() {
    const color = generarColor();

    document.body.style.backgroundColor = color;
    codigoColor.textContent = color;
});
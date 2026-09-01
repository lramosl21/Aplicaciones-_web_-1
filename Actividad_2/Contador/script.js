let contador = 0;

const numero = document.getElementById("contador");
const aumentar = document.getElementById("aumentar");
const disminuir = document.getElementById("disminuir");

aumentar.addEventListener("click", function() {
    contador++;
    numero.textContent = contador;
});

disminuir.addEventListener("click", function() {
    contador--;
    numero.textContent = contador;
});
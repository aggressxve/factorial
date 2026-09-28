const inputNumero = document.getElementById("numero");
const botonCalcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return (factorial(n - 1) * n);
    }
}

botonCalcular.addEventListener("click", function () {
    const valor = inputNumero.value;
    const numero = parseInt(valor);
    var result;
    if (numero <= 0) {
        result = 1;
        resultado.textContent = "Solo numeros positivos.";
    } else {
        result = factorial(numero);
        resultado.textContent = `El factorial de ${numero} es: ${result}`;
    }
});
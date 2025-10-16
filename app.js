function calcularArea()
{
    const ladoArea = document.getElementById("inputLado");
    const resultado = document.getElementById("resultado");
    const lado = parseFloat(ladoArea.value);

    if (isNaN(lado) || lado <= 0) {
        resultado.textContent = "Error ingrese un numero valido."
        resultado.className = "mensaje-error";
    } else {
        const area = lado*lado;
        resultado.textContent = `El área del cuadrado es: ${area}`;
        resultado.className = "mensaje-correcto"
    }

    
}
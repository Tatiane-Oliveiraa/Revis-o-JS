function calcularTroco(pago, preco) {
    return pago - preco;
}

let resultado = calcularTroco(100, 89)

console.log(`Seu troco é ${resultado} reais.`);
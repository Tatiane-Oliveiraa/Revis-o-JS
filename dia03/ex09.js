let numeros = [1, 2, 3, 4, 5];

let maior = numeros[2];

for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log(`O maior número é ${maior}`);
function maiorDeIdade(idade) {
    if (idade >= 18){
        return true;
    } else {
        return false;
    }
}

console.log(maiorDeIdade(23));

const maiorDeIdade1 = idade => idade >= 18;

console.log(maiorDeIdade1(16));
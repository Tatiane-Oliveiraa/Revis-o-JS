const numbers = [1, 2, 3, 4, 5]

console.log(numbers[0]); // primeiro
console.log(numbers[numbers.length - 1]); // último


numbers.push(6);
numbers.pop()

console.log(numbers.includes(10));

console.log(numbers);

function buscarItem(lista, item) {
    if (lista.includes(item)) {
        return "Contém!";
    } else {
        return "Não contém!";
    }
}

const myLista = [1, 2, 3, 4, 5];
console.log(buscarItem(myLista, 4));



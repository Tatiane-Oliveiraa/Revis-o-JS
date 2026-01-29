function parOuImpar(n) {
    if (n % 2 === 0) {
        return "Esse número é par!"
    } else if (n === 0) {
        return "Esse número é zero!"
    } else {
        return "Esse número é impar"
    }
}

console.log(parOuImpar(0))
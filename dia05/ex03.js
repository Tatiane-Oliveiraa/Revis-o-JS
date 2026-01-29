function parOuImpar(n) {
    if (n === 0) {
        return "Esse número é zero!";
    } else if (n % 2 === 0) {
        return "Esse número é par!";
    } else {
        return "Esse número é ímpar!";
    }
}

console.log(parOuImpar(0));

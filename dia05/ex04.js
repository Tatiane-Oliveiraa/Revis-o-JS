function temSaldo(saldo) {
    if (saldo > 0) {
        return `Seu saldo é R$ ${saldo}`;
    } else if (saldo === 0) {
        return "Você não tem saldo nenhum!";
    } else {
        return "Seu saldo está negativo!";
    }
}

console.log(temSaldo(0));

function temSaldo(saldo) {
    if ( saldo > 0) {
        return `Seu saldo é R$ ${saldo}`;
    } else {
        return `Você não tem saldo nenhum!`;
    }
}

console.log(temSaldo(0));
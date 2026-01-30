const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function numerosGrandes(lista) {
  return lista.filter(n => n > 6);
}

console.log(numerosGrandes(lista));

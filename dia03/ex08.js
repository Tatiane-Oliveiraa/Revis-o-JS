let nomes = [];

while (nomes !== "sair") {
    let nome = prompt("Qual o nome?");
    nomes.push(nome);
}

console.log(nomes);

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
let notas = [];

let nota1 = Number(prompt("Qual a primeira nota?"));
let nota2 = Number(prompt("Qual a segunda nota?"));
let nota3 = Number(prompt("Qual a terceira nota?"));

notas.push(nota1, nota2, nota3);

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 6) {
    console.log("Aprovado");
}else {
    console.log("Reprovado");
}
/*
## Exercício 4 – `else if`

Peça a **hora**.

- < 12 → `"Bom dia"`
- < 18 → `"Boa tarde"`
- ≥ 18 → `"Boa noite"`
*/

let hora = Number(prompt("Qual a hora atual?"));

if (hora<12) {
    console.log("Bom dia")
}else if (hora < 18) {
    console.log("Boa tarde")
}else {
    console.log("Boa noite")
}
// Declarações

let nome = "Fiap";
const idade = 30;
let altura = 1.75;
let estudante = true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof altura);
console.log(typeof estudante);

// MÉTODOS DE EXIBIÇÃO

alert("Bem-vindo ao Sistem")

let nomeUsuario= prompt("Qual e o nome do Usuário?")
console.log(`Olá, ${nomeUsuario}`)

let desejaContinuar = confirm("Deseja Realmente Continuar??")
console.log("Respota",desejaContinuar)

// Operadores (Aritméticos, comparação e lógicos)


// Aritméticos

let soma = 10 + 5;
console.log(soma)
let multiplicacao = 4 * 2;
console.log(multiplicacao)
let subtracao = 10 - 5;
console.log(subtracao)
let resto = 10 % 3;
console.log(resto)
let divisao = 5 / 3;
console.log(divisao)

// Comparação

let a = 10;
let b = "10";

// = (Atribuir)
// == (Compara o valor)
// === (Compara o valor e o tipo da variável)

console.log(a == b);
console.log(a === b);
console.log(a > b); // Maior
console.log(a >= b); // Maior ou igual
console.log(a != b); // Diferente
console.log(a < b); // Menor
console.log(a <= b); // Menor ou igual

// Operação AND && - AS DUAS TEM QUE SER VERDADEIRAS
console.log(b < a && a > b);
// Operação OR || - UMA DAS OPERAÇÕES TEM QUE SER VERDADEIRA
console.log(a > 20 || b>= a);

let temIdade = 18;
let habilitacao = true;

let dirigir =(temIdade >= 18) && habilitacao;
console.log("O Usuário pode dirigir ?", dirigir);

// ESTRUTURA CONDICIONAL

// if
if(false){
    console.log("É VERDADEIRO")
}

// if/else
if(false){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}
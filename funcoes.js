// A função é declarada com palavra reservada "function" + nome da função ();
// Os paranteses guardarão o parâmetro.
function saudacao(nome){
    console.log("Olá, ", nome);
};


saudacao("Yasmim");

// quando uma função retornar um valor, usar a palavra reservada "return".
function calcDobro(numero){
    return numero*2;
};
// Armazena a função com parâmetro dentro de uma constante ou variável
const numeroDobro = calcDobro(30);
console.log("O dobro de 30, é", numeroDobro);

// ARROW FUNCTION
const saud = (nome) => {
    console.log("Oi, ", nome);
};
saud("Mim");

const dobro = (num) => {
    return num*2;
};
const numDobrado = dobro(7);
console.log("O dobro de 7 é: ", numDobrado);

// FUNÇÃO SIMPLIFICADA
// const + nomedafuncao + parâmetro + ação.
const saudacao2 = nome => console.log ("Oi,", nome);
saudacao2("Yasmim");

const dobro2 = numero=> numero*2;
const numDobro2 = dobro2(13);
console.log("O dobro de 13 é: ", numDobro2);
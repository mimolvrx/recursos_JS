// um set é uma estrura de dados que guarda valores únicos.
let numeros = new Set();
numeros.add(1);
numeros.add(2);
numeros.add(2); // não será adicionado

console.log(numeros);

// Quando usar um Set?
// Quando deseja remover a duplicidade em um array
// Quando desejar uma verificação rápida de valores existentes
let arrayComDuplicidade = [1,2,3,4,4,5];
let arraySemDuplicidade = [...new Set (arrayComDuplicidade)];

console.log("Array com duplicidade", arrayComDuplicidade);
console.log("Array sem duplicidade", arraySemDuplicidade);

// Estrutura MAP
// Armazena informações associadas a chaves especificas;
// mantendo a ordem de inserção de informações
let mapa = new Map();

//(chave, valor)
mapa.set('nome', 'Yasmim');
mapa.set('idade', 19);

console.log(mapa.get('nome'));
console.log(mapa.get('idade'));

// usando diferentes tipos de chaves (funções, valor)
let chaveFuncao = function() {};
let chaveObjeto = {};

let mapaVariado = new Map();

mapaVariado.set(chaveFuncao, 'Valor da função.');
mapaVariado.set(chaveObjeto, 'Valor do objeto.');

console.log(mapaVariado.get(chaveFuncao));
console.log(mapaVariado.get(chaveObjeto));

// DIFERENÇA ENTRE ARRAY, SET E MAP:
//Array: Armazena varios valores podendo ter duplicidae na informação.
//Set: Verifica os valores, guardando valores unicos, evitando duplicidade.
//Map: Armazena pares de informações com chave e valor unico (informações específicas).
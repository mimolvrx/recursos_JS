// Arrays me permitem colocar varios dados dentro de um unico espaco.

const frutas = ['uva', 'kiwi', 'banana', 'melancia', 'abacaxi'];
//const frutas = [0,1,2,3,4];

//Exibir a primeira fruta do array
console.log("Primeira fruta:", frutas[0]);
//Exibir a ultima fruta do array
console.log("Ultima fruta:", frutas[4]);

//exibindo o total de frutas do array
console.log("Total de frutas: ", frutas.length);

//o método push serve para adicionar uma nova informação ao array.
frutas.push('melão');
console.log("Total de frutas, depois do push: ", frutas.length);
console.log(frutas);

// método para remover inforação do array chamado: splice
// 1º parametro: posição do array.
// 2º parametro: quantos itens remover.
// removendo abacaxi:
frutas.splice(4,1);
console.log(frutas);

// percorrer um array
// 3 maneiras de percorrer um array: for, for/of, forEach.

// com laço FOR
for (let i = 0;i<frutas.length;i++) {
    console.log("Indice:", i, "");
    console.log(frutas[i]);
};

// Usando: forEach (Para cada um). terá um indice e valor
// maneira de percorrer usando índice e valor.
console.log("Percorrendo com forEach");
// valor: valor de cada posição
// indice: é a posição no array
frutas.forEach((valor, indice) => {
    console.log("Indice: ", indice, valor);
});

// usando o metodo for/off(para/em).
// armazena a função dentro de uma variavel ou constante.
for(const fruta of frutas) {
    console.log("Fruta da vez: ", fruta);
};


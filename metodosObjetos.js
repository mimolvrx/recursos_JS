const pessoa = {
    nome: "Fernanda",
    idade: 26,
    pets: ["Buck"],
    nacionalidade: "Brasileira"
};

// a estrutura FOR IN  nos permite percorrer o objeto, dessa forma, retornará 
// todas as chaves do objeto, sendo: nome, idade, pets, nacionalidade.
for(const chave in pessoa) {
    console.log("Chave:", chave);
};

// acessando chave e valores do objeto:
for(const chave in pessoa){
    console.log("Chave:", chave);
    console.log("valor:", pessoa [chave]);
};

// MÉTODOS PARA OBJETOS

// Obtendo todas as chaves do objeto
const chaves = Object.keys(pessoa);


// obtendo todos os valores do objeto 
const valores = Object.values(pessoa);

// obtendo a chave e o valor do objeto
const entradas = Object.entries(pessoa);

console.log("Chaves:", chaves);
console.log("Valores:", valores);
console.log("Entradas (chave/valor):", entradas);
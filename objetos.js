// Criando objeto em JS

const pessoa = {
    nome: "Maicon",
    idade: 34,
    profissão: "Cantor"
};

// adicionando nova proriedade no objeto pesoa
pessoa.sobrenome = "Jackson";

// exibindo propriedades do objeto
console.log("Nome:", pessoa.nome);
console.log("Sobrenome:", pessoa.sobrenome);

const livro = {
    titulo: "O pequeno Principe",
    paginas: "300"
};

// adicionando novas propriedades ao objeto livro
livro.publicado = true; // propriedade do tipo boolean
livro.idiomas = [
    "Portugues", "Inglês", "Espanhol"
]; //propriedade com array

// adicionando informações ao Array idioma, presente no objeto livro.
livro.idiomas.push("Mandarim");
livro.idiomas.push("Francês");

console.log("Livro", livro);

// deletando propriedade paginas, do objeto livro
delete livro.paginas;

console.log("Livro depois de remover as paginas:", livro);

const autor = {
    nome: "Antoine de Saint Exupery",
    nacionalidade: "Francês",
    idade: 72
};

//console.log("Autor:", autor);

// adicionando o objeto "autor"" inteiro para propriedade do objeto livro
livro.autor = autor;
console.log(livro);

// exibindo o objeto autor atraves do livro
console.log("Autor do livro:", livro["autor"]);
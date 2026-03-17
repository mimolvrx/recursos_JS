// Selecionando elementos do HTML com querySelector
const loadDataBtn = document.querySelector("#loadDataBtn");
const listaPessoas = document.querySelector("#listaPessoas");

async function carregarPessoas() {
    
    try {
        // faz a requisição do JSON
        const response = await fetch("pessoas.json");
        // Converte a resposta da requisição para um objeto JavaScript
        const pessoas = await response.json();

        console.log(pessoas);

        pessoas.forEach((pessoa) => {

            const li = document.createElement("li");

            li.innerHTML = `
            <strong>${pessoa.nome}</strong><br>
            idade: ${pessoa.idade}<br>
            Curso: ${pessoa.detalhes_estudo.curso}
            `;
            listaPessoas.appendChild(li);


        });

    
    }catch (error){
        console.error("Erro ao carregar o JSON", error);
    }
};

// Evento para o botão de carregamento de pessoas
loadDataBtn.addEventListener("click", carregarPessoas);



// Outras opções de conversão para JASON
const jsonString= `{"nome:" "João", "idade:" 30}`
// constante com JSON convertido em objeto
const objeto = JSON.parse(jsonString)

// DE OBJETO PARA JSON
// transformando objeto em JSON
const objeto_JSON = JSON.stringify(objeto);
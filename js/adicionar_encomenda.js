var botaoAdicionar = document.querySelector("#adicionar")

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    // Capturando o formulário
    var form = document.querySelector('#adiciona');
    // captura da nova encomenda
    var nova_encomenda = obtemEncomenda(form);
    //Captura a tabela de encomendas
    var tabela = document.querySelector('#tabela-clientes')
    // Insere a nova encomenda
    tabela.appendChild(montaTr(nova_encomenda))
    // Limpa o Formulário
    form.reset();
});
// Captura de dados do formulário
function obtemEncomenda(formulario) {
    var encomenda = {
        nome: formulario.nome,
        qtd: formulario.qtd,
        produto: formulario.produto,
        unitario: formulario.unitario
    }

    return encomenda;
}

// Função para adicionar nova encomenda na tabela
function adicionaEncomenda(dadosEncomenda) {
    // Captura a tavele de encomendas
    var tabela = document.querySelector("#tabela-clientes");
    // Insere a nova encomenda na tabela
    tabela.appendChild(montaTr(dadosEncomenda))
}

// Função para criar nova linha
function montaTr(dadosNovaEncomenda) {
    var linha = document.createElement("tr");
    linha.appendChild(montaTd(dadosNovaEncomenda.nome));
    linha.appendChild(montaTd(dadosNovaEncomenda.qtd));
    linha.appendChild(montaTd(dadosNovaEncomenda.produto));
    linha.appendChild(montaTd(formata_valor(dadosNovaEncomenda.unitario)));
    linha.appendChild(montaTd(calcula_total(dadosNovaEncomenda.qtd,dadosNovaEncomenda.unitario)));

    return linha;

}

// Função para criar nova coluna
function montaTd(dadoColuna) {
    var coluna = document.createElement("td");
    coluna.textContent = dadoColuna;

    return coluna;
}
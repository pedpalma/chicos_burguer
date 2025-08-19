// document.querySelector(".total").textContent = document.querySelector(".qtd").textContent * document.querySelector(".unitario").textContent

// Captura de encomendas da tabela
var clientes = document.querySelectorAll(".cliente");

// Estrutura de repetição para passar por todas as encomendas e calcular o total
for (var count = 0; count < clientes.length; count++) {

    // Qtd de encomendas
    var qtd = clientes[count].querySelector(".qtd").textContent;

    // Valor de cada encomenda
    var unitario = clientes[count].querySelector(".unitario").textContent;

    // Verifica se a qtd é valida
    if (qtd < 1 || isNaN(qtd)) {

        //A qtd é menor que 1 ou NaN
        clientes[count].querySelector(".qtd").textContent = "Quantidade Inválida!";

        // Deixa o texto qtd em vermelho
        // clientes[count].querySelector(".qtd").style.color = "red";

        // Linha toda com texto em vermelho
        //clientes[count].style.color = "red";

        // Linha toda vermelha e texto em branco
        clientes[count].style.backgroundColor = "red";

        clientes[count].style.color = "white";

    } else {

        // Verifica se o unitario é valido
        if (unitario < 1 || isNaN(unitario)) {

            // Unitario é menor que o mínimo ou NaN
            clientes[count].querySelector(".unitario").textContent = "Valor incorreto";

            // Linha toda vermelha e texto em branco
            clientes[count].style.backgroundColor = "red";

            clientes[count].style.color = "white";

        } else {

            // Exibe o total
            clientes[count].querySelector(".total").textContent = calcula_total(qtd, unitario);

        }

    }


}

//Função de calculo do valor total
function calcula_total(qtd, unit) {

    var total = 0;

    total = qtd * unit;

    return total;
}

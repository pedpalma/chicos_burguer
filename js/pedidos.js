// document.querySelector(".total").textContent = document.querySelector(".qtd").textContent * document.querySelector(".unitario").textContent

// Captura de encomendas da tabela
var clientes = document.querySelectorAll(".cliente");

// Estrutura de repetição para passar por todas as encomendas e calcular o total
for(var count=0; count<clientes.length; count++){

    // Qtd de encomendas
    var qtd = clientes[count].querySelector(".qtd").textContent;

    // Valor de cada encomenda
    var unitario = clientes[count].querySelector(".unitario").textContent;

    // Exibe o total
    clientes[count].querySelector(".total").textContent = calcula_total(qtd,unitario);

}

//Função de calculo do valor total
function calcula_total(qtd,unit){
    
    var total = 0;

    total = qtd * unit;

    return total;
}
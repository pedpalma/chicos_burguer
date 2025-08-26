var botao_adicionar = document.querySelector("#adicionar")

var linha = document.createElement("tr");

var coluna = document.createElement("td");

botao_adicionar.addEventListener("click",function(event){

    event.preventDefault();
    
    linha.appendChild(coluna);

});
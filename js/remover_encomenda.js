let tabela = document.querySelector("table");

// Captura o dblclik
tabela.addEventListener("dblclick", function(event){
    //Efeito linha
    event.target.parentNode.classList.add('fadeOut')
    //Atrasa a exclusão da linha
    setTimeout(function(){
    // Exclui linha
    event.target.parentNode.remove();
    },450);
});
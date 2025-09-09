var campo_filtro = document.querySelector('#filtar_tabela');

campo_filtro.addEventListener('input', function () {
    var clientes = document.querySelectorAll('.cliente');

    if (this.value.length > 0) {
        for (var cli = 0; cli < clientes.length; cli++) {
            var cliente = clientes[cli];
            var nome = cliente.querySelector('.nome').textContent;
            // var expressao = new RegExp(this.value, 'i')

            var comparavel = nome.substring(0, this.value.length);
            var comparavel_min = comparavel.toLowerCase();
            var filtro_busca_min = this.value.toLowerCase();
            // Verifica se o nome é igual ao contador
            if (filtro_busca_min != comparavel_min) {
                // Torna invisivel
                cliente.classList.add('invisivel');
            } else {
                // Torna visivel
                cliente.classList.remove('invisivel');
            }
        }
    } else {
        // Não há filtro. Mostra tudo
        for (var cli = 0; cli < clientes.length; cli++) {
            clientes[cli].classList.remove('invisivel');
        }
    }
});
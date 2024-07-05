const veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];

function mostrarVeiculos(filtrados) {
    const listaVeiculos = document.getElementById('listaVeiculos');
    listaVeiculos.innerHTML = '';

    filtrados.forEach(veiculo => {
        const veiculoElemento = document.createElement('div');
        veiculoElemento.classList.add('card', 'mb-3');
        veiculoElemento.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${veiculo.marca} ${veiculo.modelo}</h5>
                <p class="card-text">Ano: ${veiculo.anoFabricacao}</p>
                <p class="card-text">Cor: ${veiculo.cor}</p>
                <p class="card-text">Tipo: ${veiculo.tipo}</p>
                <p class="card-text">Quilometragem: ${veiculo.kilometragem} km</p>
                <p class="card-text">Número de Portas: ${veiculo.numeroPortas}</p>
                <p class="card-text">Preço: R$${veiculo.preco}</p>
            </div>
        `;
        listaVeiculos.appendChild(veiculoElemento);
    });
}

function filtrarVeiculos() {
    const tipo = document.getElementById('tipoFiltro').value;
    const filtrados = veiculos.filter(veiculo => tipo ? veiculo.tipo === tipo : true);
    mostrarVeiculos(filtrados);
}

document.addEventListener('DOMContentLoaded', () => {
    const listaVeiculos = document.getElementById('listaVeiculos');
    const tipoFiltro = document.createElement('select');
    tipoFiltro.id = 'tipoFiltro';
    tipoFiltro.className = 'form-select mb-4';
    tipoFiltro.innerHTML = `
        <option value="">Todos</option>
        <option value="carro">Carro</option>
        <option value="motocicleta">Motocicleta</option>
        <option value="caminhao">Caminhão</option>
    `;
    listaVeiculos.before(tipoFiltro);
    tipoFiltro.addEventListener('change', filtrarVeiculos);
    mostrarVeiculos(veiculos);
});

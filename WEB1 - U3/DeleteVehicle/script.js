document.addEventListener('DOMContentLoaded', carregarVeiculos);

function carregarVeiculos() {
    const veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    const listaVeiculos = document.getElementById('listaVeiculos');
    listaVeiculos.innerHTML = '';

    veiculos.forEach((veiculo, index) => {
        const veiculoElemento = document.createElement('div');
        veiculoElemento.classList.add('mb-3', 'd-flex', 'justify-content-between', 'align-items-center');
        veiculoElemento.innerHTML = `
            <span>${veiculo.marca} ${veiculo.modelo} - Ano: ${veiculo.anoFabricacao}</span>
            <button class="btn btn-danger" onclick="excluirVeiculo(${index})">Excluir</button>
        `;
        listaVeiculos.appendChild(veiculoElemento);
    });
}

function excluirVeiculo(index) {
    let veiculos = JSON.parse(localStorage.getItem('veiculos')) || [];
    veiculos.splice(index, 1);
    localStorage.setItem('veiculos', JSON.stringify(veiculos));
    carregarVeiculos();
}

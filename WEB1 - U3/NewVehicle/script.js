const veiculos = [];

function salvarVeiculo() {
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var anoFabricacao = document.getElementById("anoFabricacao").value;
    var cor = document.getElementById("cor").value;
    var tipo = document.getElementById("tipo").value;
    var kilometragem = document.getElementById("kilometragem").value;
    var numeroPortas = document.getElementById("numeroPortas").value;
    var preco = document.getElementById("preco").value;

    var veiculo = {
        marca: marca,
        modelo: modelo,
        anoFabricacao: anoFabricacao,
        cor: cor,
        tipo: tipo,
        kilometragem: kilometragem,
        numeroPortas: numeroPortas,
        preco: preco
    };

    veiculos.push(veiculo);
    localStorage.setItem('veiculos', JSON.stringify(veiculos));
    alert('Veículo cadastrado com sucesso!');
    document.querySelector('form').reset();
    console.log('Veículos salvos:', veiculos);
}

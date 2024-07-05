const contatos = [];

function salvarContato() {
    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var endereco = document.getElementById('endereco').value;

    var novoContato = {
        nome: nome,
        cpf: cpf,
        dataNascimento: dataNascimento,
        endereco: endereco
    };

    if(nome === '' || cpf === '' || dataNascimento === '' || endereco === ''){
        window.alert('Preencha todos os campos!');
        return;
    }

    contatos.push(novoContato);

    document.getElementById('nome').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('dataNascimento').value = '';
    document.getElementById('endereco').value = '';

    window.alert('Contato salvo com sucesso!');
    
    console.log(contatos);
}

function mostrarContatos(mostrarAlert){
    var listaContatos = document.getElementById('listaContatos');
    listaContatos.innerHTML = '';

    if (contatos.length === 0) {
        window.alert('Nenhum contato cadastrado!');
        return;
    }

    contatos.forEach((contato, index) => {
        var card = document.createElement('div');
        card.className = 'card mb-3';
        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        var nome = document.createElement('h5');
        nome.className = 'card-title';
        nome.textContent = contato.nome;
        var cpf = document.createElement('p');
        cpf.className = 'card-text';
        cpf.textContent = 'CPF: ' + contato.cpf;
        var dataNascimento = document.createElement('p');
        dataNascimento.className = 'card-text';
        dataNascimento.textContent = 'Data de Nascimento: ' + contato.dataNascimento;
        var endereco = document.createElement('p');
        endereco.className = 'card-text';
        endereco.textContent = 'Endereço: ' + contato.endereco;

        var botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.className = 'btn btn-danger';
        botaoExcluir.onclick = function() { excluirContato(index); };

        cardBody.appendChild(nome);
        cardBody.appendChild(cpf);
        cardBody.appendChild(dataNascimento);
        cardBody.appendChild(endereco);
        cardBody.appendChild(botaoExcluir);
        card.appendChild(cardBody);
        listaContatos.appendChild(card);
    });
    if(mostrarAlert){
        window.alert('Contatos listados!');
    }
}

function excluirContato(index) {
    contatos.splice(index, 1);
    mostrarContatos(false);
    window.alert('Contato excluído!');
}

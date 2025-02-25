// Declaração do array para armazenar os amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Captura o campo de entrada (atualizado para usar o ID 'amigo')
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();
    
    // Validação da entrada
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    // Atualiza o array de amigos
    amigos.push(nome);
    
    // Limpa o campo de entrada
    inputAmigo.value = '';
    
    // Atualiza a lista visível
    atualizarListaAmigos();
}

// Função para atualizar a lista visual
function atualizarListaAmigos() {
    const listaElemento = document.getElementById('listaAmigos');
    listaElemento.innerHTML = '';
    
    // Cria um elemento de lista para cada amigo
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElemento.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    // Validação se há amigos disponíveis
    if (amigos.length === 0) {
        alert('Não há amigos para sortear. Adicione alguns nomes primeiro!');
        return;
    }
    
    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostra o resultado (atualizado para criar um item de lista)
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = ''; // Limpa resultados anteriores
    
    const li = document.createElement('li');
    li.innerHTML = `O amigo sorteado foi: <strong>${amigoSorteado}</strong>`;
    elementoResultado.appendChild(li);
}
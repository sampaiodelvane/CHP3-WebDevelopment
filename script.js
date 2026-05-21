// --- Variáveis Globais ---
let listaJogos = ["The Legend of Zelda", "Elden Ring", "Minecraft"];

// --- Funções de Login ---

function realizarLogin() {
    const userInp = document.getElementById('username').value;
    const passInp = document.getElementById('password').value;
    const errorMsg = document.getElementById('login-error');

    // Validação de campos vazios
    if (userInp === "" || passInp === "") {
        errorMsg.innerText = "Preencha todos os campos!";
        return;
    }

    // Verificação de credenciais
    if (userInp === "aluno" && passInp === "fiap2025") {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('crud-section').style.display = 'block';
        renderizarLista();
    } else {
        errorMsg.innerText = "Usuário ou senha incorretos!";
    }
}

function logout() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('crud-section').style.display = 'none';
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    document.getElementById('login-error').innerText = "";
}

// --- Funções do CRUD ---

function renderizarLista() {
    const listaUl = document.getElementById('lista-jogos');
    listaUl.innerHTML = ""; // Limpa a lista atual

    listaJogos.forEach((jogo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${jogo}</span>
            <div class="actions">
                <button class="edit-btn" onclick="editarItem(${index})">Editar</button>
                <button class="remove-btn" onclick="removerItem(${index})">Remover</button>
            </div>
        `;
        listaUl.appendChild(li);
    });
}

function adicionarAoInicio() {
    const input = document.getElementById('new-item');
    const valor = input.value.trim();
    const errorMsg = document.getElementById('crud-error');

    if (valor === "") {
        errorMsg.innerText = "O nome do jogo não pode estar vazio!";
        return;
    }

    listaJogos.unshift(valor); // Adiciona ao início
    input.value = "";
    errorMsg.innerText = "";
    renderizarLista();
}

function adicionarAoFinal() {
    const input = document.getElementById('new-item');
    const valor = input.value.trim();
    const errorMsg = document.getElementById('crud-error');

    if (valor === "") {
        errorMsg.innerText = "O nome do jogo não pode estar vazio!";
        return;
    }

    listaJogos.push(valor); // Adiciona ao final
    input.value = "";
    errorMsg.innerText = "";
    renderizarLista();
}

function editarItem(index) {
    const novoValor = prompt("Edite o nome do jogo:", listaJogos[index]);

    // Validação: se cancelar (null) ou deixar vazio, não faz nada
    if (novoValor !== null && novoValor.trim() !== "") {
        listaJogos[index] = novoValor.trim();
        renderizarLista();
    } else if (novoValor !== null && novoValor.trim() === "") {
        alert("O nome não pode ser vazio! Alteração descartada.");
    }
}

function removerItem(index) {
    // Remoção baseada na posição (índice)
    listaJogos.splice(index, 1);
    renderizarLista();
}

// Chamada inicial para garantir que a lista comece com os itens base (se já estiver logado/visível)
// No fluxo atual, ela é chamada dentro do realizarLogin()

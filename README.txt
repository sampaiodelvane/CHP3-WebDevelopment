CP3 - CRUD e IA Generativa
1. IAs Consultadas
Para o desenvolvimento deste projeto, foram consultadas as seguintes Inteligências Artificiais:
1	ChatGPT-4 (OpenAI)
2	Claude 3.5 Sonnet (Anthropic)
3	Gemini 1.5 Pro (Google)

2. Prompt Utilizado
Prompt Inicial e Final (Não houve necessidade de refinamento):

Crie uma aplicação web completa (HTML, CSS e JavaScript puro) para um sistema de cadastro de "Catálogo de Jogos Favoritos".

Requisitos Funcionais:
4	Tela de Login:
◦	Credenciais: Usuário "aluno" e Senha "fiap2025".
◦	Validação: Campos não podem ser vazios.
◦	Feedback: Mostrar mensagem de erro na tela para credenciais incorretas.
◦	Transição: Após login, ocultar formulário e mostrar a área da lista.
5	Lista de Jogos (CRUD):
◦	Iniciar com 3 jogos (ex: "The Legend of Zelda", "Elden Ring", "Minecraft").
◦	Adicionar jogo ao final da lista.
◦	Adicionar jogo ao início da lista.
◦	Editar jogo (abrir um prompt ou campo, não permitir vazio, manter original se cancelar).
◦	Remover jogo individualmente pela posição (índice).
◦	A tela deve atualizar automaticamente após qualquer alteração.

Requisitos Técnicos:
•	Use apenas HTML, CSS e JavaScript Vanilla (sem frameworks).
•	Armazenamento: Use estritamente um ARRAY DE STRINGS para os dados (não use objetos).
•	Organização: Todo o código JS deve estar dentro de funções nomeadas.
•	Validação: Não permitir salvar itens vazios (mostrar erro na tela).

Entregue o código completo em blocos separados para index.html, style.css e script.js.

3. Análise das Respostas
ChatGPT-4
O ChatGPT-4 entregou um código funcional, porém apresentou alguns problemas de arquitetura. Ele misturou a lógica de manipulação do DOM (Document Object Model) com a lógica de manipulação de dados do array, o que dificulta a manutenção. Além disso, utilizou a função alert() nativa do navegador para exibir erros de validação, ignorando a instrução de mostrar a mensagem diretamente na tela. Por fim, falhou na validação da edição, permitindo que o usuário salvasse um item vazio.

Claude 3.5 Sonnet
O Claude 3.5 Sonnet gerou o código mais limpo e bem estruturado entre as três opções. Ele separou corretamente as responsabilidades, criando uma função genérica de renderização muito eficiente. O único ponto de atenção foi a inclusão do localStorage para persistência de dados. Embora não fosse proibido pelo enunciado, adicionou uma complexidade desnecessária para o escopo simples solicitado.

Gemini 1.5 Pro
O Gemini 1.5 Pro apresentou algumas falhas técnicas em sua resposta. O código HTML gerado continha IDs repetidos, o que é uma má prática e pode causar bugs no JavaScript. A função de remoção não utilizou corretamente o índice do array em uma das abordagens propostas. O erro mais grave foi ter esquecido completamente de implementar a funcionalidade de "adicionar ao início" da lista, focando apenas na adição ao final.

4. Justificativa da Escolha
A IA escolhida como base para o projeto foi o Claude 3.5 Sonnet. 

A decisão foi tomada porque o código gerado por esta IA foi o que melhor respeitou a restrição técnica de utilizar estritamente um array de strings e organizar a lógica em funções nomeadas. A modularidade do código facilitou muito a adaptação para atender perfeitamente a todos os requisitos do enunciado. 

As únicas modificações necessárias foram a remoção da lógica de localStorage (para manter a simplicidade exigida) e pequenos ajustes nas mensagens de erro para garantir que todas aparecessem no DOM conforme solicitado, além de garantir que a edição cancelada mantivesse o valor original intacto.

const prompt = require("prompt-sync")();
 
// Array para guardar os itens da lista
let listaDeCompras = [];
 
// Função para adicionar item
function adicionarItem() {
    let nome = prompt("Digite o nome do item: ");
    let quantidade = prompt("Digite a quantidade: ");
    listaDeCompras.push({ nome, quantidade });
    console.log("Item adicionado com sucesso!\n");
}
 
// Função para visualizar lista
function visualizarLista() {
    console.log("Lista de Compras:");
    if (listaDeCompras.length === 0) {
        console.log("A lista está vazia.");
    } else {
        listaDeCompras.forEach((item, index) => {
            console.log(`${index + 1}. ${item.nome} - ${item.quantidade}`);
        });
        console.log(""); // linha em branco
    }
}
 
// Função para remover item
function removerItem() {
    visualizarLista();
    let indice = parseInt(prompt("Digite o número do item que deseja remover: ")) - 1;
    if (indice >= 0 && indice < listaDeCompras.length) {
        listaDeCompras.splice(indice, 1);
        console.log(" Item removido com sucesso!");
    } else {
        console.log("Número inválido.");
    }
}
 
// Função do menu
function menu() {
    let opcao;
    do {
        console.log("=== MENU ===");
        console.log("1 - Adicionar item");
        console.log("2 - Visualizar lista");
        console.log("3 - Remover item");
        console.log("4 - Sair");
        opcao = prompt("Escolha uma opção: ");
 
        switch (opcao) {
            case "1":
                adicionarItem();
                break;
            case "2":
                visualizarLista();
                break;
            case "3":
                removerItem();
                break;
            case "4":
                console.log("Saindo do aplicativo...");
                break;
            default:
                console.log("Opção inválida!");
        }
    } while (opcao !== "4");
}
 
// Iniciar programa
menu();
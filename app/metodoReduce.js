import filtrarLivros from "./metodoFilter.js";

function calcularValorDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}

export default calcularValorDeLivrosDisponiveis;
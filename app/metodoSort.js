import { exibirOsLivrosNaTela } from "./metodoForEach.js";

function ordenarPorPreco(livros) {
    const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
}

export default ordenarPorPreco;
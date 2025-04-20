import { exibirOsLivrosNaTela } from "./metodoForEach.js";
import calcularValorDeLivrosDisponiveis from "./metodoReduce.js";

const elementoComValorTotalDeLivros = document.getElementById('valor_total_livros_disponiveis');

function filtrarLivros(event, livros) {
    const elementoBtn = event.target;
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorDeLivrosDisponiveis(livrosFiltrados);
        elementoComValorTotalDeLivros.innerHTML = `<div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`;
    }
};

export default filtrarLivros;   
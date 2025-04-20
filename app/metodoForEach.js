const pegarOsElementosDoslivros = document.getElementById('livros');
const elementoComValorTotalDeLivros = document.getElementById('valor_total_livros_disponiveis');

export function exibirOsLivrosNaTela(listaDeLivros) {
  elementoComValorTotalDeLivros.innerHTML = '';
  pegarOsElementosDoslivros.innerHTML = '';
    
    // para cada livro dentro da lista de livros eu quero fazer uma determinada ação
    listaDeLivros.forEach(livros => {
      // let disponibilidade = verificarDisponibilidadeDoLivro(livros);
      let disponibilidade = livros.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel';

        pegarOsElementosDoslivros.innerHTML += `<div class="livro">
      <img class="${disponibilidade}" src="${livros.imagem}" alt="${livros.alt}" />
      <h2 class="livro__titulo">
        ${livros.titulo}</h2>
      <p class="livro__descricao">${livros.autor}</p>
      <p class="livro__preco" id="preco">${livros.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livros.categoria}</span>
      </div>
    </div>`
    });
}

// function verificarDisponibilidadeDoLivro(livro) {
//   if (livro.quantidade > 0) {
//     return 'livro_imagens';
//   } else {
//     return 'livro_imagens indisponivel';
//   }
// }

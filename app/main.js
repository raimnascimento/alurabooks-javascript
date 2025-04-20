import aplicarDesconto from "./metodoMap.js";
import { exibirOsLivrosNaTela } from "./metodoForEach.js";
import filtrarLivros from "./metodoFilter.js";
import ordenarPorPreco from "./metodoSort.js";

let livros = [];
const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosApi();

// async = identifica a funcao como assíncrona, ou seja, ela vai funcionar independentemente, sem atrapalhar a execução do restante do código
async function getBuscarLivrosApi() {
    // sempre que chamar uma função async, deve ter o await
    // fetch: buscar informações de uma api e enviar infomações pro servidor
    const resposta = await fetch(endPointApi);
    livros = await resposta.json()
    let livrosComDesconto = aplicarDesconto(livros);

    exibirOsLivrosNaTela(livrosComDesconto);

    const btnFiltrarLivros = document.querySelectorAll('.btn');
    btnFiltrarLivros.forEach(btn => btn.addEventListener('click', () => filtrarLivros(event, livros)));

    const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
    btnOrdenarPorPreco.addEventListener('click', () => ordenarPorPreco(livros));
}



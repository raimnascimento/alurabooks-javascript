function aplicarDesconto(livros) {
    const desconto = 0.3;
    const livrosComDesconto = livros.map(livro => {
        // ...livro = pega tudo que tem de livro e az uma cópia
        // , preco = só que o preço vai alterar, sendo preço - desconto
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto;
}

export default aplicarDesconto;
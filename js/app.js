let valorTotal = 0;

function adicionar() {

    //recuperar valores
    let produto = document.getElementById('produto').value;
    let qtdProduto = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('$')[1];
    // Verificar se a quantidade inserida é válida
    if (isNaN(qtdProduto) || qtdProduto <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }
    //calcular preco do subtotal
    let preco = qtdProduto * valorProduto;
    let carrinho = document.getElementById('lista-produtos');
    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qtdProduto}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`
    //atualizar valor total
    valorTotal = valorTotal + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = '';

}

function limpar() {
    valorTotal = 0
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0,00'
}
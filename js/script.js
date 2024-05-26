const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const qtd = document.querySelector('#quantia span');
const burguer = document.querySelector('#menu-burguer'); 
const btnCloseMenu = document.querySelector('#btn-menu')
const menu = document.querySelector('#menu');


burguer.addEventListener('click', abrirMenu);
btnCloseMenu.addEventListener('click', fecharMenu);

// FUNÇÃO ABRIR MENU

function abrirMenu(){
    menu.classList.add('abrir');
}

function fecharMenu(){
    menu.classList.remove('abrir');
}

// CRIANDO FUNÇÕES DE ADICIONAR E REMOVER PRODUTO

let qtdProdutos = 0;

plus.addEventListener('click', adicionarProduto);
minus.addEventListener('click', removerProduto);

// FUNÇÃO DE ADICIONAR PRODUTOS

function adicionarProduto(){

    if(qtdProdutos < 10){
        qtdProdutos++;
    }
   
   qtd.textContent = qtdProdutos; // ATUALIZA O ELEMENTO DOM
 
}

// FUNÇÃO DE REMOVER PRODUTOS

function removerProduto(){
    if(qtdProdutos > 0){
        qtdProdutos--;
    }

    qtd.textContent = qtdProdutos; // ATUALIZA O ELEMENTO DOM
}

 
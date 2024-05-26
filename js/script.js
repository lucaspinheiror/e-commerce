const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const qtd = document.querySelector('#quantia span');

let qtdProdutos = 0;

const burguer = document.querySelector('#menu-burguer'); 
const btnCloseMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('#menu');

const body = document.body;

// FUNÇÕES DE ABRIR E FECHAR MENU

burguer.addEventListener('click', abrirMenu);
btnCloseMenu.addEventListener('click', fecharMenu);

function abrirMenu(){
    menu.classList.add('abrir');

    document.querySelector('#overlay').classList.add('active'); // FUNDO ESCURO 

    if(menu.style.overflow = 'auto'){
        body.style.overflow = 'hidden'   // IMPEDIR ROLAGEM COM MENU ABERTO
    } 
}

function fecharMenu(){
    menu.classList.remove('abrir');

    document.querySelector('#overlay').classList.remove('active');

    if(menu.style.overflow = 'hidden'){
        body.style.overflow = 'auto';
    }   
}

// FUNÇÕES DO SLIDER

// FUNÇÕES DE ADICIONAR E REMOVER PRODUTO

plus.addEventListener('click', adicionarProduto);
minus.addEventListener('click', reduzirProduto);

function adicionarProduto(){

    if(qtdProdutos < 10){
        qtdProdutos++;
    }
   
   qtd.textContent = qtdProdutos; // ATUALIZA O ELEMENTO DOM 
}


function reduzirProduto(){
    if(qtdProdutos > 0){
        qtdProdutos--;
    }

    qtd.textContent = qtdProdutos; // ATUALIZA O ELEMENTO DOM
}
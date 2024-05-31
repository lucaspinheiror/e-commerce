// VARIÁVEIS PARA MENU MOBILE

const burguer = document.querySelector('#burguer');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('#navigation');
const overlay = document.querySelector('.overlay');

// ISERIR E REDUZIR PRODUTO

const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const qtd = document.querySelector('#qtd-product span');

let qtdProdutos = 0;


// CART

const btnAddCart = document.querySelector('#add-cart'); // BOTÃO PARA ADICIONAR AO CART
const del = document.querySelector('#delete');
const btnCheck = document.querySelector('#btn-check');

const cart = document.querySelector('#cart');
const cartItens = document.querySelector('#cart-itens');
const contentCart = document.querySelector('#content-cart');
const cartFull = document.querySelector('#content-cart-full');
const cartEmpty = document.querySelector('#content-cart-empty');

const valorCart = document.querySelector('.cart-valor');
const multiplicador = document.querySelector('.multiplicador');
const price = document.querySelector('.price');

// FUNÇÕES DE ABRIR E FEHCAR MENU

burguer.addEventListener('click', abrirMenu);
closeBtn.addEventListener('click', fecharMenu);

function abrirMenu(){
    menu.classList.add('abrir');

    overlay.style.visibility = 'visible';
}

function fecharMenu(){
    menu.classList.remove('abrir');

    overlay.style.visibility = 'hidden';
}

// FUNÇÕES DE INSERIR E REDUZIR PRODUTO

plus.addEventListener('click', inserirProduto);
minus.addEventListener('click', reduzirProduto);

function inserirProduto(){

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

// FUNÇÃO TOGGLE CART

cart.addEventListener('click', toggleCart);

function toggleCart(){
    cartItens.classList.toggle('aberto');
}

// FUNÇÃO ADD CART

btnAddCart.addEventListener('click', adicionarCart);
del.addEventListener('click', removerProduto);

function adicionarCart(){

    if (qtdProdutos === 0) {
        alert('Valor inválido');
    } else {
        
        let valorAtual = parseInt(valorCart.textContent);

        if (valorAtual >= 30) {
            alert('Limite de 30 produtos alcançado');
        } else {
            
            if (valorAtual + qtdProdutos > 30) {
                alert('O valor ultrapassa o limite de 30 produtos, insira uma quantia menor');
            } else {

                valorCart.textContent = valorAtual + qtdProdutos;

                multiplicador.textContent = valorAtual + qtdProdutos;

                price.textContent = '$' + parseInt((valorAtual + qtdProdutos) * 125).toFixed(2);
    
                valorCart.style.visibility = 'visible';
            }
        }

        cartFull.style.display = 'inherit'   
        cartEmpty.style.display = 'none';
        btnCheck.style.display = 'inline'       
    }
}

function removerProduto(){
    
    valorCart.style.visibility = 'hidden';
    valorCart.textContent = 0;

    cartFull.style.display = 'none';
    cartEmpty.style.display = 'flex'
    btnCheck.style.display = 'none';
}

// FUNÇÃO SLIDER    

let currentIndex = 0;

function updateButtons() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Enable or disable the prev button
    if (currentIndex === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    // Enable or disable the next button
    if (currentIndex === totalSlides - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Determine the new index
    let newIndex = currentIndex + direction;

    // Ensure the new index is within bounds
    if (newIndex < 0 || newIndex >= totalSlides) {
        return; // Do nothing if out of bounds
    }

    // Hide current slide
    slides[currentIndex].style.display = 'none';

    // Update to new index
    currentIndex = newIndex;

    // Show new slide
    slides[currentIndex].style.display = 'block';

    // Update button states
    updateButtons();
}

// Initialize the slider by showing the first slide and setting button states
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    slides[currentIndex].style.display = 'block';
    updateButtons();
});
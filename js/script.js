const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const qtd = document.querySelector('#qtd-product span');

let qtdProdutos = 0;

// VARIÁVEIS PARA MENU MOBILE

const burguer = document.querySelector('#burguer');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('#navigation');
const overlay = document.querySelector('.overlay');


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


// const burguer = document.querySelector('#menu-burguer'); 
// const btnCloseMenu = document.querySelector('#btn-menu');
// const menu = document.querySelector('#menu');

// const body = document.body;

// // FUNÇÕES DE ABRIR E FECHAR MENU

// burguer.addEventListener('click', abrirMenu);
// btnCloseMenu.addEventListener('click', fecharMenu);

// function abrirMenu(){
//     menu.classList.add('abrir');

//     document.querySelector('#overlay').classList.add('active'); // FUNDO ESCURO 

//     if(menu.style.overflow = 'auto'){
//         body.style.overflow = 'hidden'   // IMPEDIR ROLAGEM COM MENU ABERTO
//     } 
// }

// function fecharMenu(){
//     menu.classList.remove('abrir');

//     document.querySelector('#overlay').classList.remove('active');

//     if(menu.style.overflow = 'hidden'){
//         body.style.overflow = 'auto';
//     }   
// }

// // FUNÇÕES DE ADICIONAR E REMOVER PRODUTO

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
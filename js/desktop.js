const amostra = document.querySelector('#amostra');
const modal = document.querySelector('#modal');
const btnFechar = document.querySelector('.close-btn-modal');

amostra.addEventListener('click', focarProdutos);

function focarProdutos(){
    modal.setAttribute('open', 'open')

    overlay.style.visibility = 'visible';
}

btnFechar.addEventListener('click', fecharModal);

function fecharModal(){
    modal.removeAttribute('open', 'open');

    overlay.style.visibility = 'hidden';
}
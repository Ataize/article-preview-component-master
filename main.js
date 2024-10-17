const btnShare = document.querySelectorAll('.card__rodape-share');
const cardRodape = document.querySelector('.card__rodape');
const cardShare = document.querySelector('.card__share');
const shareDesktop = document.querySelector('.share-desk');

function hideShow(){
    if(window.innerWidth <= 768){
        cardRodape.classList.toggle('hidden');
        cardShare.classList.toggle('hidden');
      
    } else {
        shareDesktop.classList.toggle('hidden');

    }
}

btnShare.forEach((share)=>{
    share.addEventListener('click', (e)=>{
        hideShow();
    })
});



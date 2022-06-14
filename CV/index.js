'use strick';

const openPopUp = document.querySelector('#open_pop_up'),
      closePopUp = document.querySelector('#pop_up_close'),
      popUp = document.querySelector('#pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})


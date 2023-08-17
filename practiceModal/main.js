'use strict'
{
  const modalBtn = document.querySelectorAll('.modal-btn');
  const closeBtn = document.querySelector('.close-btn')
  const mask = document.querySelector('.mask')
  const modal = document.querySelector('.modal-bg');
  
  modalBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      mask.classList.toggle('hidden');
      modal.children[0].classList.toggle('display-none');
    })
  })
}

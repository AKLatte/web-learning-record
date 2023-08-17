'use strict';

{
  const dts = document.querySelectorAll('dt');
  // const divs = document.querySelectorAll('div');
  // const dd = document.querySelectorAll('dd');

  // dts.forEach((dt, index) => {
  //   dt.addEventListener('click', () => {
  //     dd[index].classList.toggle('display-none');
  //   })
  // })
  dts.forEach((dt, index) => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');
      // divs[index].classList.toggle('appear');

      dts.forEach((el) => {
        if (dt !== el) {
          el.parentNode.classList.remove('appear');
        }
      })
    })
  })
}
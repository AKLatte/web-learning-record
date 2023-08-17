'use strict'

const acoboxes = document.querySelectorAll(".aco-box");
const downArrows = document.querySelectorAll(".fa-angle-down");

console.log(acoboxes);
acoboxes.forEach((acobox) => {
  // console.log(`acobox.children[0]: ${acobox.children[0].children[1]}`);
  console.log(acobox.children[0].children[1]);
  acobox.children[0].children[1].addEventListener('click', () => {
    acobox.children[0].children[1].classList.toggle('fa-angle-down');
    acobox.children[0].children[1].classList.toggle('fa-angle-up');

    acobox.children[1].classList.toggle('display-none');
  });
});
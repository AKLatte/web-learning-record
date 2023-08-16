'use strict';

{
  function addSumToMiddle(array) {
    let odd=0;
    let even=0;
    let array2 = [];
    for (let i=0; i < array.length; i++) {
      if (i % 2 === 0) {
        even = i;
      } else {
        odd = i;
        array2.push(even + odd);
      }
    }
    
    for (let i=0; i < array.length; i++) {
      array.splice(i+1, 0, array2[i])
    }
  }

  console.log(addSumToMiddle([1, 2, 3, 4,]))
}

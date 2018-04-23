'use strict';

window.onload = function () {
  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return;
  };

  const products = document.querySelector('.products');
  const checkedCard = products.querySelectorAll('.product__checkbox');

  checkedCard.forEach(function(input) {
    if (input.checked) {
      input.parentNode.querySelector('.card').classList.add('card_selected');
    }
  })
    
  products.addEventListener("change", function(e) {
    let checkbox = e.target;
    let product = checkbox.parentNode;
    let card = product.querySelector('.card');

    if (checkbox.checked) {
      // card.onmouseleave = function() {
      //   console.log('leave')
      card.classList.add('card_selected');
    } else {
      card.classList.remove('card_selected');
    }  
  })  

  // products.addEventListener("mouseover", function(e) {
  //   let target = e.target;
  //   let flag = false;

  //   while (target != this) {
  //     if (target.classList.contains('card')) break;

  //     target = target.parentNode;
  //   }
};
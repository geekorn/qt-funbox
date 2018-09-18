'use strict';

window.onload = function () {
  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    return;
  };

  const products = document.querySelector('.products');
  if (!products) return;

  const checkedCard = products.querySelectorAll('.product__checkbox');

  

  checkedCard.forEach(function(input) {
    const card = input.parentNode.querySelector('.card');

    if (input.checked) {
      card.classList.add('card_selected');
    }
  });
    
  products.addEventListener("change", function(e) {
    const checkbox = e.target;
    const product = checkbox.parentNode;
    const card = product.querySelector('.card');

    card.onmouseleave = function() {
      if (checkbox.checked) {
        card.classList.add('card_selected');
      } 
    }
    if (!checkbox.checked) {
      card.classList.remove('card_selected');
    }  
  })
};
document.addEventListener('DOMContentLoaded', () => {
  // Обработка кликов по элементам управления количеством
  document.querySelectorAll('.product__quantity-controls').forEach(control => {
    control.addEventListener('click', event => {
      const quantityValueEl = control.querySelector('.product__quantity-value');
      let quantity = parseInt(quantityValueEl.textContent);

      if (event.target.classList.contains('product__quantity-control_inc')) {
        quantity += 1;
      } else if (event.target.classList.contains('product__quantity-control_dec') && quantity > 1) {
        quantity -= 1;
      }

      quantityValueEl.textContent = quantity;
    });
  });

  // Обработка клика по кнопке "Добавить в корзину"
  document.querySelectorAll('.product__add').forEach(button => {
    button.addEventListener('click', event => {
      const product = button.closest('.product');
      const productId = product.dataset.id;
      const productImageSrc = product.querySelector('.product__image').src;
      const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);

      const cartProducts = document.querySelector('.cart__products');

      // Проверка, есть ли уже товар в корзине
      let cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

      if (cartProduct) {
        // Если товар уже в корзине, увеличить количество
        const cartProductCountEl = cartProduct.querySelector('.cart__product-count');
        const currentCount = parseInt(cartProductCountEl.textContent);
        cartProductCountEl.textContent = currentCount + quantity;
      } else {
        // Если товара нет в корзине, создать новый элемент
        cartProduct = document.createElement('div');
        cartProduct.className = 'cart__product';
        cartProduct.dataset.id = productId;

        cartProduct.innerHTML = `
          <img class="cart__product-image" src="${productImageSrc}">
          <div class="cart__product-count">${quantity}</div>
        `;

        cartProducts.appendChild(cartProduct);
      }
    });
  });
});
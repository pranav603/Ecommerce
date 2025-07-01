let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const emptyMsg = document.getElementById('empty-msg');
    const priceSummary = document.getElementById('price-summary');

    const updateSummary = () => {
      const itemCount = cartItems.length;
      let totalPrice = 0;
      cartItems.forEach(item => {
        const price = parseFloat(item.price.replace(/[₹$,]/g, ''));
        totalPrice += price;
      });

      const discount = Math.floor(totalPrice * 0.75); // 75% off dummy
      const coupon = 100;
      const platformFee = 4;
      const total = totalPrice - discount - coupon + platformFee;
      const savings = discount + coupon;

      document.getElementById('price-label').innerText = `Price (${itemCount} items)`;
      document.getElementById('price').innerText = `₹${totalPrice.toLocaleString()}`;
      document.getElementById('discount').innerText = `– ₹${discount.toLocaleString()}`;
      document.getElementById('total').innerText = `₹${total.toLocaleString()}`;
      document.getElementById('savings').innerText = `You will save ₹${savings.toLocaleString()} on this order`;
    };

    function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    function clearCart() {
      localStorage.removeItem('cart');
      location.reload();
    }

    function removeItem(index) {
      cartItems.splice(index, 1);
      saveCart();
      renderCart();
    }

    function renderCart() {
      cartContainer.innerHTML = '';
      if (cartItems.length === 0) {
        emptyMsg.style.display = 'block';
        priceSummary.style.display = 'none';
        return;
      }

      emptyMsg.style.display = 'none';
      priceSummary.style.display = 'block';

      cartItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
          <img src="${item.img}" alt="${item.title}">
          <div class="cart-details">
            <h3>${item.title}</h3>
            <p>${item.price}</p>
          </div>
          <button class="btn-remove" onclick="removeItem(${index})">Remove</button>
        `;
        cartContainer.appendChild(div);
      });

      updateSummary();
    }

    renderCart();
    
    function placeOrder() {
  if (cartItems.length === 0) {
    alert("Your cart is empty. Add items to place an order.");
    return;
  }
  alert("🎉 Your order has been placed successfully!");
  localStorage.removeItem('cart');
  location.reload();
}
document.addEventListener('DOMContentLoaded', () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cartContainer");

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cartItems.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("cart-item");
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" />
        <div>
          <h3>${item.title}</h3>
          <p>Author: ${item.author}</p>
          <p>Format: ${item.format}</p>
          <p>Price: ₹${item.price}</p>
        </div>
      `;
      cartContainer.appendChild(card);
    });
  }
});

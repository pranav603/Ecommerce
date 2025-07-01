const cartButton = document.querySelector('.btn');
  const addToCartButtons = document.querySelectorAll('.btn-cart');
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');
  const allCards = document.querySelectorAll('.card');
  const noResults = document.getElementById('noResults');

  // Load existing cart or empty array
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // Update Cart Button Count
  const updateCartCount = () => {
    if (cartButton) {
      cartButton.textContent = `Cart (${cartItems.length})`;
    }
  };

  updateCartCount();

  // Add to Cart Button Handler
  addToCartButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      const title = card.querySelector('h3').innerText;
      const price = card.querySelector('.price').innerText;
      const img = card.querySelector('img').src;

      const book = { title, price, img };
      cartItems.push(book);
      localStorage.setItem('cart', JSON.stringify(cartItems));
      updateCartCount();
    });
  });

  // Search Button Handler
  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      const query = searchInput.value.toLowerCase().trim();
      let matchFound = false;

      allCards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        if (title.includes(query)) {
          card.style.display = 'block';
          matchFound = true;
        } else {
          card.style.display = 'none';
        }
      });

      noResults.style.display = matchFound ? 'none' : 'block';
    });
  }

  // Optional: Live Filtering on Typing (real-time search)
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    let matchFound = false;

    allCards.forEach(card => {
      const title = card.querySelector('h3').innerText.toLowerCase();
      if (title.includes(query)) {
        card.style.display = 'block';
        matchFound = true;
      } else {
        card.style.display = 'none';
      }
    });

    noResults.style.display = matchFound ? 'none' : 'block';
  });
  const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.slider-btn.next');
const prevBtn = document.querySelector('.slider-btn.prev');
let currentSlide = 0;

function updateSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide(currentSlide);
});

// Auto-slide every 5 seconds (optional)
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide(currentSlide);
}, 5000);

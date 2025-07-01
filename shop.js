
const books = [
  { title: "The Power of Habit", author: "Charles Duhigg", format: "Paperback", price: 250.52, offer: "Buy 1 Get 1 50% Off", image: "images/root1.jpg" },
  { title: "Deep Work", author: "Cal Newport", format: "Paperback", price: 125, offer: "Buy 1 Get 1 50% Off", image: "images/root2.jpg" },
  { title: "Start With Why", author: "Simon Sinek", format: "Paperback", price: 344.54,offer: "Buy 1 Get 1 50% Off", image: "images/root3.jpg" },
  { title: "Atomic Habits", author: "James Clear", format: "Paperback", price: 156.02, offer: "Buy 1 Get 1 50% Off", image: "images/root4.jpg" },
  { title: "Think and Grow Rich", author: "Napoleon Hill", format: "Paperback", price: 417.56, offer: "Buy 1 Get 1 50% Off", image: "images/root5.jpg" },
  { title: "The Psychology of Money", author: "Morgan Housel", format: "Paperback", price: 461.32, offer: "Buy 1 Get 1 50% Off", image: "images/root61.jpeg" },
  { title: "Ikigai", author: "Francesc Miralles", format: "Paperback", price: 362.80, offer: "Buy 1 Get 1 50% Off", image: "images/root6.jpg" },
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", format: "Paperback", price: 23.92, offer: "Buy 1 Get 1 50% Off", image: "images/root7.jpeg" },
  { title: "Can't Hurt Me", author: "David Goggins", format: "Paperback", price: 363.37, offer: "Buy 1 Get 1 50% Off", image: "images/root8.jpg" },
  { title: "The Alchemist", author: "Paulo Coelho", format: "Paperback", price: 336.04, offer: "Buy 1 Get 1 50% Off", image: "images/root9.jpg" },
  { title: "Zero to One", author: "Peter Thiel", format: "Paperback", price: 179.16, offer: "Buy 1 Get 1 50% Off", image: "images/root10.jpg" },
  { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", format: "Paperback", price: 217.41, offer: "Buy 1 Get 1 50% Off", image: "images/root11.jpeg" },
  { title: "The 5 AM Club", author: "Robin Sharma", format: "Paperback", price: 440.46, offer: "Buy 1 Get 1 50% Off", image: "images/root12a.jpg" },
  { title: "Sapiens", author: "Yuval Noah Harari", format: "Paperback", price: 1112.70, offer: "Buy 1 Get 1 50% Off", image: "images/root12.jpg" },
  { title: "Educated", author: "Tara Westover", format: "Paperback", price: 2634.44, offer: "Buy 1 Get 1 50% Off", image: "images/root13.jpg" },
  { title: "The Intelligent Investor", author: "Benjamin Graham", format: "Paperback", price: 36.92, offer: "Buy 1 Get 1 50% Off", image: "images/root14.jpg" },
  { title: "Hooked", author: "Nir Eyal", format: "Paperback", price: 473.23, offer: "Buy 1 Get 1 50% Off", image: "images/root15.jpg" },
  { title: "Good to Great", author: "Jim Collins", format: "Paperback", price: 189.40, offer: "Buy 1 Get 1 50% Off", image: "images/root16.jpg" },
  { title: "Man's Search for Meaning", author: "Viktor E. Frankl", format: "Paperback", price: 164.14, offer: "Buy 1 Get 1 50% Off", image: "images/root17.jpg" },
  { title: "Grit", author: "Angela Duckworth", format: "Paperback", price: 355.68, offer: "Buy 1 Get 1 50% Off", image: "images/root18.jpg" }
];


    const bookGrid = document.getElementById("bookGrid");

function renderBooks(booksToRender) {
  bookGrid.innerHTML = "";
  booksToRender.forEach((book) => {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
      <span class="heart" onclick="toggleFavorite(this)">♡</span>
      <img src="${book.image}" alt="${book.title}" />
      <div class="author">${book.author}</div>
      <div class="format">${book.format}</div>
      <div class="title">${book.title}</div>
      <div class="price">₹${book.price.toFixed(2)}</div>
      <div class="offer">${book.offer}</div>
      <button class="btn-cart" onclick='addToCart(${JSON.stringify(book)})'>Add to Cart</button>
    `;
    bookGrid.appendChild(card);
  });
}

function toggleFavorite(el) {
  el.classList.toggle("favorited");
}

function addToCart(book) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(book);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Added "${book.title}" to cart!`);
}

let originalBooks = [...books];

// function applyPriceFilter() {
//   const selected = document.querySelector('input[name="price"]:checked').value;
//   let filteredBooks = originalBooks;

//   if (selected === "under200") {
//     filteredBooks = originalBooks.filter(book => book.price < 200);
//   } else if (selected === "200 to 300") {
//     filteredBooks = originalBooks.filter(book => book.price >= 200 && book.price <= 300);
//   } else if (selected === "above 300") {
//     filteredBooks = originalBooks.filter(book => book.price > 300);
//   } else if (selected === "400 to 500") {
//     filteredBooks = originalBooks.filter(book => book.price >= 400 && book.price <= 500);
//   } else if (selected === "above 500") {
//     filteredBooks = originalBooks.filter(book => book.price > 500);
//   } else if (selected === "above 1000") {
//     filteredBooks = originalBooks.filter(book => book.price > 1000);
//   }

//   renderBooks(filteredBooks);
//   document.getElementById('priceFilterBox').style.display = 'none';
// }

// Initial render

function applyPriceFilter() {
  const selected = document.querySelector('input[name="price"]:checked');
  if (!selected) return;

  const value = selected.value;
  let filteredBooks = originalBooks;

  if (value === "under200") {
    filteredBooks = originalBooks.filter(book => book.price < 200);
  } else if (value === "200to300") {
    filteredBooks = originalBooks.filter(book => book.price >= 200 && book.price <= 300);
  } else if (value === "above300") {
    filteredBooks = originalBooks.filter(book => book.price > 300);
  } else if (value === "400to500") {
    filteredBooks = originalBooks.filter(book => book.price >= 400 && book.price <= 500);
  } else if (value === "above500") {
    filteredBooks = originalBooks.filter(book => book.price > 500);
  } else if (value === "above1000") {
    filteredBooks = originalBooks.filter(book => book.price > 1000);
  }

  renderBooks(filteredBooks);
  document.getElementById('priceFilterBox').style.display = 'none';
}
renderBooks(originalBooks);
function searchBooks() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );
  renderBooks(filtered);
}

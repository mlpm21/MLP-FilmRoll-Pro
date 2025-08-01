const products = [
  { name: "Kodak Gold 200", brand: "Kodak", iso: "200", price: 12.99 },
  { name: "Fujifilm Velvia 50", brand: "Fujifilm", iso: "50", price: 14.99 },
  { name: "Ilford HP5 Plus 400", brand: "Ilford", iso: "400", price: 11.99 },
  { name: "Kodak Ektar 100", brand: "Kodak", iso: "100", price: 13.49 },
  { name: "Fujifilm Velvia 100", brand: "Fujifilm", iso: "100", price: 15.49 },
  { name: "Fomapan 100 Classic", brand: "Foma", iso: "100", price: 6.99 },
  { name: "Kodak ColorPlus 200", brand: "Kodak", iso: "200", price: 9.99 },
  { name: "Ilford Delta 3200", brand: "Ilford", iso: "3200", price: 12.49 },
  { name: "Fujifilm Superia X-TRA 400", brand: "Fujifilm", iso: "400", price: 14.99 },
  { name: "Cinestill 50D", brand: "Cinestill", iso: "50", price: 14.99 },
  { name: "Fujifilm Pro 400H", brand: "Fujifilm", iso: "400", price: 16.99 },
  { name: "Kodak Portra 400", brand: "Kodak", iso: "400", price: 16.99 },
  { name: "Fujifilm Fujicolor C200", brand: "Fujifilm", iso: "200", price: 7.49 },  
  { name: "Cinestill 800T", brand: "Cinestill", iso: "800", price: 17.99 },
  { name: "Lomography Color Negative 800", brand: "Lomography", iso: "800", price: 11.49 }
];

let cart = [];


function renderProducts(filtered = products) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  filtered.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Brand: ${product.brand} | ISO: ${product.iso}</p>
      <p class="price">$${product.price.toFixed(2)}</p>
      <input type="number" id="qty-${index}" min="1" value="1"/>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}


function addToCart(index) {
  const quantity = parseInt(document.getElementById(`qty-${index}`).value) || 1;
  const existingIndex = cart.findIndex(item => item.name === products[index].name);
  
  if (existingIndex > -1) {
    cart[existingIndex].qty += quantity;
  }
  
  else {
    cart.push({ ...products[index], qty: quantity });
  }

  updateCart();
}


function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.price * item.qty;

    const li = document.createElement("li");

    li.innerHTML = `
      <span>${item.name}</span>
      <input type="number" value="${item.qty}" min="1" onchange="changeQty(${i}, this.value)">
      <span>$${(item.price * item.qty).toFixed(2)}</span>
      <button onclick="removeItem(${i})">x</button>
    `;

    cartItems.appendChild(li);
  });

  cartTotal.textContent = total.toFixed(2);
}


function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}


function changeQty(index, value) {
  const qty = parseInt(value);
  
  if (qty > 0) {
    cart[index].qty = qty;

    updateCart();
  }
}


function toggleCart() {
  document.getElementById("cart-panel").classList.toggle("open");
}


function searchProducts() {
  const keyword = document.getElementById("search-input").value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword) ||
    p.brand.toLowerCase().includes(keyword) ||
    p.iso.includes(keyword)
  );

  renderProducts(filtered);
}


window.onload = () => {
  renderProducts();
};

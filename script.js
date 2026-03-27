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


/* PRICE & PROMO: promotion data */
const PROMOS = {
  //number is the % discount
  "Kodak Gold 200": 15,
  "Fujifilm Pro 400H": 10,
  "Cinestill 800T": 5
};


function renderProducts(filtered = products) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  // FILTER: friendly empty state
  if (!filtered || filtered.length === 0) {
    const msg = document.createElement("div");
    msg.style.marginTop = "1rem";
    msg.textContent = "No results. Try a different search or clear filters.";
    container.appendChild(msg);
    return;
  }


  filtered.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product";

    /* PRICE & PROMO: discount for display */
    const promoPercent = PROMOS[product.name] || 0;
    const hasPromo = promoPercent > 0;
    const discounted = hasPromo ? product.price * (1 - promoPercent / 100) : product.price;

    const promoBadgeHTML = hasPromo
      ? `<span class="promo-badge">SALE -${promoPercent}%</span>`
      : "";

    const priceHTML = hasPromo
      ? `<p class="price">${promoBadgeHTML} <span class="old-price">$${product.price.toFixed(2)}</span> $${discounted.toFixed(2)}</p>`
      : `<p class="price">$${product.price.toFixed(2)}</p>`;

    card.innerHTML = `
      <h3>${product.name}</h3>
      <p>Brand: ${product.brand} | ISO: ${product.iso}</p>
      ${priceHTML}
      <input type="number" id="qty-${index}" min="1" value="1"/>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}


/* PRICE & PROMO: discounted unit price when adding to cart */
function addToCart(index) {
  const quantity = parseInt(document.getElementById(`qty-${index}`).value) || 1;

  const base = products[index];
  const promoPercent = PROMOS[base.name] || 0;
  const unitPrice = promoPercent > 0 ? base.price * (1 - promoPercent / 100) : base.price;

  const existingIndex = cart.findIndex(item => item.name === base.name);

  if (existingIndex > -1) {
    cart[existingIndex].qty += quantity;
  }
  
  else {
    // store the price actually charged (discounted if promo)
    cart.push({ ...base, qty: quantity, price: unitPrice });
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


// Search (unified with filters)
function searchProducts() {
  applySearchAndFilters(); // FILTER: unify with filters
}


// FAQ: data
const LOCAL_FAQS = [
  { q: "What’s ISO?", a: "ISO is the film’s light sensitivity. 200 = bright light, 400 = versatile, 800 = low light." },
  { q: "Delivery time?", a: "2–5 business days domestic, 7–12 days international." },
  { q: "Best film for beginners?", a: "Kodak Colorplus 200 or Kodak Ultramax 400." }
];


let _faqsCache = null; // FAQ: small cache


// FAQ: DOM refs
const faqBtn = document.getElementById('faq-btn');
const faqPanel = document.getElementById('faq-panel');
const faqBackdrop = document.getElementById('faq-backdrop');
const faqClose = document.getElementById('faq-close');
const faqLoading = document.getElementById('faq-loading');
const faqList = document.getElementById('faq-list');
const faqEmpty = document.getElementById('faq-empty');


async function openFAQ() {
  showFAQShell(true);

  if (!_faqsCache) {
    _faqsCache = LOCAL_FAQS;
  }

  renderFAQs(_faqsCache);
}


function renderFAQs(items) {
  faqLoading.hidden = true;
  faqList.innerHTML = '';

  if (!items || items.length === 0) {
    faqEmpty.hidden = false;
    faqList.hidden = true;

    return;
  }

  faqEmpty.hidden = true;
  faqList.hidden = false;

  items.forEach(({ q, a }) => {
    const d = document.createElement('details');
    const s = document.createElement('summary');

    s.textContent = q;

    const ans = document.createElement('div');

    ans.className = 'answer';
    ans.textContent = a;

    d.appendChild(s);
    d.appendChild(ans);
    faqList.appendChild(d);
  });
}


function closeFAQ() { showFAQShell(false); }


function showFAQShell(show) {
  faqPanel.hidden = !show;
  faqBackdrop.hidden = !show;

  if (show) {
    faqLoading.hidden = !!_faqsCache;
    faqList.hidden = true;
    faqEmpty.hidden = true;

    requestAnimationFrame(() => {
      faqPanel.classList.add('show');
      faqBackdrop.classList.add('show');
    });

    faqClose?.focus();

  }
  
  else {
    faqPanel.classList.remove('show');
    faqBackdrop.classList.remove('show');

    setTimeout(() => { faqPanel.hidden = true; faqBackdrop.hidden = true; }, 200);

    faqBtn?.focus();
  }
}

faqBtn?.addEventListener('click', openFAQ);
faqClose?.addEventListener('click', closeFAQ);
faqBackdrop?.addEventListener('click', closeFAQ);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !faqPanel.hidden) closeFAQ();
});

// FILTER: type/brand/ISO chip filters
const filterBar = document.getElementById('filter-bar');

const state = {
  brands: new Set(),
  isos: new Set()
};


function unique(list) {
  return [...new Set(list)];
}


function buildFilterChips() {
  if (!filterBar) return;

  // FILTER: derive values from products
  const brands = unique(products.map(p => p.brand)).sort();
  const isos = unique(products.map(p => p.iso)).sort((a,b)=> Number(a)-Number(b));

  filterBar.innerHTML = '';

  // FILTER: Brand
  brands.forEach(brand => {
    const btn = document.createElement('button');

    btn.className = 'filter-chip';
    btn.type = 'button';
    btn.textContent = brand;
    btn.setAttribute('data-type', 'brand');
    btn.setAttribute('data-value', brand);
    btn.setAttribute('aria-pressed', 'false');
    btn.addEventListener('click', () => toggleChip(btn, 'brand', brand));

    filterBar.appendChild(btn);
  });


  // FILTER: ISO
  isos.forEach(iso => {
    const btn = document.createElement('button');

    btn.className = 'filter-chip';
    btn.type = 'button';
    btn.textContent = `ISO: ${iso}`;
    btn.setAttribute('data-type', 'iso');
    btn.setAttribute('data-value', iso);
    btn.setAttribute('aria-pressed', 'false');
    btn.addEventListener('click', () => toggleChip(btn, 'iso', iso));

    filterBar.appendChild(btn);
  });


  // FILTER: Clear button
  const clearBtn = document.createElement('button');

  clearBtn.className = 'filter-chip clear';
  clearBtn.type = 'button';
  clearBtn.textContent = 'Clear';
  clearBtn.addEventListener('click', clearFilters);

  filterBar.appendChild(clearBtn);
}


function toggleChip(btn, kind, value) {
  const set = kind === 'brand' ? state.brands : state.isos;

  if (set.has(value)) {
    set.delete(value);

    btn.classList.remove('active');
    btn.setAttribute('aria-pressed', 'false');
  }
  
  else {
    set.add(value);

    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
  }

  applySearchAndFilters();

}


function clearFilters() {
  state.brands.clear();
  state.isos.clear();

  // FILTER: reset chip visuals
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.classList.remove('active');
    chip.setAttribute('aria-pressed', 'false');
  });

  applySearchAndFilters();

}


function applySearchAndFilters() {
  const keyword = (document.getElementById('search-input')?.value || '').toLowerCase();

  // FILTER: start with search filter
  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword) ||
    p.brand.toLowerCase().includes(keyword) ||
    p.iso.includes(keyword)
  );


  // FILTER: apply chip filters
  if (state.brands.size > 0) {
    filtered = filtered.filter(p => state.brands.has(p.brand));
  }

  if (state.isos.size > 0) {
    filtered = filtered.filter(p => state.isos.has(p.iso));
  }

  renderProducts(filtered);
}


// FILTER: search
document.getElementById('search-input')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') applySearchAndFilters();
});


window.onload = () => {
  renderProducts();
  buildFilterChips();
};

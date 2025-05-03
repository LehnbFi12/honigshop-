// JSON-Datei für Produkte laden oder leeren
let products = JSON.parse(localStorage.getItem('products')) || [];

// Produkte anzeigen
function displayProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; // Vorherige Liste löschen

  products.forEach((product, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${product.image}" alt="${product.name}" width="100">
      <h4>${product.name}</h4>
      <p>${product.description}</p>
      <p>Preis: ${product.price}€</p>
      <button onclick="deleteProduct(${index})">Löschen</button>
      <button onclick="editProduct(${index})">Bearbeiten</button>
    `;
    productList.appendChild(li);
  });
}

// Produkt hinzufügen
document.getElementById('add-product-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('product-name').value;
  const price = parseFloat(document.getElementById('product-price').value);
  const description = document.getElementById('product-description').value;
  const imageFile = document.getElementById('product-image').files[0];
  const imageUrl = URL.createObjectURL(imageFile); // Temporäre URL für das Bild

  const newProduct = { name, price, description, image: imageUrl };

  products.push(newProduct);
  localStorage.setItem('products', JSON.stringify(products));
  displayProducts(); // Nach dem Hinzufügen neu anzeigen
  document.getElementById('add-product-form').reset(); // Formular zurücksetzen
});

// Produkt löschen
function deleteProduct(index) {
  products.splice(index, 1); // Produkt entfernen
  localStorage.setItem('products', JSON.stringify(products));
  displayProducts(); // Nach dem Löschen neu anzeigen
}

// Produkt bearbeiten
function editProduct(index) {
  const product = products[index];
  document.getElementById('product-name').value = product.name;
  document.getElementById('product-price').value = product.price;
  document.getElementById('product-description').value = product.description;

  // Optional: Produktbild bearbeiten, hier ein einfaches Beispiel ohne Bildwechsel
  document.getElementById('add-product-form').onsubmit = function (e) {
    e.preventDefault();
    product.name = document.getElementById('product-name').value;
    product.price = parseFloat(document.getElementById('product-price').value);
    product.description = document.getElementById('product-description').value;

    // Bild bleibt gleich (kann erweitert werden)
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts(); // Nach der Bearbeitung neu anzeigen
  };
}

// Initiale Anzeige der Produkte
document.addEventListener('DOMContentLoaded', function () {
  displayProducts();
});

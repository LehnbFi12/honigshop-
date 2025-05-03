// Überprüfen, ob der Admin eingeloggt ist
function checkLogin() {
  const cookie = document.cookie;
  if (!cookie.includes('admin=true')) {
    window.location.href = 'login.html';  // Weiterleitung zur Login-Seite, wenn nicht eingeloggt
  }
}

// Login-Funktion (Login-Seite)
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'adminpass') {
    document.cookie = 'admin=true; path=/'; // Login bestätigen
    window.location.href = 'admin.html';  // Weiterleitung zum Admin-Dashboard
  } else {
    alert('Benutzername oder Passwort sind falsch!');
  }
});

// Admin-Dashboard Funktionen
function logout() {
  document.cookie = 'admin=true; max-age=0; path=/';  // Logout durchführen
  window.location.href = 'login.html';  // Weiterleitung zur Login-Seite
}

function addProduct() {
  alert('Hier kannst du ein neues Produkt hinzufügen!');
}

function editProduct() {
  alert('Hier kannst du ein Produkt bearbeiten!');
}

function deleteProduct() {
  alert('Hier kannst du ein Produkt löschen!');
}

// Nur auf der Admin-Seite das Login prüfen
if (window.location.pathname === '/admin.html') {
  checkLogin();
}

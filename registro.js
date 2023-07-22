// registro.js

// Función para validar el formulario de registro
function validarRegistroForm(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const contrasena = document.getElementById('contrasena').value;

  // Expresiones regulares para validar el nombre, email y contraseña
  const nombreRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contrasenaRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  // Validar el nombre
  if (!nombreRegex.test(nombre)) {
    alert('El nombre debe contener solo letras y espacios.');
    return;
  }

  // Validar el email
  if (!emailRegex.test(email)) {
    alert('Ingrese un correo electrónico válido.');
    return;
  }

  // Validar la contraseña
  if (!contrasenaRegex.test(contrasena)) {
    alert('La contraseña debe tener al menos 8 caracteres, incluyendo letras y números.');
    return

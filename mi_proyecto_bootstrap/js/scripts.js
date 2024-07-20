//registro.html
document.getElementById('registroForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Simulación de registro exitoso o fallido
  const registroExitoso = Math.random() > 0.5; // Simulación aleatoria

  if (registroExitoso) {
      // Mostrar el mensaje de éxito
      document.getElementById('successMessage').classList.remove('d-none');
      document.getElementById('errorMessage').classList.add('d-none');
      // Limpiar el formulario
      this.reset();
  } else {
      // Mostrar el mensaje de error
      document.getElementById('errorMessage').classList.remove('d-none');
      document.getElementById('successMessage').classList.add('d-none');
  }
});
//registro.html


//index.html
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Simulación de autenticación fallida
  const autenticacionExitosa = true; // Simulación fija

  if (!autenticacionExitosa) {
      // Mostrar el mensaje de error
      document.getElementById('errorMessage').classList.remove('d-none');
  }
});
//index.html

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Simulación de autenticación
  const autenticacionExitosa = true; // Cambiar a true para simular autenticación exitosa

  if (autenticacionExitosa) {
      // Redirigir a la página de funciones CRUD
      window.location.href = 'crud.html';
  } else {
      // Mostrar el mensaje de error
      document.getElementById('errorMessage').classList.remove('d-none');
  }
});




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
  const autenticacionExitosa = false; // Cambiar a true para simular autenticación exitosa

  if (autenticacionExitosa) {
      // Redirigir a la página de funciones CRUD
      window.location.href = 'crud.html';
  } else {
      // Mostrar el mensaje de error
      document.getElementById('errorMessage').classList.remove('d-none');
  }
});

//crud.html
        document.getElementById('registration-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // Aquí puedes agregar la lógica para enviar los datos del formulario al servidor
            // Simulación de registro exitoso
            const registroExitoso = true; // Simulación fija

            if (!registroExitoso) {
                // Mostrar el mensaje de error
                document.getElementById('error-message').classList.remove('d-none');
                return;
            }else{
                // Limpiar el formulario
                this.reset();
            }
            // Mostrar el mensaje de éxito
            document.getElementById('success-message').classList.remove('d-none');
        });
//crud.html




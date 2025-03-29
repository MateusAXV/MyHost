document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    const username = document.getElementById("username").value; // Obtiene el usuario ingresado
    const password = document.getElementById("password").value; // Obtiene la contraseña ingresada
    const errorMessage = document.getElementById("error-message"); // Elemento para mostrar mensajes de error
    
    // Verificar si el usuario y la contraseña coinciden con alguno en la base de datos
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        alert("Inicio de sesión exitoso");
        window.location.href = "menuPrincipal.html"; // Redirige al menú principal
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos";
    }
});

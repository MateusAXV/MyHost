document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Evita el envío del formulario por defecto

    const username = document.getElementById("username").value; // Obtiene el usuario ingresado
    const password = document.getElementById("password").value; // Obtiene la contraseña ingresada
    const errorMessage = document.getElementById("error-message"); // Elemento para mostrar mensajes de error
    
    // Verificar si el usuario y la contraseña coinciden con alguno en la base de datos
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        //uso del token
        let token = generateToken();
        localStorage.setItem("authToken", token);

        alert("Inicio de sesión exitoso");
        window.location.href = "menuPrincipal.html"; // Redirige al menú principal
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos";
    }
});

function generateToken() { //genera token
    let array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0].toString(16); // Convierte el número en hexadecimal
}
function logout() {
    localStorage.removeItem("authToken"); // Elimina el token
    window.location.href = "index.html"; // Redirige al login
}
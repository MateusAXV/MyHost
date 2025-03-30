if (!localStorage.getItem("authToken")) {
    window.location.href = "login.html"; // Redirige si no hay token
}
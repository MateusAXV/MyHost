if (!localStorage.getItem("authToken")) {
    window.location.href = "index.html"; // Redirige si no hay token
}
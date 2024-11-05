// Función para mostrar mensaje de bienvenida
function mostrarBienvenida() {
    alert("¡Bienvenido a mi página personal!");
}

// Validación del formulario de contacto
function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return false; // Evita que el formulario se envíe
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    alert("Formulario enviado correctamente. Gracias por tu mensaje.");
    return true;
}

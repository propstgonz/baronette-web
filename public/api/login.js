import { API_BASE_URL } from "./config.ts";

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario

    const username = document.getElementById('username').value;
    const password = document.getElementById('user_password').value;

    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, user_password:password }),
        });

        let data;
        try {
            data = await response.json();
        } catch (e) {
            alert("El servidor no devolvió JSON válido");
            return;
        }

        if (response.ok) {
            // Guardar la ID en localStorage y redirigir
            localStorage.setItem('user_id', data.user_id);
            alert('¡Inicio de sesión correcto!');
            window.location.href = 'https://baronette.es/';
        } else {
            alert(data.message || `Error ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error en la petición:', error);
        alert('No se pudo conectar con el servidor. Revisa que la API esté corriendo.');
    }
});
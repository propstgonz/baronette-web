import { API_BASE_URL } from "./config.js";

const form = document.querySelector('#signup-form');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const user_password = document.getElementById('user_password').value;
    const first_name = document.getElementById('first_name').value;
    const last_name_1 = document.getElementById('last_name_1').value;
    const last_name_2 = document.getElementById('last_name_2').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Validar campos requeridos
    if (!first_name || !last_name_1 || !username || !email || !user_password) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    const data = { first_name, last_name_1, last_name_2, username, user_password, email };

    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

    let result;
    try {
        result = await response.json();
    } catch (e) {
        alert("El servidor no devolvió JSON válido");
        return;
    }

    if (response.ok) {
        alert('¡Te has registrado correctamente!');
        window.location.href = "https://baronette.es/login";
    } else {
        alert(result.message || `Error ${response.status}: ${response.statusText}`);
    }

    } catch (error) {
        console.error('Error:', error);
        alert('Error al intentar registrar el usuario.');
    }
});

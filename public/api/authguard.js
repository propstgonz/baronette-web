(function() {
    // URL a donde se redirigirá si el usuario no está logueado
    const LOGIN_URL = 'https://baronette.es/login';

    // Verificar si hay un user_id en localStorage
    const userId = localStorage.getItem('user_id');

    if (!userId) {
        // Usuario no autenticado, redirigir al login
        alert('Debes iniciar sesión para acceder a esta página.');
        window.location.href = LOGIN_URL;
    } else {
        console.log('Usuario autenticado. user_id:', userId);
    }
})();
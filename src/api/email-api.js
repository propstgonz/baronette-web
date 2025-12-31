  const form = document.getElementById('emailForm');
  const messageDiv = document.getElementById('message');
  const submitBtn = form.querySelector('button[type="submit"]');
  const API_BASE_URL = 'https://bwapi.baronette.es';

  function showMessage(text, type = 'info') {
    messageDiv.textContent = text;
    messageDiv.className = 'rounded-lg p-3 text-center font-medium';
    messageDiv.classList.remove('hidden');
    if (type === 'success') messageDiv.classList.add('bg-green-100', 'text-green-800');
    else if (type === 'error') messageDiv.classList.add('bg-red-100', 'text-red-800');
    else if (type === 'loading') messageDiv.classList.add('bg-blue-100', 'text-blue-800');
    else if (type === 'warning') messageDiv.classList.add('bg-yellow-100', 'text-yellow-800');
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!username) {
      showMessage('El nombre de cuenta no puede estar vacío', 'error');
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      return;
    }

    if (password !== confirmPassword) {
      showMessage('⚠️ Las contraseñas no coinciden', 'error');
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      return;
    }

    if (password.length < 8) {
      showMessage('La contraseña debe tener al menos 8 caracteres', 'error');
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      return;
    }

    const email = `${username}@baronette.es`;
    showMessage('Registrando...', 'loading');

    try {
      const res = await fetch(`${API_BASE_URL}/mail/register-mail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      let data = null;
      try { data = await res.json(); } catch(err){}

      if (res.ok) {
        showMessage('✅ Registro exitoso', 'success');
        form.reset();
        setTimeout(() => window.location.href = '/', 1400);
      } else {
        const errMsg = data?.message || data?.error || `Error ${res.status}`;
        showMessage(`❌ ${errMsg}`, 'error');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      showMessage('⚠️ Error de conexión con el servidor', 'warning');
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
  });
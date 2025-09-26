async function fetchClientIP() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    const ipSpan = document.getElementById('client-ip');
    if (ipSpan) {
      ipSpan.textContent = data.ip;
    }
  } catch (error) {
    console.error('Failed to fetch IP:', error);
    const ipSpan = document.getElementById('client-ip');
    if (ipSpan) {
      ipSpan.textContent = 'unavailable';
    }
  }
}

document.addEventListener('DOMContentLoaded', fetchClientIP);
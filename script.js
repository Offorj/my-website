document.addEventListener('DOMContentLoaded', () => {
    const currentTimeUTC = document.getElementById('currentTimeUTC');
    const currentDay = document.getElementById('currentDay');

    function updateTime() {
        const now = new Date();
        currentTimeUTC.textContent = now.toUTCString();
        currentDay.textContent = now.toLocaleString('default', { weekday: 'long' });
    }

    setInterval(updateTime); 
});


// Инициализация Web App
window.Telegram.WebApp.init();
console.log("Web App Initialized");

// Запрос информации о пользователе при нажатии на кнопку
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('mainContent');

    document.getElementById('homeButton').addEventListener('click', () => {
        // Получаем данные пользователя из Telegram
        const user = window.Telegram.WebApp.initDataUnsafe?.user || { first_name: "Guest" };

        // Логируем данные пользователя в консоль для проверки
        console.log('User info:', user);

        // Отображаем приветственное сообщение с именем пользователя
        document.getElementById('mainContent').innerHTML = `
            <h2>Welcome to Sport City, ${user.first_name}!</h2>
            <p>Explore sports facilities and events around you.</p>
        `;
    });

    document.getElementById('mapButton').addEventListener('click', () => {
        mainContent.innerHTML = '<h2>Map</h2><p>Find sports facilities near you.</p>';
    });

    document.getElementById('profileButton').addEventListener('click', () => {
        mainContent.innerHTML = '<h2>Profile</h2><p>Your personal information and activity stats.</p>';
    });

    document.getElementById('achievementsButton').addEventListener('click', () => {
        mainContent.innerHTML = '<h2>Achievements</h2><p>Unlock and view your achievements.</p>';
    });

    document.getElementById('notificationsButton').addEventListener('click', () => {
        mainContent.innerHTML = '<h2>Notifications</h2><p>Stay updated with the latest news and events.</p>';
    });
});

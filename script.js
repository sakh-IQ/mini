// Инициализация Web App
window.Telegram.WebApp.init();
console.log("Telegram Web App Initialized");
console.log("initData: ", window.Telegram.WebApp.initData);
console.log("initDataUnsafe: ", window.Telegram.WebApp.initDataUnsafe);

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
});

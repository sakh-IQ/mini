// Инициализация Web App
window.Telegram.WebApp.init();
console.log("Telegram Web App Initialized");

// Проверка доступа к данным пользователя
console.log("initData:", window.Telegram.WebApp.initData);
console.log("initDataUnsafe:", window.Telegram.WebApp.initDataUnsafe);

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('mainContent');

    // Функция для отображения содержимого
    const showContent = (content) => {
        mainContent.innerHTML = content;
    };

    // Кнопка Home
    document.getElementById('homeButton').addEventListener('click', () => {
        const user = window.Telegram.WebApp.initDataUnsafe?.user || { first_name: "Guest" };
        console.log('User info:', user);
        showContent(`
            <h2>Welcome to Sport City, ${user.first_name}!</h2>
            <p>Explore sports facilities and events around you.</p>
        `);
    });

    // Кнопка Map
    document.getElementById('mapButton').addEventListener('click', () => {
        showContent(`
            <h2>Map</h2>
            <p>Find sports facilities near you.</p>
            <p>Here you might want to integrate a map service like Google Maps or Yandex Maps to show sports facilities in the vicinity of the user.</p>
        `);
    });

    // Кнопка Profile
    document.getElementById('profileButton').addEventListener('click', () => {
        const user = window.Telegram.WebApp.initDataUnsafe?.user || { first_name: "Guest" };
        showContent(`
            <h2>Profile</h2>
            <p>Name: ${user.first_name}</p>
            <p>Username: ${user.username || "Not available"}</p>
            <p>This section could include more detailed user statistics and settings in a real application.</p>
        `);
    });

    // Кнопка Achievements
    document.getElementById('achievementsButton').addEventListener('click', () => {
        showContent(`
            <h2>Achievements</h2>
            <p>Unlock and view your achievements here.</p>
            <p>Here you can display a list of achievements and perhaps a progress bar for the next level or milestone.</p>
        `);
    });

    // Кнопка Notifications
    document.getElementById('notificationsButton').addEventListener('click', () => {
        showContent(`
            <h2>Notifications</h2>
            <p>Stay updated with the latest news and events.</p>
            <p>In a real application, this section could show recent notifications and allow users to manage their notification settings.</p>
        `);
    });
});

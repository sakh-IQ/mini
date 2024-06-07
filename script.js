// Инициализация Web App
window.Telegram.WebApp.init();
console.log("Telegram Web App Initialized");

console.log("initData: ", window.Telegram.WebApp.initData);
console.log("initDataUnsafe: ", window.Telegram.WebApp.initDataUnsafe);

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('homeButton');
    const mainContent = document.getElementById('mainContent');

    if (homeButton && mainContent) {
        console.log('Elements found: homeButton and mainContent');
    } else {
        console.log('Elements not found: check IDs and document structure');
    }

    homeButton.addEventListener('click', () => {
        console.log('Home button clicked');

        // Получаем данные пользователя из Telegram
        const user = window.Telegram.WebApp.initDataUnsafe?.user || { first_name: "Guest" };

        // Проверка, что данные получены
        console.log('User info:', user);

        if (user) {
            mainContent.innerHTML = `
                <h2>Welcome to Sport City, ${user.first_name}!</h2>
                <p>Explore sports facilities and events around you.</p>
            `;
        } else {
            mainContent.innerHTML = `
                <h2>Welcome to Sport City!</h2>
                <p>Explore sports facilities and events around you.</p>
            `;
        }
    });
});

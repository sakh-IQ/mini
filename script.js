document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('mainContent');

    document.getElementById('homeButton').addEventListener('click', () => {
        mainContent.innerHTML = '<h2>Welcome to Sport City!</h2><p>Explore sports facilities and events around you.</p>';
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

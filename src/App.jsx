import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MapPage from './pages/MapPage';
import ProfilePage from './pages/ProfilePage';
import AchievementsPage from './pages/AchievementsPage';
import NotificationsPage from './pages/NotificationsPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/map" element={<MapPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/achievements" element={<AchievementsPage />} />
                    <Route path="/notifications" element={<NotificationsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

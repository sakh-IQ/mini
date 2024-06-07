import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <h1>Welcome to Sport City</h1>
            <p>Explore sports facilities and events around you.</p>
            <nav>
                <Link to="/map">Go to Map</Link>
                <Link to="/profile">Go to Profile</Link>
                <Link to="/achievements">Go to Achievements</Link>
                <Link to="/notifications">Go to Notifications</Link>
            </nav>
        </div>
    );
};

export default MainPage;

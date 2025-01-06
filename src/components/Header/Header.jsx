import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="logo">Smash Buddy</li>
                    <li className="nav-item"><a href="#upload-video">Upload Video</a></li>
                    <li className="nav-item"><a href="#tournaments">Tournaments</a></li>
                    <li className="nav-item"><a href="#clubs">Clubs & Exercises</a></li>
                    <li className="nav-item"><a href="#shop">Shop</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

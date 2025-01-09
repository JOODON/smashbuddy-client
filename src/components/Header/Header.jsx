import React from 'react';
import styles from './Header.module.scss';  // CSS 모듈 import

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoWrapper}>
                <span className={styles.logo}>Smash Buddy</span>
            </div>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="#upload-video">Upload Video</a></li>
                    <li className={styles.navItem}><a href="#tournaments">Tournaments</a></li>
                    <li className={styles.navItem}><a href="#clubs">Clubs & Exercises</a></li>
                    <li className={styles.navItem}><a href="#shop">Shop</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

import React from 'react';
import styles from './Footer.module.scss';  // CSS 모듈 import

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <div className={styles.footerItem}>
                    <img src="https://cdn-icons-png.flaticon.com/512/74/74176.png" alt="아이콘1"/>
                    <p>아이콘1 텍스트</p>
                </div>
                <div className={styles.footerItem}>
                    <img src="https://cdn-icons-png.flaticon.com/512/74/74176.png" alt="아이콘1"/>
                    <p>아이콘1 텍스트</p>
                </div>
                <div className={styles.footerItem}>
                    <img src="https://cdn-icons-png.flaticon.com/512/74/74176.png" alt="아이콘1"/>
                    <p>아이콘1 텍스트</p>
                </div>
                <div className={styles.footerItem}>
                    <img src="https://cdn-icons-png.flaticon.com/512/74/74176.png" alt="아이콘1"/>
                    <p>아이콘1 텍스트</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;

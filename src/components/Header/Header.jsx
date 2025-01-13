import React from 'react';
import styles from './Header.module.scss';  // CSS 모듈 import
import setting from '../../assets/icon/setting.png';
import logo from '../../assets/icon/logo.png';

function Header( { switchComponent } ) {
    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={() => switchComponent("main")}>
                <img src={logo} className={styles.logo} alt="setting"/>
            </div>

            <div className={styles.userSettings}>
                <img src={setting} className={styles.userSettingsIcon} alt="setting"/>
            </div>
        </header>
    );
}

export default Header;

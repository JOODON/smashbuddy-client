import React from 'react';
import styles from './Footer.module.scss';  // CSS 모듈 import
import badmintonIcon from '../../assets/icon/badminton-tournament.png';
import marketIcon from '../../assets/icon/market.png';
import group from '../../assets/icon/group.png';
import video from '../../assets/icon/video.png';

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <div className={styles.footerItem}>
                    <img src={badmintonIcon} alt="배드민턴 대회" />
                    <p>배드민턴 대회</p>
                </div>
                <div className={styles.footerItem}>
                    <img src={marketIcon} alt="배드민턴 대회"/>
                    <p>플리마켓</p>
                </div>
                <div className={styles.footerItem}>
                    <img src={group} alt="배드민턴 모임"/>
                    <p>배드민턴 모임</p>
                </div>
                <div className={styles.footerItem}>
                    <img src={video} alt="아이콘1"/>
                    <p>배드민턴 영상</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;

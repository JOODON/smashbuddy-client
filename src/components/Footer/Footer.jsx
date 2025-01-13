import React from 'react';
import styles from './Footer.module.scss';  // CSS 모듈 import
import badmintonIcon from '../../assets/icon/badminton-tournament.png';
import marketIcon from '../../assets/icon/market.png';
import group from '../../assets/icon/group.png';
import video from '../../assets/icon/video.png';

const footerItems = [
    {
        key: "tournament",
        icon: badmintonIcon,
        alt: "배드민턴 대회",
        label: "배드민턴 대회",
    },
    {
        key: "market",
        icon: marketIcon,
        alt: "플리마켓",
        label: "플리마켓",
    },
    {
        key: "group",
        icon: group,
        alt: "배드민턴 모임",
        label: "배드민턴 모임",
    },
    {
        key: "video",
        icon: video,
        alt: "배드민턴 영상",
        label: "배드민턴 영상",
    },
];


function Footer({ switchComponent }) {
    return (
        <footer>
            <div className={styles.footerContainer}>
                {footerItems.map(({key, icon, alt, label}) => (
                    <div
                        key={key}
                        className={styles.footerItem}
                        onClick={() => switchComponent(key)} // 각 key 값에 따라 토글
                    >
                        <img src={icon} alt={alt}/>
                        <p>{label}</p>
                    </div>
                ))}
            </div>
        </footer>

    );
};

export default Footer;

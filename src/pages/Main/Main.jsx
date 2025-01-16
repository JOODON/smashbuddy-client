import React, { useState, useRef, useEffect } from 'react';
import styles from './Main.module.scss';  // CSS 모듈 import
import testVideo from '../../assets/test.mp4';

const Main = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const handleFullscreenChange = () => {
            if (document.fullscreenElement === videoRef.current) {
                setIsFullscreen(true);  // 전체 화면 모드로 진입
            } else {
                setIsFullscreen(false); // 전체 화면 모드 종료
            }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);

        // 클린업
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    const handlePlayButtonClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play()
                    .then(() => {
                        setIsPlaying(true);  // 비디오 재생이 시작되면 상태 업데이트
                    })
                    .catch((error) => {
                        console.error("Error playing the video: ", error);  // 에러 핸들링
                    });
            } else {
                videoRef.current.pause();
                setIsPlaying(false);  // 비디오가 일시 정지되면 상태 업데이트
            }
        }
    };

    const handleFullscreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen()
                    .then(() => setIsFullscreen(true)) // 전체 화면으로 전환 후 상태 업데이트
                    .catch((error) => {
                        console.error("Error entering fullscreen: ", error);
                    });
            }
        }
    };

    return (
        <main className={styles.container}>
            <div className={styles.section}>
                <div className={styles.bestItem}>
                    <h2>인기 상품</h2>
                    <div className={styles.bestItemWrapper}>
                        <div className={styles.bestItemImg}>
                            <img src="https://sitem.ssgcdn.com/70/17/46/item/1000049461770_i1_750.jpg" alt="상품 이미지"/>
                        </div>
                        <div className={styles.bestItemDescription}>
                            <p>상품 이름</p>
                            <p>상품 가격</p>
                            <p>라켓 무게</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.bestVideo}>
                    <h2>금주 이슈 영상</h2>
                    <div className={styles.videoContainer}>
                        <video
                            ref={videoRef}
                            className={`${styles.videoContent} ${isFullscreen ? styles.fullscreen : ''}`}
                            poster="https://i.ytimg.com/vi/WWNwYAmGTIw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDip3Pxd5ogpLvR0MmM_t2dBu1Fvg"
                            onClick={handlePlayButtonClick}  // 비디오 클릭 시에도 정지/재생 처리
                        >
                            <source src={testVideo} type="video/mp4"/> {/* 실제 비디오 URL로 수정 */}
                            비디오를 지원하지 않는 브라우저입니다.
                        </video>
                        {/* 커스텀 플레이 버튼 */}
                        <button
                            className={`${styles.playButton} ${isPlaying || isFullscreen ? styles.hidden : ''}`}
                            onClick={handlePlayButtonClick}
                        >
                            ▶
                        </button>
                        {/* 전체화면 버튼 */}

                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionHorizontal}>
                    <div className={styles.groupSession}>
                        <h2>대회 일정</h2>
                        <p>다가오는 대회를 확인해보세요!</p>
                    </div>
                    <div className={styles.tournamentSession}>
                        <h2>모임 정보</h2>
                        <p>가까운 모임에서 함께 운동하세요!</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;

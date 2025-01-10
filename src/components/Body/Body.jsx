import React from 'react';
import styles from './Body.module.scss';  // CSS 모듈 import


const Body = () => {
    return (
        <main className={styles.container}>
            <div className={styles.section}>
                <div className={styles.bestItem}>
                    <h2>인기 상품</h2>
                    <div className={styles.bestItemWrapper}>
                        <div className={styles.bestItemImg}>
                            <img src={"https://sitem.ssgcdn.com/70/17/46/item/1000049461770_i1_750.jpg"} alt="상품 이미지"/>
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
                    <video>

                    </video>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionHorizontal}>
                    <div className={styles.groupSession}>
                        <h2>대회 일정</h2>
                        <p>다가오는 대회를 확인해보세요!</p>
                        <p>다가오는 대회를 확인해보세요!</p>
                        <p>다가오는 대회를 확인해보세요!</p>
                        <p>다가오는 대회를 확인해보세요!</p>
                        <p>다가오는 대회를 확인해보세요!</p>
                        <p>다가오는 대회를 확인해보세요!</p>
                        <p>다가오는 대회를 확인해보세요!</p>
                    </div>
                    <div className={styles.tournamentSession}>
                        <h2>모임 정보</h2>
                        <p>가까운 모임에서 함께 운동하세요!</p>
                        <p>가까운 모임에서 함께 운동하세요!</p>
                        <p>가까운 모임에서 함께 운동하세요!</p>
                        <p>가까운 모임에서 함께 운동하세요!</p>
                        <p>가까운 모임에서 함께 운동하세요!</p>
                        <p>가까운 모임에서 함께 운동하세요!</p>
                        <p>가까운 모임에서 함께 운동하세요!</p>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Body;

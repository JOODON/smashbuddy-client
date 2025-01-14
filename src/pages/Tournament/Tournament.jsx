import React from "react";
import TournamentItem from "./component/TournamentItem";
import styles from "./Tournament.module.scss";

const tournamentGroups = [
    {
        title: "다가오는 대회",
        data: [
            {
                title: "전국 배드민턴 대회",
                tournamentTitle: "제25회 서울 오픈 배드민턴 대회",
                date: "2025-02-10",
                address: "서울특별시 잠실 실내체육관",
                tournamentImg: "https://img.freepik.com/free-psd/badminton-template-design_23-2151496594.jpg",
            },
            {
                title: "지역 배드민턴 리그",
                tournamentTitle: "부산 리그 챔피언십",
                date: "2025-03-15",
                address: "부산광역시 사직 실내체육관",
                tournamentImg: "https://img.freepik.com/free-psd/badminton-template-design_23-2151496594.jpg",
            },
        ],
    },
    {
        title: "1월 대회",
        data: [
            {
                title: "친선 경기",
                tournamentTitle: "2025 대전 배드민턴 친선 경기",
                date: "2025-04-05",
                address: "대전광역시 한밭체육관",
                tournamentImg: "https://img.freepik.com/free-psd/badminton-template-design_23-2151496594.jpg",
            },
            {
                title: "국제 배드민턴 대회",
                tournamentTitle: "제12회 아시아 배드민턴 챔피언십",
                date: "2025-06-20",
                address: "인천광역시 송도 컨벤션센터",
                tournamentImg: "https://img.freepik.com/free-psd/badminton-template-design_23-2151496594.jpg",
            },
        ],
    },
    {
        title: "2월 대회",
        data: [
            {
                title: "학생 리그",
                tournamentTitle: "제7회 전국 대학생 배드민턴 대회",
                date: "2025-05-12",
                address: "광주광역시 유니버시아드 체육관",
                tournamentImg: "https://img.freepik.com/free-psd/badminton-template-design_23-2151496594.jpg",
            },
        ],
    },
];

const Tournament = () => {
    return (
        <main className={styles.tournamentPage}>
            {tournamentGroups.map((group, groupIndex) => (
                <div className={styles.tournamentContainer} key={groupIndex}>
                    <h2>{group.title}</h2>
                    <hr />
                    {group.data.map((item, itemIndex) => (
                        <TournamentItem
                            key={itemIndex}
                            title={item.title}
                            tournamentTitle={item.tournamentTitle}
                            date={item.date}
                            address={item.address}
                            tournamentImg={item.tournamentImg}
                        />
                    ))}
                </div>
            ))}
        </main>
    );
};

export default Tournament;

import styles from "../Tournament.module.scss";
import React from "react";

const TournamentItem = ({title , tournamentTitle , date , address , tournamentImg }) => {
    return (
        <div className={styles.tournamentItem}>
            <div>
                <h3>{tournamentTitle}</h3>
                <p>{address}</p>
                <p>{date}</p>
            </div>
            <img src={tournamentImg}/>
        </div>

)
    ;
};

export default TournamentItem;

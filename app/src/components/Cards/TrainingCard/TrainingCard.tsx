import { FC } from "react";
import { NavLink, Route, useNavigate } from "react-router-dom";
import { Icon } from "../../Icon/Icon";
import styles from "../TrainingCard/TrainingCard.module.sass";


interface Props {
    picture: string
    name: string,
    link: string
}


const TrainingCard: FC<Props> = ({ picture, name, link }) => {
    return (
            <div className={styles.training_card} >
            <a href={link}>
                <div className={styles.training_card__top}>
                    <img src={picture} />
                </div>
                <div className={styles.training_card__bottom}>
                    <div className={styles.training_card__bottom__title}>
                        <p>{name}</p>
                    </div>
                </div>
                </a>
            </div>
    )
}

export default TrainingCard
import { FC } from "react";
import { Icon } from "../../Icon/Icon";
import styles from "../TrainingCard/TrainingCard.module.sass";


interface Props{
    picture: string
    name: string 
}


const TrainingCard:FC<Props> = ({picture, name}) => {
    return (
        <div className={styles.training_card}>
            <div className={styles.training_card__top}>
                <img src={picture} />
            </div>
            <div className={styles.training_card__bottom}>
                <div className={styles.training_card__bottom__title}>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default TrainingCard
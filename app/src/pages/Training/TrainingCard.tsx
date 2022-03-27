import { FC } from 'react'
import { Icon } from '../../components/Icon/Icon'
import styles from '../Training/Training.module.sass'

interface Props{
    picture: string
    name: string 
}


const TrainingCard:FC<Props> = ({picture, name}) => {
    return (
        <div className={styles.card_training_wrap}>
            <div className={styles.upper_training_card}>
                <img src={picture} width={420} height={400}/>
            </div>
            <div className={styles.lower_training_card}>
                <div className={styles.time_training}>
                    <Icon name="timer" width="75" height="52" />
                    <p className={styles.minutes}>35 МИН</p>
                </div>
                <hr />
                <div className={styles.name_training}>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default TrainingCard

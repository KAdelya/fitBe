import React, { useState } from 'react'
import { Icon } from '../../components/Icon/Icon'
import styles from '../Training/Training.module.sass'
import settings from '../../assets/images/settings.svg';
import example1 from '../../assets/images/example1.svg'
import example2 from '../../assets/images/example2.svg'
import example3 from '../../assets/images/example3.svg'
import example4 from '../../assets/images/example4.svg'
import axios from 'axios';
import ExerciseService from '../../services/exercise.service'
import TrainingCard from './TrainingCard';
import Button from '../../components/ui/button/button';
import Header from '../../components/Header/Header';

const Training = () => {
    const [exercise, setExercise] = useState([]);
    const [image, setImage] = useState([]);

    ExerciseService.getExerciseName().then(res => {
        console.log(res.data)
        setExercise(res.data.results)
    }).catch(err => {
        console.log(err)
    })

    ExerciseService.getExercisePicture().then(res => {
        console.log(res.data.results)
        setImage(res.data.results)
    }).catch(err => {
        console.log(err)
    })


    const result2 = image.map((data: any) => <div className={styles.wrapper}><img src={data.image} width={100} /></div>)

    return (
        <div>
            <Header />
            <section className={styles.main_content}>
                <div className={styles.main_content_wrapper}>
                    <div className={styles.main_title}>
                        <h1>Try the workouts on our website</h1>
                        <p>Join our dynamic training team
                            Try boxing, Pilates, yoga and meditation -
                            right here on our website - click on the icon to get started.</p>
                    </div>

                    <div className={styles.card_content}>

                        {
                            image.map((data: any) => <TrainingCard picture={data.image} name="" />)
                        }


                        <div className={styles.card_training_wrap}>
                            <div className={styles.upper_training_card}>
                                <img src={example2} width={450} />
                            </div>
                            <div className={styles.lower_training_card}>
                                <div className={styles.time_training}>
                                    <Icon name="timer" width="75" height="52" />
                                    <p className={styles.minutes}>55 min</p>
                                </div>
                                <hr />
                                <div className={styles.name_training}>
                                    <p>Тренировка с весом</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card_training_wrap}>
                            <div className={styles.upper_training_card}>
                                <img src={example3} width={450} />
                            </div>
                            <div className={styles.lower_training_card}>
                                <div className={styles.time_training}>
                                    <Icon name="timer" width="75" height="52" />
                                    <p className={styles.minutes}>1 hour</p>
                                </div>
                                <hr />
                                <div className={styles.name_training}>
                                    <p>Тренировка на все тело</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card_training_wrap}>
                            <div className={styles.upper_training_card}>
                                <img src={example4} width={450} />
                            </div>
                            <div className={styles.lower_training_card}>
                                <div className={styles.time_training}>
                                    <Icon name="timer" width="75" height="52" />
                                    <p className={styles.minutes}>1 hour</p>
                                </div>
                                <hr />
                                <div className={styles.name_training}>
                                    <p>Бокс</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer >
                <p>© 2021 All rights reserved. </p>
            </footer>

        </div>
    )
}

export default Training
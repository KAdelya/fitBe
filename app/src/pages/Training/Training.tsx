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
   

    const result2 = image.map((data: any) => <div className={styles.wrapper}><img src={data.image} width={100}/></div>)

    return (

        <>
                <header className={styles.upper_header}>
                    <div className={styles.logo_wrapper}>
                        <Icon name="logo" width="75" height="52" />
                        <p>BeFit</p>
                    </div>
                    <nav className={styles.navbar_wrapper}>
                        <ul>
                            <li>Обо мне</li>
                            <li>Главная</li>
                            <li>Тренировки</li>
                            <li>Дневник</li>
                        </ul>
                    </nav>
                    <button className={styles.button}>Выйти</button>
                    <img src={settings} width={30} className={styles.settings} />
                </header>

                <section className={styles.main_content}>
                    <div className={styles.main_content_wrapper}>
                        <div className={styles.main_title}>
                            <h1>Попробуйте тренировки на нашем сайте</h1>
                            <p>Присоединяйтесь к нашей команде для динамичных занятий
                                Попробуйте бокс, пилатес, йогу и медитацию —
                                прямо здесь, на нашем сайте — нажмите на иконку чтобы начать.</p>
                        </div>

                        <div className={styles.card_content}>

                        {
                            image.map((data: any) => <TrainingCard picture={data.image} name="" />)
                        }
                           

                            <div className={styles.card_training_wrap}>
                                <div className={styles.upper_training_card}>
                                    <img src={example2} width={420} />
                                </div>
                                <div className={styles.lower_training_card}>
                                    <div className={styles.time_training}>
                                        <Icon name="timer" width="75" height="52" />
                                        <p className={styles.minutes}>55 МИН</p>
                                    </div>
                                    <hr />
                                    <div className={styles.name_training}>
                                        <p>Тренировка с весом</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.card_training_wrap}>
                                <div className={styles.upper_training_card}>
                                    <img src={example3} width={420} />
                                </div>
                                <div className={styles.lower_training_card}>
                                    <div className={styles.time_training}>
                                        <Icon name="timer" width="75" height="52" />
                                        <p className={styles.minutes}>1 час</p>
                                    </div>
                                    <hr />
                                    <div className={styles.name_training}>
                                        <p>Тренировка на все тело</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.card_training_wrap}>
                                <div className={styles.upper_training_card}>
                                    <img src={example4} width={420} />
                                </div>
                                <div className={styles.lower_training_card}>
                                    <div className={styles.time_training}>
                                        <Icon name="timer" width="75" height="52" />
                                        <p className={styles.minutes}>1 час</p>
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
            <footer className={styles.footer}>
                <hr />
                <div className={styles.footer_wrapper}>
                    <pre>Twitter      Facebook      Instagram</pre>
                    <pre>© 2021 All rights reserved. </pre>
                </div>
            </footer>
        
        </>
    )
}

export default Training
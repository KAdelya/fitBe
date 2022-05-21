import React, { useState } from 'react'
import { Icon } from '../../components/Icon/Icon'
import styles from '../Training/Training.module.sass'
import example2 from '../../assets/images/example2.svg'
import example3 from '../../assets/images/example3.svg'
import example4 from '../../assets/images/example4.svg'
import axios from 'axios';
import ExerciseService from '../../services/exercise.service'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TrainingCard from '../../components/TrainingCard/TrainingCard'



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
            <section className={styles.training_page}>
                <div className={styles.training_page__content}>
                    <div className={styles.training_page__content__title}>
                        <h1>Try the workouts on our website</h1>
                        <p>Join our dynamic training team
                            Try boxing, Pilates, yoga and meditation -
                            right here on our website - click on the icon to get started.</p>
                    </div>
                    <div className={styles.training_page__content__cards}>
                        {
                            image.map((data: any) => <TrainingCard picture={data.image} name="" />)
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Training
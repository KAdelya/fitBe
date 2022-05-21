import { useState } from 'react'
import styles from '../Training/Training.module.sass'
import ExerciseService from '../../services/exercise.service'
import TrainingCard from '../../components/TrainingCard/TrainingCard'



const Training = () => {
    const [exercise, setExercise] = useState([]);
    const [image, setImage] = useState([]);

    ExerciseService.getExerciseName().then(res => {
        setExercise(res.data.results)
    }).catch(err => {
        console.log(err)
    })

    ExerciseService.getExercisePicture().then(res => {
        setImage(res.data.results)
    }).catch(err => {
        console.log(err)
    })


    const result2 = image.map((data: any) => <div className={styles.wrapper}><img src={data.image} width={100} /></div>)

    return (
        <div>
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
        </div>
    )
}

export default Training
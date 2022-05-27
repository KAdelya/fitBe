import styles from '../Training/Training.module.sass';
import TrainingCard from '../../components/Cards/TrainingCard/TrainingCard';
import { exerciseItems } from '../../mocks/exerciseMock';
import Skeleton from '../../components/Skeletons/Skeleton';



const Training = () => {
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
                            exerciseItems.map((item: any)=>
                                <TrainingCard picture={item.image} 
                                    name={item.name} 
                                    link={item.link}/>)
                            
                        }
                    </div>
                    <div><Skeleton/></div>
                </div>
            </section>
        </div>
    );
};

export default Training;
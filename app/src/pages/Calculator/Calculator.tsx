import styles from '../Calculator/Calculator.module.sass';
import FoodCard from '../../components/Cards/FoodCard/FoodCard';
import Card from '../../components/Cards/FoodCard/Card';
import WaterCard from '../../components/Cards/WaterCard/WaterCard';

import { useAppSelector } from '../../utils/redux-hooks';

const Calculator = () => {
    const {fats, carbohydrates, squirrels, calories } = useAppSelector(state => state.calories);
    return (
        <div>
            <section className={styles.calculator_page}>
                <h1>Today</h1>
                <div className={styles.calculator_page__block}>
                    <div>
                        <p>Fats</p>
                        <pre>{fats}</pre>
                    </div>
                    <div>
                        <p>Carbohydrates</p>
                        <pre>{carbohydrates}</pre>
                    </div>
                    <div>
                        <p>Squirrels</p>
                        <pre>{squirrels}</pre>
                    </div>
                    <div>
                        <p>Calories</p>
                        <pre>{calories}</pre>
                    </div>
                </div>
                <div className={styles.calculator_page__food_blocks}>
                    <WaterCard/>
                    <FoodCard title='Breakfast' />
                    <Card title='Lunch' />
                    <Card title='Dinner' />
                    <Card title='Snack/Other' />
                </div>
            </section>
        </div>
    );
};

export default Calculator;
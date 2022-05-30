import styles from '../Calculator/Calculator.module.sass';
import FoodCard from '../../components/Cards/FoodCard/FoodCard';
import WaterCard from '../../components/Cards/WaterCard/WaterCard';
const Calculator = () => {
    return (
        <div>
            <section className={styles.calculator_page}>
                <h1>Today</h1>
                <div className={styles.calculator_page__block}>
                    <div>
                        <p>Fats</p>
                        <pre>34.76</pre>
                    </div>
                    <div>
                        <p>Carbohydrates</p>
                        <pre>34.76</pre>
                    </div>
                    <div>
                        <p>Squirrels</p>
                        <pre>34.76</pre>
                    </div>
                    <div>
                        <p>Calories</p>
                        <pre>34.76</pre>
                    </div>
                </div>
                <div className={styles.calculator_page__food_blocks}>
                    <WaterCard/>
                    <FoodCard title='Breakfast' />
                    <FoodCard title='Lunch' />
                    <FoodCard title='Dinner' />
                    <FoodCard title='Snack/Other' />
                </div>
            </section>
        </div>
    );
};

export default Calculator;
import { Icon } from '../../components/Icon/Icon';
import styles from '../Calculator/Calculator.module.sass'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

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

                <div className={styles.calculator_page__food}>
                    <div className={styles.calculator_page__food__top}>
                        <h3>Breakfast</h3>
                        <div className={styles.calculator_page__food__icon}>
                            <Icon name="plus" width="50" height="42" />
                        </div>
                    </div>
                    <div className={styles.calculator_page__food__bottom}>
                        <div>
                            <pre>34.76</pre>
                        </div>
                        <div>
                            <pre>34.76</pre>
                        </div>
                        <div>
                            <pre>34.76</pre>
                        </div>
                        <div>
                            <pre>34.76</pre>
                        </div>
                    </div>
                </div>

                <div className={styles.calculator_page__food}>
                    <div className={styles.calculator_page__food__top}>
                        <h3>Lunch</h3>
                        <div className={styles.calculator_page__food__icon}>
                            <Icon name="plus" width="50" height="42" />
                        </div>
                    </div>
                    <div className={styles.calculator_page__food__bottom}>
                        <div>
                            <pre>34.76</pre>
                        </div>
                        <div>
                            <pre>34.76</pre>
                        </div>
                        <div>
                            <pre>34.76</pre>
                        </div>
                        <div>
                            <pre>34.76</pre>
                        </div>
                    </div>
                </div>

                <div className={styles.calculator_page__food}>
                    <div className={styles.calculator_page__food__top}>
                        <h3>Dinner</h3>
                        <div className={styles.calculator_page__food__icon}>
                            <Icon name="plus" width="50" height="42" />
                        </div>
                    </div>
                    <div className={styles.calculator_page__food__bottom}>
                        <div>
                            <pre>34.76</pre>
                        </div>
                        <div>
                            <pre>34.76</pre>
                        </div>
                        <div>
                            <pre>34.76</pre>
                        </div>
                        <div>
                            <pre>34.76</pre>
                        </div>
                    </div>
                </div>

                <div className={styles.calculator_page__food}>
                    <div className={styles.calculator_page__food__top}>
                        <h3>Snack/Other</h3>
                        <div className={styles.calculator_page__food__icon}>
                            <Icon name="plus" width="50" height="42" />
                        </div>
                    </div>
                </div>

                <div className={styles.calculator_page__food}>
                    <div className={styles.calculator_page__food__top}>
                        <h3>Water tracker</h3>
                        <div className={styles.calculator_page__food__icon}>
                            <Icon name="plus" width="50" height="42" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Calculator
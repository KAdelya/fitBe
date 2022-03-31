import React from 'react';
import { Icon } from '../../components/Icon/Icon';
import styles from '../Calculator/Calculator.module.sass'
import settings from '../../assets/images/settings.svg';
import Button from '../../components/ui/button/button';
import Header from '../../components/Header/Header';

const Calculator = () => {
    return (
        <div>
            <Header />
            <div className={styles.page_content}>
                <section className={styles.main_content}>
                    <div className={styles.main_content_wrapper}>
                        <div className={styles.upper_info}>
                            <h1>Today</h1>
                        </div>
                        <div className={styles.calculator_block}>
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

                        <div className={styles.block_for_food}>
                            <div className={styles.upper_food_block}>
                                <h3>Breakfast</h3>
                                <div className={styles.icon_wrapper}>
                                    <Icon name="plus" width="50" height="42" />
                                </div>
                            </div>
                            <div className={styles.lower_food_block}>
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

                        <div className={styles.block_for_food}>
                            <div className={styles.upper_food_block}>
                                <h3>Lunch</h3>
                                <div className={styles.icon_wrapper}>
                                    <Icon name="plus" width="50" height="42" />
                                </div>
                            </div>
                            <div className={styles.lower_food_block}>
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

                        <div className={styles.block_for_food}>
                            <div className={styles.upper_food_block}>
                                <h3>Dinner</h3>
                                <div className={styles.icon_wrapper}>
                                    <Icon name="plus" width="50" height="42" />
                                </div>
                            </div>
                            <div className={styles.lower_food_block}>
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

                        <div className={styles.block_for_food}>
                            <div className={styles.upper_food_block}>
                                <h3>Snack/Other</h3>
                                <div className={styles.icon_wrapper}>
                                    <Icon name="plus" width="50" height="42" />
                                </div>
                            </div>
                        </div>

                        <div className={styles.block_for_food}>
                            <div className={styles.upper_food_block}>
                                <h3>Water tracker</h3>
                                <div className={styles.icon_wrapper}>
                                    <Icon name="plus" width="50" height="42" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer>
                <p>Copyright © 2022. All rights reserved</p>
            </footer>
        </div>
    )
}

export default Calculator
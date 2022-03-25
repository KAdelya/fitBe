import React from 'react';
import { Icon } from '../../components/Icon/Icon';
import styles from '../Calculator/Calculator.module.sass'
import settings from '../../assets/images/settings.svg';

const Calculator = () => {
    return (
        <div className={styles.content}>
            <div className={styles.page_content}>
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
                        <div className={styles.upper_info}>
                            <pre className={styles.rec}>Рекомендованная норма:  2000ккал</pre>
                            <p className={styles.date}>Сегодня</p>
                        </div>
                        <div className={styles.calculator_block}>
                            <div>
                                <p>Жиры</p>
                                <pre>34.76</pre>
                            </div>
                            <div>
                                <p>Углеводы</p>
                                <pre>34.76</pre>
                            </div>
                            <div>
                                <p>Белки</p>
                                <pre>34.76</pre>
                            </div>
                            <div>
                                <p>Калории</p>
                                <pre>34.76</pre>
                            </div>
                        </div>

                        <div className={styles.block_for_food}>
                            <div className={styles.upper_food_block}>
                                <p>Завтрак</p>
                                <div>
                                    <Icon name="plus" width="50" height="42" />
                                </div>
                            </div>
                            <hr />
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
                                <p>Обед</p>
                                <div>
                                    <Icon name="plus" width="50" height="42" />
                                </div>
                            </div>
                            <hr />
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
                                <p>Ужин</p>
                                <div>
                                    <Icon name="plus" width="50" height="42" />
                                </div>
                            </div>
                            <hr />
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
                                <p>Перекус/Другое</p>
                                <div>
                                    <Icon name="plus" width="50" height="42" />
                                </div>
                            </div>
                        </div>

                        <div className={styles.block_for_food}>
                            <div className={styles.upper_food_block}>
                                <p>Трекер воды</p>
                                <div>
                                    <Icon name="plus" width="50" height="42" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer className={styles.footer}>
                <hr />
                <div className={styles.footer_wrapper}>
                    <pre>Twitter      Facebook      Instagram</pre>
                    <pre>© 2021 All rights reserved. </pre>
                </div>
            </footer>
        </div>
    )
}

export default Calculator
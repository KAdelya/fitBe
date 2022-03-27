import styles from './../MainPage/MainPage.module.sass';
import dumbbell from '../../assets/images/main.svg';
import firstPict from '../../assets/images/be_in_shape.jpg';
import secondPict from '../../assets/images/nutrition.jpg';
import thirdPict from '../../assets/images/water.jpg';
import fourthPict from '../../assets/images/willpower.jpg';
import { HeaderMainAndQuestionnaire } from "../../components/HeaderMainAndQuestionnaire/HeaderMainAndQuestionnaire";
import {observer} from "mobx-react";

export const MainPage = observer(() => {
    return (
        <div className={styles.page_content}>
            <div className={styles.page_content_wrapper}>
                <section className={styles.upper_content_wrapper}>
                    <HeaderMainAndQuestionnaire />
                    <section className={styles.main_content}>
                        <div className={styles.main_content_wrapper}>
                            <div className={styles.title_content}>
                                <p>Начни меняться
                                    <br />вместе с BeFit</p>
                            </div>
                            <div className={styles.info_content}>
                                <div className={styles.text_wrapper}>
                                    <p>Мы призываем вас отправиться в
                                        <br />фитнес-путешествие вместе с нашим
                                        <br />приложением!</p>
                                    <p>Мы предлагаем реалистичные
                                        <br /> рекомендации — никаких быстрых
                                        <br />решений, потому что они просто не
                                        <br />работают.</p>
                                    <p>Вы научитесь заботиться о себе,
                                        <br />постепенно меняя привычки.</p>
                                </div>
                                <div className={styles.pict_wrapper}>
                                    <img src={dumbbell} />
                                </div>
                            </div>
                            <div className={styles.second_title_content}>
                                <p>Хочешь поменять свою жизнь к лучшему?</p>
                            </div>
                            <div className={styles.registration_button_content}>
                                <div className={styles.left_block}>
                                    <div className={styles.block_component}>
                                        <img src={firstPict} />
                                        <p>Хочешь начать правильно питаться?</p>
                                    </div>
                                    <div className={styles.block_component}>
                                        <img src={secondPict} />
                                        <p>Быть в форме?</p>
                                    </div>
                                </div>
                                <div className={styles.right_block}>
                                    <div className={styles.block_component}>
                                        <img src={thirdPict} />
                                        <p>Наладить водный баланс?</p>
                                    </div>
                                    <div className={styles.block_component}>
                                        <img src={fourthPict} />
                                        <p>Стать лучшей версией себя?</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.center_block}>
                                <p>Тогда регистрируйся</p>
                                {/* <img src={arrow} /> */}
                                <div className={styles.button_wrapper}>
                                    <a href='/registration' type='button' className={styles.button_reg}>Регистрация</a>
                                </div>
                                <a href='/sign' className={styles.link}>Уже зарегистрирован(-а)?</a>
                            </div>
                        </div>
                    </section>
                </section>
                <footer className={styles.footer}>
                    <hr />
                    <div className={styles.footer_wrapper}>
                        <p>© 2021 All rights reserved. </p>
                    </div>
                </footer>
            </div>
        </div>
    )
});
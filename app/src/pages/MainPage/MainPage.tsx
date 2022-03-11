import { Icon } from '../../components/Icon/Icon';
import { MainBackground } from '../../components/MainBackground/MainBackground';
import styles from './../MainPage/MainPage.module.sass';
import model from '../../assets/images/model.svg'
import arrow from '../../assets/images/down.svg'
import firstPict from '../../assets/images/be_in_shape.svg'
import secondPict from '../../assets/images/nutrition.svg'
import thirdPict from '../../assets/images/water.svg'
import fourthPict from '../../assets/images/willpower.svg'

export const MainPage = () => {
    return (
        <div className={styles.page_content}>
            <div className={styles.page_content_wrapper}>
                <div className={styles.upper_content_wrapper}>
                    <header className={styles.header}>
                        <div className={styles.header_wrapper}>
                            <div className={styles.logo_wrapper}>
                                <Icon name="logo" width="85" height="62" />
                                <p>BeFit</p>
                                {/* <div className={styles.button_wrapper}>
                                <button>Войти</button>
                            </div> */}
                            </div>
                        </div>
                    </header>
                    <section className={styles.main_content}>
                        <div className={styles.main_content_wrapper}>
                            <div className={styles.title_content}>
                                <p>Начни меняться
                                    <br />вместе с BeFit</p>
                            </div>
                            <div className={styles.info_content}>
                                <div className={styles.text_wrapper}>
                                    <p>Мы призываем вас  отправиться в
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
                                    <img src={model} />
                                </div>
                            </div>
                            <div className={styles.second_title_content}>
                                <p>Хочешь поменять свою жизнь к лучшему?</p>
                                <p className={styles.label_text}>Тогда регистрируйся</p>
                            </div>
                            <div className={styles.registration_button_content}>
                                <div className={styles.left_block}>
                                    <div className={styles.block_component}>
                                        <img src={firstPict} />
                                        <p>Хочешь быть в форме?</p>
                                    </div>
                                    <div className={styles.block_component}>
                                        <img src={secondPict} />
                                    </div>
                                </div>
                                <div className={styles.center_block}>
                                    <img src={arrow} />
                                    <div className={styles.button_wrapper}>
                                        <button>Регистрация</button>
                                    </div>
                                    <p>Уже зарегистрирован(-а)?</p>
                                </div>
                                <div className={styles.right_block}>
                                    <div className={styles.block_component}>
                                        <img src={thirdPict} />
                                        <p>Наладить водный баланс?</p>
                                    </div>
                                    <div className={styles.block_component}>
                                        <img src={fourthPict} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <footer className={styles.footer}>
                <hr />
                    <div className={styles.footer_wrapper}>
                        somebody ones
                    </div>
                </footer>
            </div>
        </div>
    )
}
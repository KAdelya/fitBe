import { Icon } from '../../components/Icon/Icon';
import { MainBackground } from '../../components/MainBackground/MainBackground';
import styles from './../Advertising/Advertising.module.sass';
import model from '../../assets/images/model.svg'

export const Advertising = () => {
    return (
        <div className={styles.page_content}>
            <header className={styles.wrapper_content}>
                <div className={styles.header_wrapper}>
                    <div className={styles.logo_content_wrapper}>
                        <div className={styles.logo_content}>
                            <Icon name="logo" width="79" height="55" />
                            <p>BeFit</p>
                            <div className={styles.button_content_wrapper}>
                                <button className={styles.border_wrapper}>Войти</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={styles.main_content_wrapper}>
                <div className={styles.main_content}>
                    <p>Начни меняться
                        <br />вместе с BeFit</p>
                </div>
                <div className={styles.inline_blocks_wrapper}>
                    <div className={styles.inline_block_text}>
                        <p>Мы призываем вас  отправиться в
                            <br />фитнес-путешествие вместе с нашим
                            <br />приложением!</p>
                        <p>Мы предлагаем реалистичные
                            <br /> рекомендации — никаких быстрых
                            <br />решений, потому что они просто не
                            <br />работают.</p>
                        <p>Вы научитесь заботиться о себе,
                            <    br />постепенно меняя привычки.</p>
                    </div>
                    <div className={styles.main_pict_wrapper}>
                        <img src={model} />
                    </div>
                </div>
                <div className={styles.inline_blocks_wrapper}>
                    <div className={styles.inline_block_text}>
                        <p>Мы призываем вас  отправиться в
                            <br />фитнес-путешествие вместе с нашим
                            <br />приложением!</p>
                        <p>Мы предлагаем реалистичные
                            <br /> рекомендации — никаких быстрых
                            <br />решений, потому что они просто не
                            <br />работают.</p>
                        <p>Вы научитесь заботиться о себе,
                            <    br />постепенно меняя привычки.</p>
                    </div>
                    <div className={styles.main_pict_wrapper}>
                        <img src={model} />
                    </div>
                </div>
            </div>

        </div>
    );
}

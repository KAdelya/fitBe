import { Icon } from '../../components/Icon/Icon';
import styles from '../PersonalArea/PersonalArea.module.sass';
import menu from '../../assets/images/menu.svg';
import settings from '../../assets/images/settings.svg';

const PersonalArea = () => {
    return (
        <div className={styles.page_content}>
            <div className={styles.page_content_wrapper}>
                <div className={styles.upper_content_wrapper}>
                    <header className={styles.header}>

                        <div className={styles.menu_wrapper}>
                            <img src={menu} />
                            <Icon name="logo" width="85" height="62" />
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

                        <div className={styles.settings_wrapper}>
                            <div className={styles.button_wrapper}>
                                <button>Войти</button>
                                <img src={settings} />
                            </div>
                        </div>

                    </header>
                    <section className={styles.content_wrapper}>

                    </section>
                </div>
            </div>
        </div>
    )
}
export default PersonalArea;
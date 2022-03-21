import { Icon } from "../../components/Icon/Icon";
import styles from "../News/News.module.sass";
import menu from '../../assets/images/menu.svg';
import settings from '../../assets/images/settings.svg';
import avatar from '../../assets/images/nikita.jpg';

export const News = () => {
    return (
        <div className={styles.page_content}>
            <div className={styles.upper_header}>
                <img src={menu} width={35} />
                <div className={styles.logo_wrapper}>
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
                <button className={styles.button}>Выйти</button>
                <img src={settings} width={35} className={styles.settings} />
            </div>
            <div className={styles.main_content}>
                <div className={styles.page_content_wrapper}>
                        <img src={avatar} width={60}/>
                    <input placeholder="Добавить запись" className={styles.castom_input} />
                </div>
            </div>
            <div className={styles.main_content}>
                <div className={styles.page_content_wrapper}>
                    dfgvjbhkl
                </div>
            </div>
        </div>
    )
}

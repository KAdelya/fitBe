import { Icon } from "../../components/Icon/Icon";
import styles from "../News/News.module.sass";
import menu from '../../assets/images/menu.svg';
import settings from '../../assets/images/settings.svg';
import avatar from '../../assets/images/nikita.jpg';
import notice1 from '../../assets/images/notice1.png';

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
                    <div className={styles.new_note}>
                        <div className={styles.avatar_wrapper}>
                            <img src={avatar} width={60} />
                        </div>
                        <div className={styles.castom_input}>
                            <input placeholder="Добавить запись" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.main_content}>
                <div className={styles.page_content_wrapper}>
                    <div className={styles.lower_navbar_wrapper}>
                        <ul>
                            <li>Мои записи</li>
                            <li>Все записи</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.main_content}>
                <div className={styles.page_content_wrapper}>
                    <div className={styles.lower_navbar_wrapper}>
                       <div className={styles.notice_pict_wrapper}>
                           <img src={notice1} width={800}/>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

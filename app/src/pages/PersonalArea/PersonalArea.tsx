import { Icon } from '../../components/Icon/Icon';
import styles from '../PersonalArea/PersonalArea.module.sass';
import menu from '../../assets/images/menu.svg';
import settings from '../../assets/images/settings.svg';
import avatar from '../../assets/images/nikita.jpg';
import {useStore} from "../../utils/use-stores-hook";
import Modal from "../../components/layouts/Modal";
import {ModalWelcome} from "../../components/modal/ModalWelcome";
import {observer} from "mobx-react";

const PersonalArea = observer(() => {
    const { modalStore: { setCurrentModal } } = useStore()
    setCurrentModal(<Modal children={<ModalWelcome />} />)
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
                                <img src={settings} width={35}/>
                            </div>
                        </div>
                    </header>
                    <section className={styles.content_wrapper}>
                        <div className={styles.wrapper_user_avavtar}>
                            <div>
                                <img src={avatar} />
                            </div>
                            <div className={styles.subscribers_info_wrapper}>
                                <div className={styles.subscribers_info}>
                                    <h3>100</h3>
                                    <h3>Публикации</h3>
                                </div>
                                <div className={styles.subscribers_info}>
                                    <h3>789</h3>
                                    <h3>Подписки</h3>
                                </div>
                                <div className={styles.subscribers_info}>
                                    <h3>2368</h3>
                                    <h3>Подписчики</h3>
                                </div>
                            </div>
                        </div>
                        <div className={styles.wrapper_user_info}>
                            <div className={styles.name_info}>
                                <h2>Иван Иванов</h2>
                                <div>
                                    {/* <Icon ></Icon> */}
                                </div>
                            </div>
                            <div className={styles.nickname_info}>
                                <p>IvanIvanov</p>
                            </div>
                            <div className={styles.table_info}>
                                <table>
                                    <tr>
                                        <td>
                                            <h2>Текущий вес</h2>
                                            <p>75</p>
                                        </td>
                                        <td>
                                            <h2>Калории</h2>
                                            <p>2001</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <h2>Часов потрачено</h2>
                                            <p>200</p>
                                        </td>
                                        <td>
                                            <h2>Место в топе</h2>
                                            <p>1</p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <div className={styles.button_wrapper_content}>
                                <div className={styles.button_for_lk}>
                                    <button>Отметить тренировку</button>
                                    <p>Последняя тренировка - 11.01.2022</p>
                                </div>
                                <div className={styles.button_for_lk}>
                                    <button>Отследить динамику веса</button>
                                    <p>Последнее взвешивание - 22.02.2022</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <footer className={styles.footer}>
                    <hr />
                    <div className={styles.footer_wrapper}>
                        <p>Twitter      Facebook      Instagram</p>
                    </div>
                </footer>
            </div>
        </div>
    )
})
export default PersonalArea;

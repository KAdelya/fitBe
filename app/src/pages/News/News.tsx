import { Icon } from "../../components/Icon/Icon";
import styles from "../News/News.module.sass";
import menu from '../../assets/images/menu.svg';
import settings from '../../assets/images/settings.svg';
import avatar from '../../assets/images/nikita.jpg';
import gAvatar from '../../assets/images/girl.svg'
import notice1 from '../../assets/images/notice1.png';
import like from '../../assets/images/like.svg';
import comment from '../../assets/images/comment.svg';
import post from '../../assets/images/post2.png';

export const News = () => {
    return (
        <div className={styles.content}>
            <div className={styles.page_content}>
                <div className={styles.upper_header}>
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
                </div>
                <div className={styles.main_content}>
                    <div className={styles.page_content_wrapper_upper}>
                        <div className={styles.new_note}>
                            <div className={styles.avatar_wrapper}>
                                <img src={avatar} width={50} />
                            </div>
                            <div className={styles.castom_input}>
                                <input placeholder="Добавить запись" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.main_content}>
                    <div className={styles.page_content_wrapper_upper}>
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
                            <div className={styles.user_info}>
                                <div className={styles.user_info_wrapper}>
                                    <div className={styles.avatar_round_wrapper}>
                                        <img src={gAvatar} width={50} />
                                    </div>
                                    <div className={styles.user_name}>Olga1995</div>
                                </div>
                                <p>Сегодня питалась интуитивно. Ничего вредного не ела. Хочу
                                    попробовать неделю так питаться)))</p>
                            </div>
                            <div className={styles.notice_pict_wrapper}>
                                <img src={notice1} />
                            </div>
                            <div className={styles.row_for_comment}>
                                <pre>2 часа назад</pre>
                                <div className={styles.user_info_wrapper}>
                                    <img src={like} width={27} />
                                    <img src={comment} width={28} />
                                </div>
                            </div>
                            <div className={styles.comment_block}>
                                <div className={styles.comment}>
                                    <p className={styles.name}>Lana290982:</p>
                                    <pre>Вы молодец, поддерживаю вас!</pre>
                                </div>
                                <div className={styles.comment}>
                                    <p className={styles.name}>TatLana22:</p>
                                    <pre>Вы молодец, поддерживаю вас только вперед и назад не смотрите!</pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.page_content_wrapper}>
                        <div className={styles.lower_navbar_wrapper}>
                            <div className={styles.user_info}>
                                <div className={styles.user_info_wrapper}>
                                    <div className={styles.avatar_round_wrapper}>
                                        <img src={avatar} width={50} />
                                    </div>
                                    <div className={styles.user_name}>IvanIvanov</div>
                                </div>
                                <p>Выбрался в горы, наслаждаюсь видом</p>
                            </div>
                            <div className={styles.notice_pict_wrapper}>
                                <img src={post} />
                            </div>
                            <div className={styles.row_for_comment}>
                                <pre>2 часа назад</pre>
                                <div className={styles.user_info_wrapper}>
                                    <img src={like} width={27} />
                                    <img src={comment} width={28} />
                                </div>
                            </div>
                            <div className={styles.comment_block}>
                                {/* <div className={styles.comment}>
                                <p className={styles.name}>Lana290982:</p>
                                <pre>Вы молодец, поддерживаю вас!</pre>
                            </div>
                            <div className={styles.comment}>
                                <p className={styles.name}>TatLana22:</p>
                                <pre>Вы молодец, поддерживаю вас только вперед и назад не смотрите!</pre>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
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

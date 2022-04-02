import styles from "../ViewSubscriptionsPage/ViewSubscriptionsPage.module.sass";
import arrow_back from "../../assets/images/arrow_back.svg";
import {Icon} from "../../components/Icon/Icon";
import people_avatar from "../../assets/images/people_avatar.svg";
import people_avatar_2 from "../../assets/images/prople_avatar_2.svg";
import people_avatar_3 from "../../assets/images/people_avatar_3.svg";
import people_avatar_4 from "../../assets/images/people_avatar_4.svg";
import people_avatar_5 from "../../assets/images/people_avatar_5.svg";
import people_avatar_6 from "../../assets/images/people_avatar_6.svg";
import settings from "../../assets/images/settings.svg";
import paw from "../../assets/images/paw.svg"
import {useStore} from "../../utils/use-stores-hook";
import Modal from "../../components/layouts/ModalLayout/Modal";
import {ModalWelcome} from "../../components/modal/ModalWelcome";
import {ModalUnsubscribe} from "../../components/modal/ModalUnsubscribe";

export const ViewSubscriptionsPage = () => {
    const { modalStore: { setCurrentModal } } = useStore()
    const handleModal = () => {
        setCurrentModal(<Modal children={<ModalUnsubscribe />} />)
    }
    return (
        <div className={styles.main}>
            <div className={styles.page_wrapper}>
                <div className={styles.page_content}>
                    <div className={styles.page_content_wrapper}>
                        <div className={styles.upper_content_wrapper}>
                            <header className={styles.header}>
                                <div className={styles.header_wrapper}>
                                    <div className={styles.logo_wrapper}>
                                        <img src={arrow_back} />
                                        <div className={styles.logo}><Icon name="logo" width="85" height="62" /></div>
                                        <p>BeFit</p>
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
                                                <button className={styles.button_sign}>Выйти</button>
                                                <img src={settings} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <div className={styles.main_wrapper}>
                                <div className={styles.avatar_wrapper}>
                                    <img src={people_avatar} className={styles.avatar}/>
                                    <div className={styles.people_name}>LelyaIvanova</div>
                                    <div className={styles.subscribe}>Подписки</div>
                                </div>
                                <div className={styles.row}>
                                <div className={styles.column_digits}>
                                    <div className={styles.number}>1</div>
                                    <div className={styles.number}>2</div>
                                    <div className={styles.number}>3</div>
                                    <div className={styles.number}>4</div>
                                    <div className={styles.number}>5</div>
                                    <div className={styles.number}>6</div>
                                    <div className={styles.number}>7</div>
                                    <div className={styles.number}>8</div>
                                    <div className={styles.number}>9</div>
                                    <div className={styles.number}>10</div>
                                </div>
                                <div className={styles.column}>
                                    <div className={styles.string}>
                                        <div className={styles.place_name_and_paw}>
                                        <div className={styles.place_in_top}><img src={people_avatar}/></div>
                                            <div className={styles.name}>IvanIvanov</div>
                                            <img src={paw} className={styles.paw}/>
                                        </div>
                                        <div className={styles.button_subscribe_wrapper}>
                                            <button className={styles.button_subscribe} onClick={handleModal}>Отписаться</button>
                                        </div>
                                    </div>
                                    <div className={styles.string}>
                                        <div className={styles.place_name_and_paw}>
                                        <div className={styles.place_in_top}><img src={people_avatar_2}/></div>
                                            <div className={styles.name}>SuperMan2000</div>
                                        </div>
                                        <div className={styles.button_subscribe_wrapper}>
                                        <button className={styles.button_subscribe} onClick={handleModal}>Отписаться</button>
                                        </div>
                                    </div>
                                    <div className={styles.string}>
                                        <div className={styles.place_name_and_paw}>
                                            <div className={styles.place_in_top}><img src={people_avatar_3}/></div>
                                            <div className={styles.name}>Lena1990291</div>
                                            <img src={paw} className={styles.paw}/>
                                        </div>
                                        <div className={styles.button_subscribe_wrapper}>
                                        <button className={styles.button_subscribe} onClick={handleModal}>Отписаться</button>
                                        </div>
                                    </div>
                                    <div className={styles.string}>
                                        <div className={styles.place_name_and_paw}>
                                            <div className={styles.place_in_top}><img src={people_avatar_4}/></div>
                                            <div className={styles.name}>LeraLeraLera</div>
                                            <img src={paw} className={styles.paw}/>
                                        </div>
                                        <div className={styles.button_subscribe_wrapper}>
                                        <button className={styles.button_subscribe} onClick={handleModal}>Отписаться</button>
                                        </div>
                                    </div>
                                    <div className={styles.string}>
                                        <div className={styles.place_name_and_paw}>
                                            <div className={styles.place_in_top}><img src={people_avatar_5}/></div>
                                            <div className={styles.name}>AdelyaAdelyaAdelya</div>
                                            <img src={paw} className={styles.paw}/>
                                        </div>
                                        <div className={styles.button_subscribe_wrapper}>
                                        <button className={styles.button_subscribe} onClick={handleModal}>Отписаться</button>
                                        </div>
                                    </div>
                                    <div className={styles.string}>
                                        <div className={styles.place_name_and_paw}>
                                            <div className={styles.place_in_top}><img src={people_avatar_6}/></div>
                                            <div className={styles.name}>IvanIvanov</div>
                                        </div>
                                        <div className={styles.button_subscribe_wrapper}>
                                        <button className={styles.button_subscribe} onClick={handleModal}>Отписаться</button>
                                        </div>
                                    </div>
                                    <div className={styles.string}>
                                        <div className={styles.place_name_and_paw}>
                                            <div className={styles.place_in_top}><img src={people_avatar_5}/></div>
                                            <div className={styles.name}>SuperMan20</div>
                                        </div>
                                        <div className={styles.button_subscribe_wrapper}>
                                        <button className={styles.button_subscribe} onClick={handleModal}>Отписаться</button>
                                        </div>
                                    </div>
                                    <div className={styles.string}>
                                        <div className={styles.place_name_and_paw}>
                                            <div className={styles.place_in_top}><img src={people_avatar_6}/></div>
                                            <div className={styles.name}>Lena19</div>
                                        </div>
                                        <div className={styles.button_subscribe_wrapper}>
                                        <button className={styles.button_subscribe} onClick={handleModal}>Отписаться</button>
                                        </div>
                                    </div>
                                    <div className={styles.string}>
                                        <div className={styles.place_name_and_paw}>
                                            <div className={styles.place_in_top}><img src={people_avatar_2}/></div>
                                            <div className={styles.name}>Lera</div>
                                        </div>
                                        <div className={styles.button_subscribe_wrapper}>
                                        <button className={styles.button_subscribe} onClick={handleModal}>Отписаться</button>
                                        </div>
                                    </div>
                                    <div className={styles.string}>
                                        <div className={styles.place_name_and_paw}>
                                            <div className={styles.place_in_top}><img src={people_avatar}/></div>
                                            <div className={styles.name}>Adelya</div>
                                            <img src={paw} className={styles.paw}/>
                                        </div>
                                        <div className={styles.button_subscribe_wrapper}>
                                        <button className={styles.button_subscribe} onClick={handleModal}>Отписаться</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <footer>
                <div className={styles.line}/>
                <div className={styles.footer_wrapper}>
                    <div className={styles.twitter}>
                        Twitter
                    </div>
                    <div className={styles.facebook}>
                        Facebook
                    </div>
                    <div className={styles.instagram}>
                        Instagram
                    </div>
                    <div className={styles.reserved}>
                        © 2021 All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
        </div>
    )
}

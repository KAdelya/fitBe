import styles from "../ViewSubscriptionsPage/ViewSubscriptionsPage.module.sass";
import arrow_back from "../../assets/images/arrow_back.svg";

export const ViewSubscriptionsPage = () => {
    return (
        <div className={styles.main}>
            <div className={styles.page_content}>
                <div className={styles.page_content_wrapper}>
                    <div className={styles.upper_content_wrapper}>
                        <header className={styles.header}>
                            <div className={styles.header_wrapper}>
                                <div className={styles.logo_wrapper}>
                                    <img src={arrow_back} />
                                    <p>Благотворительный фонд</p>
                                </div>
                            </div>
                        </header>
                        <div className={styles.main_wrapper}>
                            <div className={styles.cards}>
                                <div className={styles.payment_card}>
                                    <div className={styles.button_add_wrapper}>
                                        <button className={styles.button_add}>
                                            <div className={styles.plus}>+</div></button>
                                    </div>
                                    <div className={styles.add_card}>Добавить карту</div>
                                </div>
                            </div>
                            <div className={styles.details}>Детали подписки</div>
                            <input placeholder="Ввести сумму в рублях"/>
                            <textarea placeholder="Отправить сообщение"/>
                            <div className={styles.button_wrapper}>
                                <button className={styles.subscribe}>Подписаться</button>
                            </div>
                            <div className={styles.end_text}>При желании - подписку можно отключить в личном кабинете</div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className={styles.line}></div>
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
    )
}

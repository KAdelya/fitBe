import styles from "../SubscriptionPaymentPage/SubscriptionPaymentPage.module.sass";
import arrow_back from "../../assets/images/arrow_back.svg";
import heart from "../../assets/images/heart.svg";
import dog from "../../assets/images/dog.svg";

export const SubscriptionPaymentPage = () => {
    return (
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
                        <div className={styles.details}>Детали подписки</div>
                        <input placeholder="Ввести сумму"/>
                        <textarea placeholder="Отправить сообщение"/>
                        <div className={styles.button_wrapper}>
                            <button>Подписаться</button>
                        </div>
                        <div className={styles.end_text}>При желании - подписку можно отключить в личном кабинете</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

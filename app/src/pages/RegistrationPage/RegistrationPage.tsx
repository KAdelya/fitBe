import styles from "./RegistrationPage.module.sass";
import { Icon } from "../../components/Icon/Icon";
import { Registration } from "../../components/Registration/Registration";

export const RegistrationPage = () => {
    return (
        <div className={styles.page_wrapper}>
            <header className={styles.wrapper}>
                <div className={styles.logo_wrapper}>
                    <Icon name='logo' width={62} height={62} />
                    <p>BeFit</p>
                </div>
            </header>
            <section className={styles.main_content}>
                <Registration />
            </section>

        </div>
    )
}
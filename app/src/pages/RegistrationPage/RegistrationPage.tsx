import styles from "./RegistrationPage.module.sass";
import { Icon } from "../../components/Icon/Icon";
import { Registration } from "../../components/Registration/Registration";

export const RegistrationPage = () => {
    return (
        <div className={styles.page_wrapper}>
            <section className={styles.main_content}>
                <Registration />
            </section>

        </div>
    )
}
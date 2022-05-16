import styles from "./RegistrationPage.module.sass";
import { Icon } from "../../components/Icon/Icon";
import { Registration } from "../../components/Registration/Registration";

export const RegistrationPage = () => {
    return (
        <section className={styles.page_wrapper}>
            <Registration />
        </section>
    )
}
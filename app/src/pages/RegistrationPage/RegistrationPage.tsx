import styles from "./RegistrationPage.module.sass";
import { Icon } from "../../components/Icon/Icon";
import { Registration } from "../../components/Registration/Registration";

export const RegistrationPage = () => {
    return (
        <div className={styles.registration_page}>
            <Registration />
        </div>
    )
}
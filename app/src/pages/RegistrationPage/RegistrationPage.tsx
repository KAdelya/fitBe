import styles from "./RegistrationPage.module.sass";
import {HeaderSignAndRegistration} from "../../components/HeaderSignAndRegisteration/HeaderSignAndRegistration";
import {Registration} from "../../components/Registration/Registration";

export const RegistrationPage = () => {
    return (
        <div className={styles.page_content}>
            <div className={styles.page_content_wrapper}>
                <div className={styles.upper_content_wrapper}>
                    <HeaderSignAndRegistration/>
                    <Registration/>
                </div>
            </div>
        </div>)
}

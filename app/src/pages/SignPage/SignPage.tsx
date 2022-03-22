import styles from "../SignPage/SignPage.module.sass";
import time from "../../assets/images/time.svg";
import {HeaderSignAndRegistration} from "../../components/HeaderSignAndRegisteration/HeaderSignAndRegistration";
import {Sign} from "../../components/Sign/Sign";

export const SignPage = () => {
    return (
        <div className={styles.page_content}>
            <div className={styles.page_content_wrapper}>
                <div className={styles.upper_content_wrapper}>
                    <HeaderSignAndRegistration/>
                    <Sign/>
                </div>
            </div>
        </div>
    )
}

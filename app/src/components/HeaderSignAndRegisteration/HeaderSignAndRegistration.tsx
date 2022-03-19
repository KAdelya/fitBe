import styles from './HeaderSignAndRegistration.module.sass';
import {Icon} from "../Icon/Icon";

export const HeaderSignAndRegistration = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_wrapper}>
                <div className={styles.logo_wrapper}>
                    <Icon name="logo" width="85" height="62" />
                    <p>BeFit</p>
                </div>
            </div>
        </header>
    );
}

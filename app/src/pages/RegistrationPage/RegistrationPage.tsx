import styles from "./RegistrationPage.module.sass";
import { Icon } from "../../components/Icon/Icon";
import Button from "../../components/ui/button/button";

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
                <h1>Registration</h1>
                <div className={styles.information_form_wrapper}>
                    <div className={styles.information_form}>
                        <input placeholder='Email' type='name' name={`name`}/>
                    </div>
                    <div className={styles.information_form}>
                        <input placeholder='Name' type='password' name={"password"} />
                    </div>
                    <div className={styles.information_form}>
                        <input placeholder='Password' type='name' name={`name`}/>
                    </div>
                    <div className={styles.information_form}>
                        <input placeholder='Repeat password' type='password' name={"password"} />
                    </div>
                </div>
                <div className={styles.button_wrapper}>
                        <Button text='REGISTER' />
                    </div>
            </section>
            
        </div>
    )
}

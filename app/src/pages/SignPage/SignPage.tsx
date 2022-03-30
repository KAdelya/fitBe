import styles from "../SignPage/SignPage.module.sass";
import { Icon } from "../../components/Icon/Icon";
import Button from "../../components/ui/button/button";
import * as yup from "yup";
import {Formik} from 'formik';
import {useStore} from "../../utils/use-stores-hook";

export const SignPage = () => {
    const {modalStore: {setCurrentModal}} = useStore()
    function IsSign() {
        window.open('/user')
    }
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательно')
            .matches(/[a-zA-Z0-9]{3,}/g, 'Введите верное имя на английском'),
        password: yup.string().typeError('Должно быть строкой').required('Введите верные данные')
            .matches(/[0-9a-zA-Z]{4,}/g, 'Пароль должен состоять из минимум 4 цифр или латинских букв')
    })
    return (
        <div className={styles.page_wrapper}>
            <header className={styles.wrapper}>
                <div className={styles.logo_wrapper}>
                    <Icon name='logo' width={62} height={62} />
                    <p>BeFit</p>
                </div>
            </header>
            <section className={styles.main_content}>
                <h1>Time to training!</h1>
                <div className={styles.information_form_wrapper}>
                    <div className={styles.information_form}>
                        <input placeholder='Name' type='name' name={`name`}/>
                    </div>
                    <div className={styles.information_form}>
                        <input placeholder='Password' type='password' name={"password"} />
                    </div>
                </div>
                <div className={styles.button_wrapper}>
                        <Button text='Sign in' />
                    </div>
            </section>
        </div>
    )
}

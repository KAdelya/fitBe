import styles from './Sign.module.sass';
import time from "../../assets/images/time.svg";
import * as yup from "yup";
import {Formik} from 'formik';

export const Sign = () => {
    const validationsSchema = yup.object().shape({
        email: yup.string().typeError('Должно быть строкой').required('Обязательно')
            .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Введите верный email'),
        password: yup.string().typeError('Должно быть строкой').required('Введите верные данные')
            .matches(/[0-9a-zA-Z]{4,}/g, 'Пароль должен состоять из минимум 4 цифр или латинских букв')
    })
    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    repeat_password: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={validationsSchema}
            >
                {({
                      values, errors, touched,
                      handleChange, handleBlur,
                      isValid = false, dirty = false, handleSubmit
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.input_and_button_wrapper}>
                            <div className={styles.login_statement}>Время тренироваться!</div>
                            <div className={styles.time}>
                                <img src={time}/>
                            </div>
                            <input placeholder='Email' type='email' name={`email`}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.email}/>
                            {touched.email && errors.email && <p style={{'color': 'red'}}>{errors.email}</p>}
                            <input placeholder='Пароль' type='password' name={"password"}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password}/>
                            {touched.password && errors.password && <p style={{'color': 'red'}}>{errors.password}</p>}
                            <div className={styles.button_wrapper}>
                                <button type={`submit`} disabled={!(isValid || dirty)}>Войти</button>
                            </div>
                        </div>
                    </form>)}
            </Formik>
        </div>
    );
}

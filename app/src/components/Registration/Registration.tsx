import styles from './Registration.module.sass';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useState} from "react";

export const Registration = () => {
    const [correctPassw, setCorrectPassw] = useState(false)
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Должно быть строкой').required('Обязательно')
            .matches(/[a-zA-Z0-9]{3,}/g, 'Введите верное имя на английском'),
        email: yup.string().typeError('Должно быть строкой').required('Обязательно')
            .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Введите верный email'),
        password: yup.string().typeError('Должно быть строкой').required('Введите верные данные')
            .matches(/[0-9a-zA-Z]{4,}/g, 'Пароль должен состоять из минимум 4 цифр или латинских букв'),
        repeat_password: yup.string().typeError('Должно быть строкой').required('Введите верные данные')
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
                onSubmit={(values, errors) => {
                    if (values.password === values.repeat_password) {
                        setCorrectPassw(true);
                    } else {
                        values.name = '';
                        values.email = '';
                        values.password = '';
                        values.repeat_password = '';
                        errors.setStatus('Пароли не совпадают');
                    }
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
                            <div className={styles.question_register}>Зарегистрируемся?</div>
                            <input placeholder='Email' type='email' name={`email`}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.email}/>
                            {touched.email && errors.email && <p style={{'color': 'red'}}>{errors.email}</p>}
                            <input placeholder='Имя' type='name' name={`name`}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.name}/>
                            {touched.name && errors.name && <p style={{'color': 'red'}}>{errors.name}</p>}
                            <input placeholder='Пароль' type='password' name={"password"}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password}/>
                            {touched.password && errors.password && <p style={{'color': 'red'}}>{errors.password}</p>}
                            <input placeholder='Подтверждение пароля' type='password' name={"repeat_password"}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.repeat_password}/>
                            {touched.repeat_password && errors.repeat_password &&
                            <p style={{'color': 'red'}}>{errors.repeat_password}</p>}
                            <div className={styles.button_wrapper}>
                                <button type={`submit`} disabled={!(isValid || dirty)}>Зарегистрироваться</button>
                            </div>
                        </div>
                    </form>)}
            </Formik>
        </div>
    );
}

import styles from './Registration.module.sass';
import {Formik} from 'formik';
import * as yup from 'yup';
import React, {useState} from "react";
import { getDatabase, ref, set } from "firebase/database";

export const Registration = () => {
    // let textInput = React.createRef()
    function writeUserData(userId='1') {
        const db = getDatabase();
        set(ref(db, 'users/' + userId), {
            name: 'Adelya',
            email: 'dfv2@mail.ru',
            password: '0900',
            repeat_password: '0900'
        });
    }
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
                            <input placeholder='Email' type='email' name={`email`} id='email'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.email}
                            onClick={handleChange}/>
                            {touched.email && errors.email && <p style={{'color': 'red'}}>{errors.email}</p>}
                            <input placeholder='Имя' type='name' name={`name`} id='name'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.name} onClick={handleChange}/>
                            {touched.name && errors.name && <p style={{'color': 'red'}}>{errors.name}</p>}
                            <input placeholder='Пароль' type='password' name={"password"} id='password'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password} onClick={handleChange}/>
                            {touched.password && errors.password && <p style={{'color': 'red'}}>{errors.password}</p>}
                            <input placeholder='Подтверждение пароля' type='password' name={"repeat_password"}
                                   id='repeat_password'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.repeat_password} onClick={handleChange}/>
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

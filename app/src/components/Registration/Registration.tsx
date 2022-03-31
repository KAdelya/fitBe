import styles from './Registration.module.sass';
import {Formik} from 'formik';
import * as yup from 'yup';
import React, {useState} from "react";
import {getDatabase, ref, set, onValue} from "firebase/database";
import {useStore} from "../../utils/use-stores-hook";
import Modal from "../layouts/ModalLayout/Modal";
import {ModalUncorrectNameRegistration} from "../modal/ModalUncorrectNameRegistration";
import {ModalUncorrectPasswordsRegistratiion} from "../modal/ModalUncorrectPasswordsRegistratiion";
import PersonalArea from "../../pages/PersonalArea/PersonalArea";
import {Navigate} from "react-router";
// import { Redirect } from 'react-router';
// import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";


export const Registration = () => {
    let [register, setRegister] = useState(false);
    function IsRegistrant() {
        window.open('/questionnaire')
    }

    // console.log(name)
    // let textInput = React.createRef()
    // let input = document.getElementById('name').value
    // console.log(input)
    const {modalStore: {setCurrentModal}} = useStore()
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
    // function writeUserData() {
    //     const db = getDatabase();
    //     console.log(name)
    // }
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
                    setCorrectPassw(true);
                    const db = getDatabase();
                    const starCountRef = ref(db, '/users/');
                    // set(ref(db, 'users/name'), {
                    //     name: 'name',
                    //     email: 'email',
                    //     password: 'password',
                    //     repeat_password: 'password'
                    // });
                    onValue(starCountRef, (snapshot) => {
                        const data = snapshot.val();
                        console.log(data)
                        // console.log(data[values.name])
                        if (values.password === values.repeat_password) {
                            if (data[values.name]) {
                                errors.setStatus('Такое имя уже есть');
                                setCurrentModal(<Modal children={<ModalUncorrectNameRegistration/>}/>)
                            } else if (!data[values.name]) {
                                set(ref(db, '/users/' + values.name), {
                                    name: values.name,
                                    email: values.email,
                                    password: values.password,
                                    repeat_password: values.repeat_password
                                })
                                setCurrentModal(null)
                                setRegister(true)
                                IsRegistrant()
                            }
                        } else {
                            values.name = '';
                            values.email = '';
                            values.password = '';
                            values.repeat_password = '';
                            errors.setStatus('Пароли не совпадают');
                            setCurrentModal(<Modal children={<ModalUncorrectPasswordsRegistratiion/>}/>)
                        }
                    })
                    // const postListRef = ref(db, 'users')
                    // console.log(db)
                    // const auth = getAuth();
                    //
                    // const userId = auth.currentUser.uid;
                    // setCount(count + 1)
                    // const starCountRef = ref(db, 'users/' + values.name);
                    // onValue(starCountRef, (snapshot) => {
                    //     const data = snapshot.val();
                    //     if (values.name === data['name']) {
                    // set(ref(db, 'users/' + values.name), {
                    //     name: values.name,
                    //     email: values.email,
                    //     password: values.password,
                    //     repeat_password: values.repeat_password
                    // })
                    //  else {
                    //     values.name = '';
                    //     values.email = '';
                    //     values.password = '';
                    //     values.repeat_password = '';
                    //     errors.setStatus('Пароли не совпадают');
                    // }
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
                                   value={values.email}/>
                            {touched.email && errors.email && <p style={{'color': 'red'}}>{errors.email}</p>}
                            <input placeholder='Имя' type='name' name={`name`} id='name'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.name}/>
                            {touched.name && errors.name && <p style={{'color': 'red'}}>{errors.name}</p>}
                            <input placeholder='Пароль' type='password' name={"password"} id='password'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password}/>
                            {touched.password && errors.password && <p style={{'color': 'red'}}>{errors.password}</p>}
                            <input placeholder='Подтверждение пароля' type='password' name={"repeat_password"}
                                   id='repeat_password'
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

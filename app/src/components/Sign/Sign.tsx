import styles from './Sign.module.sass';
import time from "../../assets/images/time.svg";
import * as yup from "yup";
import {Formik} from 'formik';
import {useStore} from "../../utils/use-stores-hook";
import Modal from "../layouts/Modal";
import {getDatabase, onValue, ref, set} from "firebase/database";
import React from "react";
import {ModalUncorrectNameSign} from "../modal/ModalUncorrectNameSign";
import {ModalUncorrectPasswordSign} from "../modal/ModalUncorrectPasswordSign";

export const Sign = () => {
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
        <div>
            <Formik
                initialValues={{
                    name: '',
                    password: ''
                }}
                onSubmit={(values, errors) => {
                    const db = getDatabase();
                    const starCountRef = ref(db, '/users/');
                    onValue(starCountRef, (snapshot) => {
                        const data = snapshot.val();

                        // console.log(data[values.name].password)
                        // console.log(data)
                        if (data[values.name]) {
                            if (values.password === data[values.name].password) {
                                // console.log(data[values.name].password)
                                IsSign()
                            }
                            else {
                                setCurrentModal(<Modal children={<ModalUncorrectPasswordSign/>}/>)
                            }
                        } else if (!data[values.name]) {
                            setCurrentModal(<Modal children={<ModalUncorrectNameSign/>}/>)
                        }
                    })}}
                validationSchema={validationsSchema}
            >
                {({
                      values, errors, touched,
                      handleChange, handleBlur,
                      isValid = false, dirty = false, handleSubmit
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.input_and_button_wrapper}>
                            <div className={styles.login_statement}>Time to train!</div>
                            <div className={styles.time}>
                                {/* <img src={time}/> */}
                            </div>
                            <input placeholder='Name' type='name' name={`name`}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.name}/>
                            {touched.name && errors.name && <p style={{'color': 'red'}}>{errors.name}</p>}
                            <input placeholder='Password' type='password' name={"password"}
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

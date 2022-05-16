import styles from './Login.module.sass';
import * as yup from "yup";
import {Formik} from 'formik';
import {useStore} from "../../utils/use-stores-hook";
import Modal from '../Layouts/ModalLayout/ModalLayout'
import {getDatabase, onValue, ref, set} from "firebase/database";
import React, {useState} from "react";
import {ModalUncorrectNameSign} from "../Modal/ModalUncorrectNameSign";
import {ModalUncorrectPasswordSign} from "../Modal/ModalUncorrectPasswordSign";
import {Navigate, useNavigate, useParams} from "react-router-dom";


import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../../utils/redux-hooks';
import { setUser } from '../../stores/slices/userSlice';
import MainCustomBtn from '../ui/button/ButtonLayout/ButtonLayout';


export const Login = () => {
    const validationsSchema = yup.object().shape({
        email: yup.string().typeError('Position to be a string').required('Necessarily')
            .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Please enter a valid email'),
        password: yup.string().typeError('Position to be a string').required('Necessarily')
            .matches(/[0-9a-zA-Z]{6,}/g, 'Password must be at least 6 characters long')
    })
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)

            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate(`/user`)
            })
            .catch(console.error)
    }
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')
    return (
        <div>
            <section className={styles.main_content}>
                <h1>Time to training!</h1>
                <div className={styles.information_form_wrapper}>
                    <div className={styles.information_form}>
                        <input
                            placeholder='Email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={styles.information_form}>
                        <input
                            placeholder='Password'
                            type='password'
                            value={pass}
                            onChange={(e) => setPass(e.target.value)} />
                    </div>
                    <div className={styles.button_wrapper}>
                        <MainCustomBtn>
                            <button onClick={() => handleLogin(email, pass)}>SIGN IN</button>
                        </MainCustomBtn>
                    </div>
                </div>
            </section>
           {/* <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={() => handleLogin(email, pass)}
                validationSchema={validationsSchema}
            >
                {({
                      values, errors, touched,
                      handleChange, handleBlur,
                      isValid = false, dirty = false, handleSubmit
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <section className={styles.main_content}>
                            <h1>Time to training!</h1>
                            <div className={styles.information_form_wrapper}>
                                <div className={styles.information_form}>
                                    <input
                                        placeholder='Email'
                                        name='email'
                                        type='email'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                    {touched.email && errors.email && <p>{errors.email}</p>}
                                    {touched.email && !errors.email && setEmail(values.email)}
                                </div>
                                <div className={styles.information_form}>
                                    <input
                                        placeholder='Password'
                                        type='password'
                                        name='password'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}/>
                                    {touched.password && errors.password && <p>{errors.password}</p>}
                                    {touched.password && !errors.password && setPass(values.password)}
                                </div>
                                <div className={styles.button_wrapper}>
                                    <button disabled={!(isValid || dirty)} type={`submit`}>SIGN IN</button>
                                </div>
                            </div>
                        </section>
                    </form>)}
            </Formik>*/}
        </div>
    )
}

import styles from './Registration.module.sass';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useState} from "react";
import {getDatabase, ref, set, onValue} from "firebase/database";
import {useStore} from "../../utils/use-stores-hook";
import Modal from '../Layouts/ModalLayout/ModalLayout'
import {ModalUncorrectNameRegistration} from "../Modal/ModalUncorrectNameRegistration";
import {ModalUncorrectPasswordsRegistratiion} from "../Modal/ModalUncorrectPasswordsRegistratiion";
import {Questionnaire} from "../Questionnaire/Questionnaire";
import {db} from '../..';
import {useDispatch} from 'react-redux';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {setUser} from '../../stores/slices/userSlice';
import {useAppDispatch} from '../../utils/redux-hooks';


import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/use-auth';
import MainCustomBtn from '../ui/button/ButtonLayout/ButtonLayout';


export const Registration = () => {
    const validationsSchema = yup.object().shape({
        email: yup.string().typeError('Position to be a string').required('Necessarily')
            .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Please enter a valid email'),
        password: yup.string().typeError('Position to be a string').required('Necessarily')
            .matches(/[0-9a-zA-Z]{6,}/g, 'Password must be at least 6 characters long')
    })
    const {isAuth, id} = useAuth();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleRegistration = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)

            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate(`/questionnaire`)
            })
            .catch(console.error)
    }
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')
    return (

        <div className={styles.content}>
            <section className={styles.main_content}>
                <h1>Registration</h1>
                <div className={styles.information_form_wrapper}>
                    <div className={styles.information_form}>
                        <input
                            placeholder='Email'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {/* <div className={styles.information_form}>
                        <input placeholder='Name' type='name' name={`name`}  />
                    </div> */}
                    <div className={styles.information_form}>
                        <input
                            placeholder='Password'
                            type='password'
                            value={pass}
                            onChange={(e) => setPass(e.target.value)} />
                    </div>
                    <div className={styles.information_form}>
                        {/* <input
                            placeholder='Repeat password'
                            type='password'/> */}
                    </div>
                </div>
                {/* <div className={styles.button_wrapper}> */}
                <div className={styles.button_wrapper}>
                    <MainCustomBtn>
                        <button onClick={() => handleRegistration(email, pass)}>REGISTER</button>
                    </MainCustomBtn>
                </div>

                {/* </div> */}
            </section>

{/*        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={() => handleRegistration(email, pass)}
                validationSchema={validationsSchema}
            >
                {({
                      values, errors, touched,
                      handleChange, handleBlur,
                      isValid = false, dirty = false, handleSubmit
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <section className={styles.main_content}>
                            <h1>Registration</h1>
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
                                ///коммент
                                 <div className={styles.information_form}>
                        <input placeholder='Name' type='name' name={`name`}  />
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
                                <div className={styles.information_form}>
                                     <input
                            placeholder='Repeat password'
                            type='password'/> 
                                </div>
                            </div>
                            <div className={styles.button_wrapper}>
                                <button disabled={!(isValid || dirty)} type={`submit`}>REGISTER</button>
                            </div>
                        </section>
                    </form>)}
            </Formik>
        </div>*/}
    )
}

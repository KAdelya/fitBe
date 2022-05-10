import styles from './Registration.module.sass';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useStore } from "../../utils/use-stores-hook";
import Modal from '../Layouts/ModalLayout/ModalLayout'
import { ModalUncorrectNameRegistration } from "../Modal/ModalUncorrectNameRegistration";
import { ModalUncorrectPasswordsRegistratiion } from "../Modal/ModalUncorrectPasswordsRegistratiion";
import { Questionnaire } from "../Questionnaire/Questionnaire";
import { db } from '../..';
import { useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { setUser } from '../../stores/slices/userSlice';
import { useAppDispatch } from '../../utils/redux-hooks';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/use-auth';

export const Registration = () => {
    // let [register, setRegister] = useState(false);
    // let [reg, setReg] = useState('')
    // const { modalStore: { setCurrentModal } } = useStore()
    // const [correctPassw, setCorrectPassw] = useState(false)
    // const validationsSchema = yup.object().shape({
    //     name: yup.string().typeError('Must be a string').required('Required')
    //         .matches(/[a-zA-Z0-9]{3,}/g, 'Enter the correct name in English'),
    //     email: yup.string().typeError('Must be a string').required('Required')
    //         .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Please enter a valid email'),
    //     password: yup.string().typeError('Must be a string').required('Enter correct data')
    //         .matches(/[0-9a-zA-Z]{4,}/g, 'Password must contain at least 4 digits or latin letters'),
    //     repeat_password: yup.string().typeError('Must be a string').required('Enter correct data')
    //         .matches(/[0-9a-zA-Z]{4,}/g, 'Password must contain at least 4 digits or latin letters')
    // })
    // if (!register) {
    //     return (
    //         <div>
    //             <Formik
    //                 initialValues={{
    //                     name: '',
    //                     email: '',
    //                     password: '',
    //                     repeat_password: ''
    //                 }}
    //                 onSubmit={(values, errors) => {
    //                     setCorrectPassw(true);

    //                     onValue(ref(db, '/users/'), (snapshot) => {
    //                         const data = snapshot.val();

    //                         if (values.password === values.repeat_password) {
    //                             if (data[values.name]) {
    //                                 errors.setStatus('This name already exists');
    //                                 setCurrentModal(<Modal children={<ModalUncorrectNameRegistration />} />)
    //                             } else if (!data[values.name]) {
    //                                 set(ref(db, '/users/' + values.name), {
    //                                     name: values.name,
    //                                     email: values.email,
    //                                     password: values.password,
    //                                     repeat_password: values.repeat_password
    //                                 })
    //                                 setCurrentModal(null)
    //                                 setRegister(true)
    //                                 setReg(values.name)
    //                                 console.log(reg)
    //                             }
    //                         } else {
    //                             values.name = '';
    //                             values.email = '';
    //                             values.password = '';
    //                             values.repeat_password = '';
    //                             errors.setStatus(`Passwords don't match`);
    //                             setCurrentModal(<Modal children={<ModalUncorrectPasswordsRegistratiion />} />)
    //                         }
    //                     })
    //                 }}
    //                 validationSchema={validationsSchema}
    //             >
    //                 {({
    //                     values, errors, touched,
    //                     handleChange, handleBlur,
    //                     isValid = false, dirty = false, handleSubmit
    //                 }) => (
    //                     <form onSubmit={handleSubmit}>
    //                         <section className={styles.main_content}>
    //                             <h1>Registration</h1>
    //                             <div className={styles.information_form_wrapper}>
    //                                 <div className={styles.information_form}>
    //                                     <input placeholder='Email' type='email' name={`email`} id='email'
    //                                         onChange={handleChange}
    //                                         onBlur={handleBlur}
    //                                         value={values.email} />
    //                                     {touched.email && errors.email && <p style={{ 'color': 'red' }}>{errors.email}</p>}
    //                                 </div>
    //                                 <div className={styles.information_form}>
    //                                     <input placeholder='Name' type='name' name={`name`} id='name'
    //                                         onChange={handleChange}
    //                                         onBlur={handleBlur}
    //                                         value={values.name} />
    //                                     {touched.name && errors.name && <p style={{ 'color': 'red' }}>{errors.name}</p>}
    //                                 </div>
    //                                 <div className={styles.information_form}>
    //                                     <input placeholder='Password' type='password' name={"password"} id='password'
    //                                         onChange={handleChange}
    //                                         onBlur={handleBlur}
    //                                         value={values.password} />
    //                                     {touched.password && errors.password &&
    //                                         <p style={{ 'color': 'red' }}>{errors.password}</p>}
    //                                 </div>
    //                                 <div className={styles.information_form}>
    //                                     <input placeholder='Repeat password' type='password' name={"repeat_password"}
    //                                         id='repeat_password'
    //                                         onChange={handleChange}
    //                                         onBlur={handleBlur}
    //                                         value={values.repeat_password} />
    //                                     {touched.repeat_password && errors.repeat_password &&
    //                                         <p style={{ 'color': 'red' }}>{errors.repeat_password}</p>}
    //                                 </div>
    //                             </div>
    //                             <div className={styles.button_wrapper}>
    //                                 <button type={`submit`} disabled={!(isValid || dirty)}>REGISTER</button>
    //                             </div>
    //                         </section>
    //                     </form>)}
    //             </Formik>
    //         </div>
    //     );}
    // else {
    //     return (
    //         <Questionnaire data={reg} />
    //     )
    // }
    const { isAuth, id } = useAuth();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleRegistration = (email:string, password:string) => {
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
        <div>
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
                <div className={styles.button_wrapper}>
                    <button onClick={() => handleRegistration(email, pass)}>REGISTER</button>
                </div>
            </section>
        </div>
    )
}

import styles from './Registration.module.sass';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { setUser } from '../../stores/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import { useNavigate } from 'react-router-dom';
import MainCustomBtn from '../ui/button/ButtonLayout/ButtonLayout';
import { setModal } from '../../stores/slices/modalSlice';
import { ModalUncorrectNameRegistration } from '../modal/ModalUncorrectNameRegistration';
import ModalLayout from '../Containers/ModalContainer/ModalContainer';


export const Registration = () => {
    const validationsSchema = yup.object().shape({
        email: yup.string().typeError('Position to be a string').required('Necessarily')
            .matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'Please enter a valid email'),
        password: yup.string().typeError('Position to be a string').required('Necessarily')
            .matches(/[0-9a-zA-Z]{6,}/g, 'Password must be at least 6 characters long'),
        repeat_password: yup.string().typeError('Position to be a string').required('Necessarily').matches(/[0-9a-zA-Z]{6,}/g, 'Password must be at least 6 characters long').when('password', {
            is: (val: string | any[]) => (val && val.length > 0),
            then: yup.string().oneOf(
                [yup.ref('password')],
                'Both password need to be the same'
            )
        })
    });
    const [visible, setVisible] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const show = useAppSelector((state) => state.modal.show);
    const handleClose = () => {
        dispatch(
            setModal({
                show: false,
            })
        );
    };
    const handleRegistration = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/questionnaire');
            })
            .catch(() => setVisible(true));
    };
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    repeat_password: ''
                }}
                onSubmit={() => handleRegistration(email, pass)}
                validationSchema={validationsSchema}>
                {({
                    values, errors, touched,
                    handleChange, handleBlur,
                    isValid = false, dirty = false, handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <section className={styles.content}>
                            <h1>Registration</h1>
                            <div className={styles.content__info}>
                                <div className={styles.content__info__form}>
                                    <input
                                        placeholder='Email'
                                        name='email'
                                        type='email'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    {touched.email && errors.email && <p>{errors.email}</p>}
                                    {touched.email && !errors.email && setEmail(values.email)}
                                </div>
                                <div className={styles.content__info__form}>
                                    <input
                                        placeholder='Password'
                                        name='password'
                                        type='password'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    {touched.password && errors.password && <p>{errors.password}</p>}
                                    {touched.password && !errors.password && setPass(values.password)}
                                </div>
                                <div className={styles.content__info__form}>
                                    <input
                                        placeholder='Repeat password'
                                        name='repeat_password'
                                        type='password'
                                        value={values.repeat_password}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    {touched.repeat_password && errors.repeat_password &&
                                        <p>{errors.repeat_password}</p>}
                                    {touched.repeat_password && !errors.repeat_password && setPass(values.password)}
                                </div>
                            </div>
                            <div className={styles.content__info__button}>
                                <MainCustomBtn>
                                    <button type='submit'>REGISTER</button>
                                </MainCustomBtn>
                            </div>

                            {/* тут надо восстановить формик, это модалка на неверный ввод*/}
                        </section>
                    </form>)}
            </Formik>
            {visible ?
                <ModalLayout
                    close={handleClose}
                    open={show}
                    button="UNDERSTANDABLY">
                    <ModalUncorrectNameRegistration />
                </ModalLayout>
                : <></>}
        </div>
    );
};
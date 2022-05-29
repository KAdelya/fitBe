import styles from './Registration.module.sass';
import { Formik } from 'formik';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import { useNavigate } from 'react-router-dom';
import MainCustomBtn from '../ui/button/ButtonLayout/ButtonLayout';
import { setModal } from '../../redux/slices/modalSlice';
import { ModalUncorrectNameRegistration } from '../Modal/ModalUncorrectNameRegistration';
import ModalLayout from '../Containers/ModalContainer/ModalContainer';
import { setUser } from '../../redux/slices/userSlice';
import { validationsSchemaReg } from '../../utils/validationsSchema';


export const Registration = () => {
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
                    id: user.uid,
                    userEmail: user.email,
                    token: user.refreshToken,
                }));
                navigate('/questionnaire');
            })
            .catch(() => setVisible(true));
    };
    
    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    repeat_password: ''
                }}
                onSubmit={(values) => handleRegistration(values.email, values.password)}
                validationSchema={validationsSchemaReg}>
                {({
                    values, errors, touched,
                    handleChange, handleBlur, handleSubmit
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
                                </div>
                            </div>
                            <div className={styles.content__info__button}>
                                <MainCustomBtn>
                                    <button type='submit'>REGISTER</button>
                                </MainCustomBtn>
                            </div>

                        </section>
                    </form>)}
            </Formik>
            {visible ?
                <ModalLayout
                    close={handleClose}
                    open={show}
                    button="UNDERSTANDABLY">
                    <ModalUncorrectNameRegistration />
                </ModalLayout>: <></>}
        </div>
    );
};
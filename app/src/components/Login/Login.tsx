import styles from './Login.module.sass';
import MainCustomBtn from '../ui/button/ButtonLayout/ButtonLayout';
import ModalLayout from '../Containers/ModalContainer/ModalContainer';
import { Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import { setModal } from '../../redux/slices/modalSlice';
import { ModalUncorrectNameOrPasswordSign } from '../Modal/ModalUncorrectNameSign';
import { setUser } from '../../redux/slices/userSlice';
import { validationsSchemaLog } from '../../utils/validationsSchema';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

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

    const [visible, setVisible] = useState(false);
    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    userEmail: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }));
                navigate('/user');
            })
            .catch(() => {
                setVisible(true);
            });
    };

    return (
        <div>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={() => handleLogin(email, pass)}
                validationSchema={validationsSchemaLog}>
                {({
                    values, errors, touched,
                    handleChange, handleBlur, handleSubmit
                }) => (
                    <form onSubmit={handleSubmit}>
                        <section className={styles.content}>
                            <h1>Time to training!</h1>
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
                                <div className={styles.content__info__button}>
                                    <MainCustomBtn>
                                        <button type='submit'>SIGN IN</button>
                                    </MainCustomBtn>
                                </div>
                            </div>
                        </section>
                    </form>)}
            </Formik>
            {visible ?
                <ModalLayout
                    close={handleClose}
                    open={show}
                    button="UNDERSTANDABLY">
                    <ModalUncorrectNameOrPasswordSign />
                </ModalLayout>
                :
                <></>}
        </div>
    );
};
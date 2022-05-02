import styles from './Sign.module.sass';
import * as yup from "yup";
import { Formik } from 'formik';
import { useStore } from "../../utils/use-stores-hook";
import Modal from '../Layouts/ModalLayout/ModalLayout'
import { getDatabase, onValue, ref, set } from "firebase/database";
import React, {useState} from "react";
import { ModalUncorrectNameSign } from "../Modal/ModalUncorrectNameSign";
import { ModalUncorrectPasswordSign } from "../Modal/ModalUncorrectPasswordSign";
import {Navigate, useParams} from "react-router-dom";

export const Sign = () => {
    const [isSign, setIsSign] = useState(false)
    let [sig, setSig] = useState('')
    const { modalStore: { setCurrentModal } } = useStore()
    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Must be a string').required('Required')
            .matches(/[a-zA-Z0-9]{3,}/g, 'Enter the correct name in English'),
        password: yup.string().typeError('Must be a string').required('Enter correct data')
            .matches(/[0-9a-zA-Z]{4,}/g, 'Password must contain at least 4 digits or latin letters')
    })
    if (!isSign) {
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
                            setSig(values.name)
                            if (data[values.name]) {
                                if (values.password === data[values.name].password) {
                                    // console.log(data[values.name].password)
                                    setIsSign(true)
                                    console.log(sig)
                                } else {
                                    setCurrentModal(<Modal children={<ModalUncorrectPasswordSign/>}/>)
                                }
                            } else if (!data[values.name]) {
                                setCurrentModal(<Modal children={<ModalUncorrectNameSign/>}/>)
                            }
                        })
                    }}
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
                                        <input placeholder='Name' type='name' name={`name`}
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.name}/>
                                        {touched.name && errors.name && <p style={{'color': 'red'}}>{errors.name}</p>}
                                    </div>
                                    <div className={styles.information_form}>
                                        <input placeholder='Password' type='password' name={"password"}
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.password}/>
                                        {touched.password && errors.password &&
                                        <p style={{'color': 'red'}}>{errors.password}</p>}
                                    </div>
                                    <div className={styles.button_wrapper}>
                                        <button type={`submit`} disabled={!(isValid || dirty)}>SIGN IN</button>
                                    </div>
                                </div>
                            </section>
                        </form>)}
                </Formik>
            </div>
        )
    }
    else {
        return(
            <div>
                <Navigate to={'/user/'+sig} />
            </div>
        )
    }
}

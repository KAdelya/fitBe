import styles from "./Questionnaire.module.sass";
import * as yup from 'yup';
import React, {FC, useState} from "react";
import {useStore} from "../../utils/use-stores-hook";
import {inspect} from "util";
import {getDatabase, onValue, ref, set} from "firebase/database";
import Modal from "../layouts/Modal";
import {ModalUncorrectNameRegistration} from "../modal/ModalUncorrectNameRegistration";
import {ModalUncorrectPasswordsRegistratiion} from "../modal/ModalUncorrectPasswordsRegistratiion";
import { Formik } from "formik";
import {ModalWelcome} from "../modal/ModalWelcome";
import PersonalArea from "../../pages/PersonalArea/PersonalArea";
import {Navigate, Route, BrowserRouter as Router, Routes} from "react-router-dom";

interface Props {
    data: any
}


export const Questionnaire: FC<Props> = ({data }) =>{
    const {modalStore: {currentModal, setCurrentModal}} = useStore()
    const [isSubmit, setIsSubmit] = useState(false)
    const validationsSchema = yup.object().shape({
        weight: yup.string().typeError('Должно быть строкой').required('Обязательно')
            .matches(/[0-9]+/g, 'Введите правильный вес в кг'),
        age: yup.string().typeError('Должно быть строкой').required('Обязательно')
            .matches(/[0-9]+/g, 'Введите верный возраст'),
        growth: yup.string().typeError('Должно быть строкой').required('Введите верные данные')
            .matches(/[0-9]{2,}/g, 'Введите верный рост')
    })
    const [checked, setChecked] = React.useState('type2');
    console.log(checked)
    const handleType1Change = () => {
        setChecked('type1');
    };

    const handleType2Change = () => {
        setChecked('type2');
    };
    const counter = (weight: string, age: string, growth: string) => {
        console.log(checked)
        if (checked === 'type1') {
            var formula = 10 * Number(weight) + 6.25 * Number(growth) - 5 * Number(age) - 161
            return formula
        }
        if (checked === 'type2') {
            formula = 10 * Number(weight) + 6.25 * Number(growth) - 5 * Number(age) + 5
            return formula
        }
        return 0
    }
    if (!isSubmit) {
        return (
            <Formik
                initialValues={{
                    weight: '',
                    age: '',
                    growth: ''
                }}
                onSubmit={(values, errors) => {
                    console.log(counter(values.weight, values.age, values.growth))
                    const db = getDatabase();
                    const starCountRef = ref(db, '/users_and_callories/');
                    onValue(starCountRef, (snapshot) => {
                        const dat = snapshot.val();
                        console.log(dat[data])
                        set(ref(db, '/users_and_callories/' + data), {
                            name: data,
                            ccalloriy: counter(values.weight, values.age, values.growth)
                        })
                    })
                    setIsSubmit(true)
                    setCurrentModal(<Modal
                        children={<ModalWelcome ccal={counter(values.weight, values.age, values.growth)}/>}/>)
                }}
                validationSchema={validationsSchema}
            >
                {({
                      values, errors, touched,
                      handleChange, handleBlur,
                      isValid = false, dirty = false, handleSubmit
                  }) => (<form onSubmit={handleSubmit}>
                    <div className={styles.question_block_wrapper}>
                        <div className={styles.block_for_question}>
                            <label>Укажите ваш пол:</label>
                            <div className={styles.flex_block}>
                                <label>
                                    <input type="radio" className="custom-checkbox" checked={checked === 'type1'}
                                           onChange={handleType1Change}/>
                                    Мужчина
                                </label>
                                <label>
                                    <input type="radio" className="custom-checkbox" checked={checked === 'type2'}
                                           onChange={handleType2Change}/>
                                    Женщина
                                </label>
                            </div>
                        </div>
                        <div className={styles.block_for_question}>
                            <label>Ваш вес (кг)</label>
                            <input name="weight" id='weight'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.weight}/>
                            {touched.weight && errors.weight &&
                            <p style={{'color': 'red'}}>{errors.weight}</p>}
                        </div>
                        <div className={styles.block_for_question}>
                            <label>Ваш возраст:</label>
                            <input name="age" id='age'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.age}/>
                            {touched.age && errors.age &&
                            <p style={{'color': 'red'}}>{errors.age}</p>}
                        </div>
                        <div className={styles.block_for_question}>
                            <label>Ваш рост (в см):</label>
                            <input name="growth" id='growth'
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.growth}/>
                            {touched.growth && errors.growth &&
                            <p style={{'color': 'red'}}>{errors.growth}</p>}
                        </div>
                        <div className={styles.block_for_question}>
                            <label>Активность</label>
                            <input name="activity"/>
                        </div>
                        <div className={styles.block_for_question}>
                            <label>Желаемое количество тренировок в неделю</label>
                            <input/>
                        </div>
                    </div>
                    <div className={styles.button_save_content}>
                        <div className={styles.button_wrapper}>
                            <button type={`submit`} disabled={!(isValid || dirty)}>Сохранить</button>
                        </div>
                    </div>
                </form>)}
            </Formik>
        );
    }
    else{
        return(
            <div>
            <Navigate to='/user'/>
            </div>

        )
    }
}

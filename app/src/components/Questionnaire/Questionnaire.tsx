import styles from './Questionnaire.module.sass';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainCustomBtn from '../ui/button/ButtonLayout/ButtonLayout';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import { setUser } from '../../redux/slices/userSlice';
import { CreateUser } from '../../services/user.service';

export const Questionnaire = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { userEmail, id, token, } = useAppSelector(state => state.user);
    const [gender, setGender] = useState('Male');
    const [form, setForm] = useState({
        userName: '',
        userSurname: '',
        currentWeight: '',
        desiredWeight: '',
    });

    const submit = (e: any) => {
        e.preventDefault();
        dispatch(setUser({
            userName: form.userName,
            userSurname: form.userSurname,
            userEmail: userEmail,
            id: id,
            token: token,
            weight: form.currentWeight,
        }));
        CreateUser(id, userEmail, form.userName, 
            form.userSurname, form.currentWeight, form.desiredWeight);
        navigate('/user');
    };

    const update = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    
    return (
        <div>
            <form onSubmit={submit}>
                <div className={styles.question_page}>
                    <div className={styles.question_page__block}>
                        <label>Please enter your gender:</label>
                        <div className={styles.question_page__block__radio}>
                            <label>
                                <input type="radio"
                                    className="custom-checkbox"
                                    checked={gender === 'Male'}
                                    value="Male"
                                    onClick={() => setGender('Male')} />
                                Male
                            </label>
                            <label>
                                <input type="radio"
                                    className="custom-checkbox"
                                    checked={gender === 'Female'}
                                    value="Female"
                                    onClick={() => setGender('Female')} />
                                Female
                            </label>
                        </div>
                    </div>
                    <div className={styles.question_page__block}>
                        <label>Your name:</label>
                        <input
                            value={form.userName}
                            name="userName"
                            onChange={update} />
                    </div>
                    <div className={styles.question_page__block}>
                        <label>Your surname:</label>
                        <input
                            value={form.userSurname}
                            name="userSurname"
                            onChange={update}
                        />
                    </div>
                    <div className={styles.question_page__block}>
                        <label>Your weight (kg):</label>
                        <input
                            value={form.currentWeight}
                            name="currentWeight"
                            onChange={update}
                        />
                    </div>
                    <div className={styles.question_page__block}>
                        <label>Your desired weight (kg):</label>
                        <input
                            value={form.desiredWeight}
                            name="desiredWeight"
                            onChange={update}
                        />
                    </div>
                    <div className={styles.question_page__block}>
                        <label>Your age:</label>
                        <input name="age" />
                    </div>
                    <div className={styles.question_page__block}>
                        <label>Your height (cm):</label>
                        <input name="growth" />
                    </div>
                    <div className={styles.question_page__block}>
                        <label>Activity:</label>
                        <input name="activity" />
                    </div>
                    <div className={styles.question_page__block}>
                        <label>Desired number of workouts per week:</label>
                        <input />
                    </div>
                </div>
                <div className={styles.question_page__save}>
                    <div className={styles.question_page__save__button}>
                        <MainCustomBtn>
                            <button>SAVE</button>
                        </MainCustomBtn>
                    </div>
                </div>
            </form>
        </div>
    );
};
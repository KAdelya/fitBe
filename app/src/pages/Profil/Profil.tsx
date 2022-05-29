import styles from './Profil.module.sass';
import no_avatar from '../../assets/images/no_avatar.png';
import { NavLink, useNavigate } from 'react-router-dom';
import MainCustomBtn from '../../components/ui/button/ButtonLayout/ButtonLayout';
import CustomBtnLayout from '../../components/ui/button/CustomBtnLayout/CustomBtnLayout';
import { useAuth } from '../../utils/use-auth';
import { onValue, ref, set, update } from 'firebase/database';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import { setModal } from '../../redux/slices/modalSlice';
import ModalLayout from '../../components/Containers/ModalContainer/ModalContainer';
import { ModalWelcome } from '../../components/Modal/ModalWelcome';
import { db } from '../..';
import { setUser } from '../../redux/slices/userSlice';


const Profil = () => {
    const { userEmail, userName, userSurname, id, token } = useAppSelector(state => state.user);
    const show = useAppSelector((state) => state.modal.show);
    const dispatch = useAppDispatch();
    const handleClose = () => {
        dispatch(
            setModal({
                show: false,
            })
        );
    };
    useEffect(() => {
        const dbRef = (ref(db, `/${id}13`));
        onValue(dbRef, (snapshot: any) => {
            dispatch(setUser({
                id: id,
                token: token,
                userEmail: userEmail,
                userName: snapshot.val().user.name,
                userSurname: snapshot.val().user.surname,
            }));
        });
    }, []);




    return (
        <div>
            <section className={styles.profil_page}>
                <div className={styles.profil_page__avatar}>
                    <div className={styles.profil_page__avatar__img}>
                        <img src={no_avatar} alt="avatar" />
                        <button onClick={() => console.log(userEmail, userName, userSurname, id, token)}>knowing</button>
                        {/* <input type="file" onChange={formHandler}/> */}
                    </div>
                    <div className={styles.profil_page__avatar__button}>
                        {/* <input type="file" onChange={handleChange} /> */}
                        <CustomBtnLayout>
                            <button>EDIT AVATAR</button>
                        </CustomBtnLayout>
                        {/* <h3>Uploaded {progress} %</h3> */}
                    </div>
                </div>
                <div className={styles.profil_page__info}>
                    <h1>{userEmail}</h1>
                    <p>{userName} {userSurname}</p>
                    <div className={styles.profil_page__info__blocks}>
                        <div className={styles.profil_page__info__blocks__item}>
                            <h3>CURRENT WEIGHT</h3>
                            {/* <p>{curWeight}</p> */}
                        </div>
                        <div className={styles.profil_page__info__blocks__item}>
                            <h3>CALORIES</h3>
                            {/* <p>{calories}</p> */}
                        </div>
                        <br />
                    </div>
                    <div className={styles.profil_page__info__blocks}>
                        <div className={styles.profil_page__info__blocks__item}>
                            <h3>HOURS SPENT</h3>
                            {/* <p>{spendingHours}</p> */}
                        </div>
                        <div className={styles.profil_page__info__blocks__item}>
                            <h3>WATER</h3>
                            {/* <p>{waterCount}</p> */}
                        </div>
                    </div>
                    <div className={styles.profil_page__info__bottom}>
                        <MainCustomBtn>
                            <button>MARK THE WORKOUT</button>
                        </MainCustomBtn>
                        <NavLink to='/track'>
                            <MainCustomBtn>
                                <button>WEIGH YOURSELF</button>
                            </MainCustomBtn>
                        </NavLink>
                    </div>
                </div>
            </section>
            {show ?
                <ModalLayout
                    close={handleClose}
                    open={show}
                    button="START">
                    <ModalWelcome ccal={0} />
                </ModalLayout>
                : <></>}
        </div>
    );
};
export default Profil;


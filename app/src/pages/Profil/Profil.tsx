import CustomBtnLayout from '../../components/ui/button/CustomBtnLayout/CustomBtnLayout';
import ModalLayout from '../../components/Containers/ModalContainer/ModalContainer';
import MainCustomBtn from '../../components/ui/button/ButtonLayout/ButtonLayout';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import { ModalWelcome } from '../../components/Modal/ModalWelcome';
import no_avatar from '../../assets/images/no_avatar.png';
import { setModal } from '../../redux/slices/modalSlice';
import { setUser } from '../../redux/slices/userSlice';
import { onValue, ref, update } from 'firebase/database';
import { NavLink } from 'react-router-dom';
import styles from './Profil.module.sass';
import { useEffect } from 'react';
import { db } from '../..';


const Profil = () => {
    const { userEmail, userName, 
            userSurname, id, token,
            weight, spendingHours } = useAppSelector(state => state.user);
    const show = useAppSelector((state) => state.modal.show);
    const {waterCounter} = useAppSelector(state => state.waterCounter);
    const dispatch = useAppDispatch();


    const handleClose = () => {
        dispatch(
            setModal({
                show: false,
            })
        );
    };
    
    useEffect(() => {
        const dbRef = (ref(db, `/${id}`));
        onValue(dbRef, (snapshot: any) => {
            dispatch(setUser({
                id: id,
                token: token,
                userEmail: userEmail,
                userName: snapshot.val().user.name,
                userSurname: snapshot.val().user.surname,
                weight: snapshot.val().weight.currentWeight,
                spendingHours: snapshot.val().info.spendingHours
            }));
        });
    }, []);

    async function updateInDataBase() {
        update(ref(db, `/${id}`), {
            info: {
                spendingHours: spendingHours + 1,
            },
        }).catch((error) => { console.log( error);});
    }

    return (
        <div>
            <section className={styles.profil_page}>
                <div className={styles.profil_page__avatar}>
                    <div className={styles.profil_page__avatar__img}>
                        <img src={no_avatar} alt="avatar" />
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
                            <p>{weight}</p>
                        </div>
                        <div className={styles.profil_page__info__blocks__item}>
                            <h3>CALORIES</h3>
                            <p></p>
                        </div>
                        <br />
                    </div>
                    <div className={styles.profil_page__info__blocks}>
                        <div className={styles.profil_page__info__blocks__item}>
                            <h3>HOURS SPENT</h3>
                            <p>{spendingHours}</p>
                        </div>
                        <div className={styles.profil_page__info__blocks__item}>
                            <h3>WATER</h3>
                            <p>{waterCounter}</p>
                        </div>
                    </div>
                    <div className={styles.profil_page__info__bottom}>
                        <MainCustomBtn>
                            <button onClick={() => updateInDataBase()}>MARK THE WORKOUT</button>
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


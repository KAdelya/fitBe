import CustomBtnLayout from '../../components/ui/button/CustomBtnLayout/CustomBtnLayout';
import ModalLayout from '../../components/Containers/ModalContainer/ModalContainer';
import MainCustomBtn from '../../components/ui/button/ButtonLayout/ButtonLayout';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import { ModalWelcome } from '../../components/Modal/ModalWelcome';
import no_avatar from '../../assets/images/no_avatar.png';
import { setAvatar, setUser } from '../../redux/slices/userSlice';
import { onValue, ref, update } from 'firebase/database';
import { NavLink } from 'react-router-dom';
import styles from './Profil.module.sass';
import { useEffect, useState } from 'react';
import { db } from '../..';
import { ref as refStor, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from '../../index';


const Profil = () => {
    const { userEmail, userName,
        userSurname, id, token,
        weight, spendingHours, avatar } = useAppSelector(state => state.user);
    const { waterCounter } = useAppSelector(state => state.waterCounter);
    const { calories } = useAppSelector(state => state.calories);
    const [visibleModal, setInvisible] = useState(false);
    const dispatch = useAppDispatch();

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
        }).catch((error) => { console.log(error); });
    }
    // here picture code

    const [image, setImage] = useState<any>();
    const [url, setUrl] = useState<any>(no_avatar);

    const handleImageChange = (e: any) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = () => {
        const imageRef = refStor(storage, `${id}/avatar`);
        uploadBytes(imageRef, image)
            .then(() => {
                getDownloadURL(imageRef)
                    .then((url) => {
                        setUrl(url);
                        dispatch(setAvatar({avatar: url}));
                    })
                    .catch((error) => {
                        console.log(error.message, 'error getting the image url');
                    });
                setImage(null);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <div>
            <section className={styles.profil_page}>
                <div className={styles.profil_page__avatar}>

                    <div className={styles.profil_page__avatar__img}>
                      
                        {(avatar === '')?
                        <><img src={no_avatar} alt="avatar" /></>
                        :
                        <><img src={avatar} alt="avatar" /></>}
                    </div>
                    <div className={styles.profil_page__avatar__input}>
                        
                        <label className="upload-file__label">
                        <input type="file" onChange={handleImageChange} />
                            <span>SELECT PHOTO</span>
                        </label>
                    </div>
                    <div className={styles.profil_page__avatar__button}>
                        <CustomBtnLayout>
                            <button onClick={handleSubmit}>EDIT AVATAR</button>
                        </CustomBtnLayout>
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
                            <p>{calories}</p>
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
            {visibleModal ?
                <ModalLayout
                    close={() => setInvisible(false)}
                    open={visibleModal}
                    button="START">
                    <ModalWelcome />
                </ModalLayout>
                : <></>}
        </div>
    );
};
export default Profil;


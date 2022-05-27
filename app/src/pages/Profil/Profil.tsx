import styles from './Profil.module.sass';
import no_avatar from '../../assets/images/no_avatar.png';
import { NavLink, useNavigate } from 'react-router-dom';
import MainCustomBtn from '../../components/ui/button/ButtonLayout/ButtonLayout';
import CustomBtnLayout from '../../components/ui/button/CustomBtnLayout/CustomBtnLayout';
import { useAuth } from '../../utils/use-auth';
import { onValue, ref, update } from 'firebase/database';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import { setModal } from '../../redux/slices/modalSlice';
import ModalLayout from '../../components/Containers/ModalContainer/ModalContainer';
import { ModalWelcome } from '../../components/Modal/ModalWelcome';
import { db } from '../..';


const Profil = () => {
    const [user, setUser] = useState<any>();
    let [name, setName] = useState();
    let [surname, setSurname] = useState();
    let [spendingHours, setSpendingHours] = useState(0);
    let [avatar, setAvatar] = useState('');
    let [waterCount, setWaterCount] = useState();
    let [curWeight, setCurWeight] = useState();
    let [calories, setCalories] = useState();
    const navigate = useNavigate();
    

    // let { name } = useParams();
    // setCurrentModal(<Modal children={<ModalWelcome ccal={0} />} />)
    async function getInfoFromDataBase(id: any) {
        const dbRef = (ref(db, `/${id}`));
        onValue(dbRef, (snapshot: any) => {
            // console.log(snapshot);
            // return snapshot.val();
            name = snapshot.val().user.name;
            surname = snapshot.val().user.surname;
            // spendingHours = snapshot.val().info.spendingHours;
            // waterCount = snapshot.val().info.waterCount;
            // avatar = snapshot.val().info.avatar;
            // curWeight = snapshot.val().weight.current;
            // calories = snapshot.val().calories;
        });
        setName(name);
        setSurname(surname);
        // setSpendingHours(spendingHours);
        // setWaterCount(waterCount);
        // setCurWeight(curWeight);
        // setCalories(calories);
        // setAvatar(avatar);
    }

    async function updateInDataBase(id: any) {
        update(ref(db, `/${id}`), {
            info: {
                avatar: file,
                waterCount: waterCount,
                spendingHours: spendingHours + 1,
            }
        }).then(() => {
            console.log('update successfully');
        })
            .catch((error) => {
                alert('sorry :(' + error);
            });
    }
    const updateHours = () => {
        setSpendingHours(spendingHours + 1);
        updateInDataBase(id);
    };
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');
    const [file, setFile] = useState('');
    function handleChange(e: any) {
        setFile(URL.createObjectURL(e.target.files[0]));
        updateInDataBase(id);
    }
    const { id, email } = useAuth();

    // useEffect(() => {
    //     getInfoFromDataBase(id).then((result) => {
    //         setUser(result);
    //         console.log(result);
    //     });
    // }, []);
     useEffect(() => {
        getInfoFromDataBase(id);
    }, []);

    // const saveNewAvatar = (file: any) => {
    //     if(!file) return;
    //     const storageRef = ref(storage, `/files/${file.name}`)
    //     const uploadTask = uploadBytesResumable(storageRef,file)
    //     uploadTask.on('state_changed', (snapshot) => {
    //         const progress = Math.round(
    //             (snapshot.bytesTransferred / snapshot.totalBytes)* 100
    //             );
    //             setProgress(progress)

    //     },
    //     (err) => console.log(err),
    //     () => {
    //         getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url)) 
    //     })
    // }
    // const handleSubmit = (file: any) => {
    //     const storageRef = ref(storage, `/${id}`)
    //     uploadBytes(storageRef, file).then(() => {
    //         getDownloadURL(storageRef).then((url) => {
    //             setUrl(url);
    //         }).catch(error => console.log(error))
    //         setImage(null)
    //     })
    //     const uploadTask = uploadBytesResumable(storageRef, file)
    //     uploadTask.on('state_changed', (snapshot) => {
    //         const progress = Math.round(
    //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //         );
    //         setProgress(progress)
    //     });
    // }
    const show = useAppSelector((state) => state.modal.show);
    const {userName, userSurname} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const handleClose = () => {
        dispatch(
            setModal({
                show: false,
            })
        );
    };
    
    return (
        <div>
            <section className={styles.profil_page}>
                <div className={styles.profil_page__avatar}>
                    <div className={styles.profil_page__avatar__img}>
                        <img src={no_avatar} alt="avatar"/>
                        {/* <input type="file" onChange={formHandler}/> */}
                    </div>
                    <div className={styles.profil_page__avatar__button}>
                        <input type="file" onChange={handleChange} />
                        <CustomBtnLayout>
                            <button onClick={() => getInfoFromDataBase(id)}>EDIT AVATAR</button>
                        </CustomBtnLayout>
                        <h3>Uploaded {progress} %</h3>
                    </div>
                </div>
                <div className={styles.profil_page__info}>
                    <h1>{email}</h1>
                    <p>{name} {surname}</p>
                    <div className={styles.profil_page__info__blocks}>
                        <div className={styles.profil_page__info__blocks__item}>
                            <h3>CURRENT WEIGHT</h3>
                            <p>{curWeight}</p>
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
                            <p>{waterCount}</p>
                        </div>
                    </div>
                    <div className={styles.profil_page__info__bottom}>
                        <MainCustomBtn>
                            <button onClick={() => updateHours()}>MARK THE WORKOUT</button>
                        </MainCustomBtn>
                        <NavLink to='/track'>
                            <MainCustomBtn>
                                <button>WEIGH YOURSELF</button>
                            </MainCustomBtn>
                        </NavLink>
                        {/* <button onClick={() => }>happy hacking</button> */}
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
                :
                <></>}
        </div>
    );
};
export default Profil;

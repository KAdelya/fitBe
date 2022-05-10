import styles from '../Profil/Profil.module.sass';
import { observer } from "mobx-react";
import no_avatar from '../../assets/images/no_avatar.png'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { NavLink } from 'react-router-dom';
import MainCustomBtn from '../../components/ui/button/ButtonLayout/ButtonLayout';
import CustomBtnLayout from '../../components/ui/button/CustomBtnLayout/CustomBtnLayout';
import { useAuth } from '../../utils/use-auth';
import { onValue, update } from 'firebase/database';
import { db, storage } from '../..';
import { useState } from 'react';
import { getStorage, uploadBytesResumable, ref, getDownloadURL, uploadBytes } from "firebase/storage"


const Profil = () => {
    let [name, setName] = useState();
    let [surname, setSurname] = useState();

    let [spendingHours, setSpendingHours] = useState(0);
    // let [avatar, setAvatar] = useState()
    let [waterCount, setWaterCount] = useState();
    let [tracker, setTracker] = useState();
    let [calories, setCalories] = useState();
    // let { name } = useParams();
    // setCurrentModal(<Modal children={<ModalWelcome ccal={0} />} />)
    // async function getInfoFromDataBase( id: any) {
    //     const dbRef = (ref(db, `/${id}`))
    //     onValue(dbRef, (snapshot: any) => {
    //         name = snapshot.val().user.name;
    //         surname = snapshot.val().user.surname;
    //         spendingHours = snapshot.val().info.spendingHours;
    //         waterCount = snapshot.val().info.waterCount;
    //         avatar = snapshot.val().info.avatar;
    //         tracker = snapshot.val().tracker;
    //         calories = snapshot.val().calories;
    //     })
    //     setName(name);
    //     setSurname(surname);
    //     setSpendingHours(spendingHours);
    //     setWaterCount(waterCount);
    //     setTracker(tracker);
    //     setCalories(calories);
    //     setAvatar(avatar)
    // }

    // // async function updateInDataBase(id: any) {
    // //     update(ref(db, `/${id}`), {
    // //         info: {
    // //             avatar: avatar,
    // //             waterCount: waterCount,
    // //             spendingHours: spendingHours + 1,
    // //         }
    // //     }).then(() => { console.log('update successfully') })
    // //         .catch((error) => { alert('sorry :(' + error) })
    // // }
    // // async function upload(file: any, setLoading: any, id: any){
    // //     const fileRef = ref(db, `/${id}`);
    // //     setLoading(true);
    // //     const snapshot = await (fileRef, file)
    // // }

    // const updateHours = () => {
    //     setSpendingHours(spendingHours + 1)
    //     updateInDataBase(id)
    // }
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState('')

    const formHandler = (e : any) => {
        e.preventDefault();
        // const file = e.target[0].files[0]
        const file = e.target.files[0]
        setImage(file);
        handleSubmit(file)
    }
    const { id, email} = useAuth();

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
    const handleSubmit = (file: any) => {
        const storageRef = ref(storage, `/files}`)
        uploadBytes(storageRef, file).then(() => {
            getDownloadURL(storageRef).then((url) => {
                setUrl(url);
            }).catch(error => console.log(error))
            setImage(null)
        })
        const uploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on('state_changed', (snapshot) => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress)
        });
    }



    return (
        <div>
            <Header />
            <section className={styles.wrapper}>
                <div className={styles.user_avavtar}>

                    
                    <div className={styles.avatar}>

                        <img src={url}/>
                        <input type="file" onChange={formHandler}/>
                    </div>
                    <div className={styles.button}>
                        {/* <CustomBtnLayout>EDIT AVATAR</CustomBtnLayout> */}
                        <button type='submit'>edit</button>
                        <h3>Uploaded {progress} %</h3>
                    </div>
                </div>
                <div className={styles.user_info}>
                    <h2>{email}</h2>
                    <p>{name}{surname}</p>
                    <div className={styles.blocks}>
                        <div className={styles.item}>
                            <h3>CURRENT WEIGHT</h3>
                            <p>{tracker}</p>
                        </div>
                        <div className={styles.item}>
                            <h3>CALORIES</h3>
                            <p>{calories}</p>
                        </div>
                        <div className={styles.item}>
                            <h3>HOURS SPENT</h3>
                            <p>{spendingHours}</p>
                        </div>
                        <div className={styles.item}>
                            <h3>WATER</h3>
                            <p>{waterCount}</p>
                        </div>
                    </div>
                    <div className={styles.lower_button_wrapper}>
                        {/* <MainCustomBtn>MARK THE WORKOUT</MainCustomBtn> */}
                        {/* <button onClick={() => updateHours()}>MARK THE WORKOUT</button> */}



                        <NavLink to='/track'>
                            <MainCustomBtn onClick={''}>WEIGH YOURSELF</MainCustomBtn>
                        </NavLink>
                        {/* <button onClick={() => getInfoFromDataBase(id)}>happy hacking</button> */}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
export default Profil;
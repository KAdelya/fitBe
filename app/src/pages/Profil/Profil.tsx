import styles from '../Profil/Profil.module.sass';
import no_avatar from '../../assets/images/no_avatar.png'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {NavLink} from 'react-router-dom';
import MainCustomBtn from '../../components/ui/button/ButtonLayout/ButtonLayout';
import CustomBtnLayout from '../../components/ui/button/CustomBtnLayout/CustomBtnLayout';
import {useAuth} from '../../utils/use-auth';
import {onValue, ref, update} from 'firebase/database';
import {db, storage} from '../..';
import {useState} from 'react';
// import { getStorage, uploadBytesResumable, ref, getDownloadURL, uploadBytes } from "firebase/storage"
import {useEffect} from 'react';


const Profil = () => {
    let [name, setName] = useState();
    let [surname, setSurname] = useState();
    let [spendingHours, setSpendingHours] = useState(0);
    let [avatar, setAvatar] = useState('')
    let [waterCount, setWaterCount] = useState();
    let [curWeight, setCurWeight] = useState();
    let [calories, setCalories] = useState();
    // let { name } = useParams();
    // setCurrentModal(<Modal children={<ModalWelcome ccal={0} />} />)
    async function getInfoFromDataBase(id: any) {
        const dbRef = (ref(db, `/${id}`))
        onValue(dbRef, (snapshot: any) => {
            name = snapshot.val().user.name;
            surname = snapshot.val().user.surname;
            spendingHours = snapshot.val().info.spendingHours;
            waterCount = snapshot.val().info.waterCount;
            avatar = snapshot.val().info.avatar;
            curWeight = snapshot.val().weight.current;
            calories = snapshot.val().calories;
        })
        setName(name);
        setSurname(surname);
        setSpendingHours(spendingHours);
        setWaterCount(waterCount);
        setCurWeight(curWeight);
        setCalories(calories);
        setAvatar(avatar)
    }

    async function updateInDataBase(id: any) {
        update(ref(db, `/${id}`), {
            info: {
                avatar: file,
                waterCount: waterCount,
                spendingHours: spendingHours + 1,
            }
        }).then(() => {
            console.log('update successfully')
        })
            .catch((error) => {
                alert('sorry :(' + error)
            })
    }

    // async function upload(file: any, setLoading: any, id: any){
    //     const fileRef = ref(db, `/${id}`);
    //     setLoading(true);
    //     const snapshot = await (fileRef, file)
    // }

    const updateHours = () => {
        setSpendingHours(spendingHours + 1)
        updateInDataBase(id)
    }
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState('');
    const [url, setUrl] = useState('')

    // const formHandler = (e : any) => {
    //     e.preventDefault();
    //     // const file = e.target[0].files[0]
    //     const file = e.target.files[0]
    //     setImage(file);
    //     handleSubmit(file)
    // }
    // const handleImageUpload = (e: any) => {
    //     const [file] = e.target.files;
    //     setImage(file.name)
    //     console.log(image);
    // };
    const [file, setFile] = useState('');
    function handleChange(e:any) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        updateInDataBase(id)
        console.log(file)
    }
    const {id, email} = useAuth();
    useEffect(() => {
        getInfoFromDataBase(id)
        console.log(avatar)
    })

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


    return (
        <div>
            <Header/>
            <section className={styles.wrapper}>
                <div className={styles.user_avavtar}>
                    <div className={styles.avatar}>
                        <img src={avatar}/>
                        {/*<img src={image} alt="img"/>*/}
                        {/* <input type="file" onChange={formHandler}/> */}
                    </div>
                    <div className={styles.button}>
                        <CustomBtnLayout>
                            <input type="file" onChange={handleChange}/>
                            <button onClick={()=>getInfoFromDataBase(id)}>EDIT AVATAR</button>
                        </CustomBtnLayout>
                        <h3>Uploaded {progress} %</h3>
                    </div>
                </div>
                <div className={styles.user_info}>
                    <h2>{email}</h2>
                    <p>{name} {surname}</p>
                    <div className={styles.blocks}>
                        <div className={styles.item}>
                            <h3>CURRENT WEIGHT</h3>
                            <p>{curWeight}</p>
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
                        <MainCustomBtn>
                            <button onClick={updateHours}>MARK THE WORKOUT</button>
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
            <Footer/>
        </div>
    )
}
export default Profil;
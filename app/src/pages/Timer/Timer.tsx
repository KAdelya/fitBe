import styles from '../Timer/Timer.module.sass';
import {useStore} from "../../utils/use-stores-hook";
import {observer} from "mobx-react";
import line from '../../assets/images/line.svg'
import arr from '../../assets/images/arr.svg'
import rarr from '../../assets/images/rarr.svg'
import refresh from '../../assets/images/refresh.svg'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Layouts/ModalLayout/ModalLayout';
import {ModalTimer} from '../../components/Modal/ModalTimer';
import MainCustomBtn from '../../components/ui/button/ButtonLayout/ButtonLayout';
import {useParams} from "react-router-dom";
import {getDatabase, onValue, ref} from "firebase/database";
import {useState} from "react";

const Timer = observer(() => {
    const [v, setV] = useState(Object)
    let {name} = useParams()
    const {modalStore: {setCurrentModal}} = useStore()
    setCurrentModal(<Modal children={<ModalTimer data={name}/>}/>)
    const db = getDatabase();
    const starCountRef = ref(db, '/time_data/' + name + '/');
    function get_data(){
        onValue(starCountRef, (snapshot) => {
            const data = Object.values(Object(snapshot.val()))
            setV(data)
            return data
        })
    }
    return (
        <div>
            <Header/>
            <section className={styles.wrapper}>
                <div className={styles.timer}>
                    <div className={styles.timer_content_wrapper}>
                        {get_data}
                    </div>
                </div>
                <div className={styles.wrapper_timer_info}>
                    <div className={styles.reload_button_wrapper}>
                        <h1>Work</h1>
                        <div className={styles.reload}>
                            <button>
                                <img src={refresh} width={75}/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.set}>
                        <img src={line} width={5}/>
                        <img src={rarr} width={35}/>
                        <p> 1/5</p>
                        <img src={arr} width={35}/>
                        <img src={line} width={5}/>
                    </div>
                    <div className={styles.lower_button_wrapper}>
                        <MainCustomBtn>START</MainCustomBtn>
                        <MainCustomBtn>STOP</MainCustomBtn>
                    </div>
                </div>

            </section>
            <Footer/>
        </div>
    )
})
export default Timer;
import styles from '../Timer/Timer.module.sass';
import line from '../../assets/images/line.svg'
import arr from '../../assets/images/arr.svg'
import rarr from '../../assets/images/rarr.svg'
import refresh from '../../assets/images/refresh.svg'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Layouts/ModalLayout/ModalLayout';
import { ModalTimer } from '../../components/Modal/ModalTimer';
import MainCustomBtn from '../../components/ui/button/ButtonLayout/ButtonLayout';
import { useParams } from "react-router-dom";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);
    const [timeOn, setTimeOn] = useState(false)
    let rounds = 5
    useEffect(() => {
        let interval: any = null;
        if (timeOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 1)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [timeOn])

    return (
        <div>
            <Header />
            <section className={styles.wrapper}>
                <div className={styles.timer}>
                    <div className={styles.timer_content_wrapper}>
                        {timeOn? Math.floor((time / 100) % 60): 0}
                    </div>
                </div>
                <div className={styles.wrapper_timer_info}>
                    <div className={styles.reload_button_wrapper}>
                        <h1>Work</h1>
                        <div className={styles.reload}>
                            <button onClick={() => setTime(0)}>
                                <img src={refresh} width={75} />
                            </button>
                        </div>
                    </div>
                    <div className={styles.set}>
                        <img src={line} width={5} />
                        <img src={rarr} width={35} />
                        <p> {Math.floor((time / 6000) % 60) < rounds? Math.floor((time / 6000) % 60): () =>setTimeOn(false)}
                        /{rounds}</p>



                        <img src={arr} width={35} />
                        <img src={line} width={5} />
                    </div>
                    <div className={styles.lower_button_wrapper}>
                        {/* <MainCustomBtn>START</MainCustomBtn>
                        <MainCustomBtn>STOP</MainCustomBtn> */}
                        <button onClick={() => setTimeOn(true)}>
                            start</button>
                        <button onClick={() => setTimeOn(false)}>stop</button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Timer;
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
import {FC, useEffect, useState} from "react";

interface Props {
    hours: number,
    minutes: number,
    seconds: number,
    currentRound: number,
    endRound: number
}

const Timer: FC<Props> = ({hours, minutes, seconds, currentRound, endRound}) => {
    const [paused, setPaused] = useState(false);
    const [over, setOver] = useState(false);
    const [curRound, setCurRound] = useState(currentRound)
    const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

    const tick = () => {
        if (paused || over) return;

        if (h === 0 && m === 0 && s === 0) {
            setOver(true);
        } else if (m === 0 && s === 0) {
            setTime([h - 1, 59, 59]);
        } else if (s == 0) {
            setTime([h, m - 1, 59]);
        } else {
            setTime([h, m, s - 1]);
        }
    };

    const reset = () => {
        setTime([parseInt(String(hours)), parseInt(String(minutes)), parseInt(String(seconds))]);
        setPaused(false);
        setOver(false);
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    });
    const getNextRound = () => {
        if (curRound < endRound) {
            setTime([parseInt(String(hours)), parseInt(String(minutes)), parseInt(String(seconds))]);
            setPaused(false);
            setOver(false);
            setCurRound(curRound + 1);
        }

    }
    const getLastRound = () => {
        if (curRound > 1) {
            setTime([parseInt(String(hours)), parseInt(String(minutes)), parseInt(String(seconds))]);
            setPaused(false);
            setOver(false);
            setCurRound(curRound - 1);
        }
    }
    return (
        <div>
            <Header/>
            <section className={styles.wrapper}>
                <div className={styles.timer}>
                    <div className={styles.timer_content_wrapper}>
                        <p>{`${h.toString().padStart(2, '0')}:${m
                            .toString()
                            .padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</p>
                    </div>
                </div>
                <div className={styles.wrapper_timer_info}>
                    <div className={styles.reload_button_wrapper}>
                        <h1>Work</h1>
                        <div>{over ? "Time's up!" : ''}</div>
                        <div className={styles.reload}>
                            <button onClick={() => reset()}>
                                <img src={refresh} width={75}/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.set}>
                        <MainCustomBtn onClick={getLastRound}>
                        <img src={line} width={5}/>
                        <img src={rarr} width={35}/>
                        </MainCustomBtn>
                        <p> {String(curRound)}/{String(endRound)}</p>
                        <MainCustomBtn onClick={getNextRound}>
                        <img src={arr} width={35}/>
                        <img src={line} width={5}/>
                        </MainCustomBtn>
                    </div>
                    <div className={styles.lower_button_wrapper}>
                        <MainCustomBtn onClick={() => setPaused(!paused)}>{paused ? 'START' : 'STOP'}</MainCustomBtn>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Timer;
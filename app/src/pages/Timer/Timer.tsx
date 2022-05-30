import styles from './Timer.module.sass';
import line from '../../assets/images/line.svg';
import arr from '../../assets/images/arr.svg';
import rarr from '../../assets/images/rarr.svg';
import {ModalTimer} from '../../components/Modal/ModalTimer';
import MainCustomBtn from '../../components/ui/button/ButtonLayout/ButtonLayout';
import {useEffect, useState} from 'react';
import ModalLayout from '../../components/Containers/ModalContainer/ModalContainer';
import {useAppDispatch, useAppSelector} from '../../utils/redux-hooks';
import {setModal} from '../../redux/slices/modalSlice';
import CustomBtnLayout from '../../components/ui/button/CustomBtnLayout/CustomBtnLayout';
import {setRoundsCount} from "../../redux/slices/timerSlice";

const Timer = () => {
    const [time, setTime] = useState(0);
    const [timeOn, setTimeOn] = useState(false);
    const [currentRound, setCurrentRound] = useState(0);
    useEffect(() => {
        let interval: any = null;
        if (timeOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10);
            }, 100);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timeOn]);

    const [visible, setVisible] = useState(false);
    const changeRoundLeft = () => {
        if (currentRound > 0) {
            setCurrentRound(currentRound - 1);
        }
    };
    const changeRoundRight = () => {
        if (currentRound < roundsCount) {
            setCurrentRound(currentRound + 1);
        }
    };
    const show = useAppSelector((state) => state.modal.show);
    const dispatch = useAppDispatch();
    const handleClose = () => {
        dispatch(
            setModal({
                show: false,
            })
        );
    };
    const {workTime, roundsCount} = useAppSelector(state => state.timer);
    return (
        <div>

            <section className={styles.timer_page}>
                <div className={styles.timer_page__content}>
                    <div className={styles.timer_page__content__time}>
                        <p>{(Math.floor((time / 6000) % workTime) < roundsCount) ? Math.floor((time / 100) % workTime) : time}</p>
                    </div>
                    <CustomBtnLayout>
                        <button onClick={() => setVisible(!visible)}>SET THE TIME</button>
                    </CustomBtnLayout>
                </div>
                <div className={styles.timer_page__info}>
                    <div className={styles.timer_page__info__reload}>
                        <h1>Work</h1>
                        <button onClick={() => setTime(0)}>
                            <h2>&#8635;</h2>
                        </button>
                    </div>
                    <div className={styles.timer_page__info__set}>
                        <button onClick={changeRoundLeft}>
                            <img src={line} width={5} alt='arrow'/>
                            <img src={rarr} width={35} alt='arrow'/>
                        </button>
                        <p> {currentRound}/{roundsCount}</p>
                        <button onClick={changeRoundRight}>
                            <img src={arr} width={35} alt='arrow'/>
                            <img src={line} width={5} alt='arrow'/>
                        </button>
                    </div>
                    <div className={styles.timer_page__info__bottom}>
                        <MainCustomBtn>
                            <button onClick={() => setTimeOn(true)}>
                                START
                            </button>
                        </MainCustomBtn>
                        <MainCustomBtn>
                            <button onClick={() => setTimeOn(false)}>STOP</button>
                        </MainCustomBtn>
                    </div>
                </div>
            </section>

            {visible ?
                <ModalLayout
                    close={handleClose}
                    open={show}
                    button="START">
                    <ModalTimer/>
                </ModalLayout>
                :
                <></>}
        </div>
    );
};

export default Timer;
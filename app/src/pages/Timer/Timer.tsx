import styles from '../Timer/Timer.module.sass';
import line from '../../assets/images/line.svg'
import arr from '../../assets/images/arr.svg'
import rarr from '../../assets/images/rarr.svg'
import refresh from '../../assets/images/refresh.svg'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Layouts/ModalContainer/ModalContainer';
import { ModalTimer } from '../../components/Modal/ModalTimer';
import MainCustomBtn from '../../components/ui/button/ButtonLayout/ButtonLayout';
import { useParams } from "react-router-dom";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import ModalLayout from '../../components/Layouts/ModalContainer/ModalContainer';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import { setModal } from '../../stores/slices/modalSlice';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [timeOn, setTimeOn] = useState(false)
    let rounds = 5

    useEffect(() => {
        let interval: any = null;
        if (timeOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 100)
        } else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [timeOn])

    const [visible, setVisible] = useState(false);


    const show = useAppSelector((state) => state.modal.show);
    const dispatch = useAppDispatch();
    const handleClose = () => {
        dispatch(
          setModal({
            show: false,
          })
        );
      };

    //   <Modal
    //   open={show}
    //   className={classes.modal}
    //   onClose={handleClose}
    //   aria-labelledby="title"
    //   aria-describedby="description"
    //   BackdropComponent={Backdrop}
    //   BackdropProps={{
    //     timeout: 500,
    //   }}
    // >

    return (
        <div>
            <button onClick={()=>setVisible(!visible)}>openModal</button>
            <section className={styles.timer_page}>
                <div className={styles.timer_page__content}>
                    <div className={styles.timer_page__content__time}>
                        <p>{Math.floor((time / 6000) % 60) < rounds ? Math.floor((time / 100) % 60) : 0}</p>
                    </div>
                </div>
                <div className={styles.timer_page__info}>
                    <div className={styles.timer_page__info__reload}>
                        <h1>Work</h1>
                        <div className={styles.timer_page__info__reload__button}>
                            <button onClick={() => setTime(0)}>
                                <img src={refresh} width={75} />
                            </button>
                        </div>
                    </div>
                    <div className={styles.timer_page__info__set}>
                        <img src={line} width={5} />
                        <img src={rarr} width={35} />
                        <p> {Math.floor((time / 6000) % 60) < rounds ? Math.floor((time / 6000) % 60) : rounds}
                            /{rounds}</p>
                        <img src={arr} width={35} />
                        <img src={line} width={5} />
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

            {visible?
                <ModalLayout 
                    сlose={handleClose} 
                    open={show}
                    button="START">
                    <ModalTimer/>
                </ModalLayout>
                :
                <></>}
        </div>
    )
}

export default Timer;
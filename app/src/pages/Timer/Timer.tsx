import styles from './Timer.module.sass';
import line from '../../assets/images/line.svg';
import arr from '../../assets/images/arr.svg';
import rarr from '../../assets/images/rarr.svg';
import { ModalTimer } from '../../components/modal/ModalTimer';
import MainCustomBtn from '../../components/ui/button/ButtonLayout/ButtonLayout';
import { useEffect, useState } from 'react';
import ModalLayout from '../../components/Containers/ModalContainer/ModalContainer';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import { setModal } from '../../stores/slices/modalSlice';
import CustomBtnLayout from '../../components/ui/button/CustomBtnLayout/CustomBtnLayout';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [timeOn, setTimeOn] = useState(false);

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

    const { workTime, roundsCount } = useAppSelector(state => state.timer);
    return (
        <div>

            <section className={styles.timer_page}>
                <div className={styles.timer_page__content}>
                    <div className={styles.timer_page__content__time}>
                        <p>{Math.floor((time / 6000) % 60) < roundsCount ? Math.floor((time / 100) % 60) : 0}</p>
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
                        <img src={line} width={5} alt='arrow' />
                        <img src={rarr} width={35} alt='arrow' />
                        <p> {Math.floor((time / 6000) % 60) < roundsCount ? Math.floor((time / 6000) % 60) : roundsCount}
                            /{roundsCount}</p>
                        <img src={arr} width={35} alt='arrow' />
                        <img src={line} width={5} alt='arrow' />
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
                    <ModalTimer />
                </ModalLayout>
                :
                <></>}
        </div>
    );
};

export default Timer;
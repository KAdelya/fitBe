import styles from '../Containers/ModalContainer/ModalContainer.module.sass';
import timer from '../../assets/images/time.svg';
import { useState } from 'react';
import { useAppDispatch } from '../../utils/redux-hooks';
import { setWorkTime } from '../../stores/slices/timerSlice';

export const ModalTimer = () => {
    const [value_work, setValueWork] = useState('');
    const [value_rounds, setValueRounds] = useState('');
    const dispatch = useAppDispatch();
    const handleTime = (time: number) => {
        dispatch(
            setWorkTime({
                workTime: time,
            })
        );
    };
    return (
        <div>
            <div className={styles.wrapper_title}>
                <div className={styles.welcome_timer}>
                    <p>Set the time</p>
                    <div>
                        <img src={timer} width={40} alt='timer' />
                    </div>
                </div>
                <div className={styles.wrapper_exit_button}>
                </div>
            </div>
            <div className={styles.content_wrapper}>
                <div className={styles.set_time_wrapper}>
                    <div className={styles.set_time_block}>
                        <p>WORK</p>
                        <input value={value_work} onChange={event => setValueWork(event.target.value)} />
                    </div>
                    <div className={styles.set_time_block}>
                        <p>ROUNDS</p>
                        <input value={value_rounds} onChange={event => setValueRounds(event.target.value)} />
                    </div>
                    <button onClick={() => handleTime(Number(value_work))}>set</button>
                </div>
            </div>
        </div>
    );
};
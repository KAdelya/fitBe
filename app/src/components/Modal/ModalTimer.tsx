import styles from "../Layouts/ModalContainer/ModalContainer.module.sass";
import timer from '../../assets/images/time.svg'
import {useState } from "react";

export const ModalTimer = () => {
    const [value_work, setValueWork] = useState('');
    const [value_rest, setValueRest] = useState('');
    const [value_rounds, setValueRounds] = useState('');
    return (
        <div>
            <div className={styles.wrapper_title}>
                <div className={styles.welcome_timer}>
                    <p>Set the time</p>
                    <div>
                        <img src={timer} width={40} />
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
                        <p>REST</p>
                        <input value={value_rest} onChange={event => setValueRest(event.target.value)} />
                    </div>

                    <div className={styles.set_time_block}>
                        <p>ROUNDS</p>
                        <input value={value_rounds} onChange={event => setValueRounds(event.target.value)} />
                    </div>
                </div>
            </div>
        </div>
    );
}
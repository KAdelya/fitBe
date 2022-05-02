import style from "../Layouts/ModalLayout/ModalLayout.module.sass";
import {useStore} from "../../utils/use-stores-hook";
import logo_black from '../../assets/images/logo_black.svg'
import timer from '../../assets/images/time.svg'
import {FC, useState} from "react";
import {getDatabase, ref, set} from "firebase/database";
import {useParams} from "react-router-dom";

interface Props {
    data: any
}

export const ModalTimer:FC<Props> = ({data}) => {
    const [value_work, setValueWork] = useState('');
    const [value_rest, setValueRest] = useState('');
    const [value_rounds, setValueRounds] = useState('');
    const {modalStore: {clearCurrentModal}} = useStore()
    const addTime = () => {
        const db = getDatabase();
        set(ref(db, '/time_data/' + data + '/'), {
            value_work, value_rest, value_rounds
        })
        clearCurrentModal()
    }
    return (
        <div>
            <div className={style.wrapper_title}>
                <div className={style.welcome_timer}>
                    <p>Set the time</p>
                    <div>
                        <img src={timer} width={40}/>
                    </div>
                </div>
                <div className={style.wrapper_exit_button}>
                </div>
            </div>
            <div className={style.content_wrapper}>
                <div className={style.set_time_wrapper}>

                    <div className={style.set_time_block}>
                        <p>WORK</p>
                        <input value={value_work} onChange={event => setValueWork(event.target.value)}/>
                    </div>
                    <div className={style.set_time_block}>
                        <p>REST</p>
                        <input value={value_rest} onChange={event => setValueRest(event.target.value)}/>
                    </div>

                    <div className={style.set_time_block}>
                        <p>ROUNDS</p>
                        <input value={value_rounds} onChange={event => setValueRounds(event.target.value)}/>
                    </div>

                </div>
                <div className={style.button_wrapper}>
                    <button onClick={addTime}>
                        START
                    </button>
                </div>
            </div>
        </div>
    );
}
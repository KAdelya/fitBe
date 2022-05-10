import styles from '../Todods/Todods.module.sass';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import plus from '../../assets/images/butPlus.svg';
import prev from '../../assets/images/butprev.svg';
import Checkbox from '../../components/ui/checkbox/checkbox';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../../stores/slices';
import { addTask } from '../../stores/slices/todoSlice';


type Inputs = {
    taskTitle: string;
};
const Todods = () => {
    const { tasks } = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();
    const handleCreate = (data: Inputs) => {
        dispatch(addTask(data.taskTitle));
    };
    return (
        <div>
            <Header />
            <section className={styles.content_wrapper}>
                <div className={styles.border_wrapper}>
                    <div className={styles.button_wrapper}>
                        <div className={styles.buttons}>
                            <button>
                                <img src={prev} width={13} />
                            </button>
                        </div>
                        <div className={styles.border_content}>
                            <div className={styles.content}>
                                <p> date</p>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button >
                                <img src={plus} width={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.notice_wrapper}>
                {/* {tasks.map((el: { text: string | number | readonly string[] | undefined; }) =>
                    <div className={styles.input}>
                        <input value={el.text}/>
                    </div>)
                }
                {inputArea && (
                    <div className={styles.input}>
                        <input value={value} onChange={event => setValue(event.target.value)}/>
                        <button onClick={() => addTask(value)}>saveChanges</button>
                    </div>

                )} */}
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title}
                    </li>
                ))}
                <input type='text'/>
                



            </section>
            <Footer />
        </div>
    )
}

export default Todods;

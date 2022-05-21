import styles from '../Todods/Todods.module.sass';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import plus from '../../assets/images/butPlus.svg';
import prev from '../../assets/images/butprev.svg';
import Checkbox from '../../components/ui/checkbox/checkbox';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { RootState } from '../../stores/slices';
import { addTask, removeTask } from '../../stores/slices/todoSlice';


type Inputs = {
    taskTitle: string;
};
const Todods = () => {
    const [text, setText] = useState('')
    const { tasks } = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false)
    const handleCreate = (data: string) => {
        dispatch(addTask(data));
        setVisible(false)
        setText('')
    };

    const handleRemove = (id: number, title: string) => {
        dispatch(removeTask(id));
        setText(title)
    };
    return (
        <div>
            <Header />
            <section className={styles.todos_page}>
                <div className={styles.todos_page__content}>
                    <div className={styles.todos_page__content__buttons}>
                        <div className={styles.buttons}>
                            <button>
                                <img src={prev} width={13} />
                            </button>
                        </div>
                        <div className={styles.todos_page__content__date}>
                            <div className={styles.content}>
                                <p> date</p>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={() => setVisible(!visible)}>
                                <img src={plus} width={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.todo_notice}>
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
                    <div>
                        <pre>{task.id} - {task.title}</pre>
                        <button onClick={() => handleRemove(task.id, task.title)} style={{ color: 'red' }}>&times;</button>
                    </div>

                ))}
                <div className={styles.todo_notice__input}>
                    {visible?
                    <><input value={text} onChange={((e) => setText(e.target.value))} />
                    <button onClick={() => handleCreate(text)}>add tasky</button></>: <></>}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Todods;
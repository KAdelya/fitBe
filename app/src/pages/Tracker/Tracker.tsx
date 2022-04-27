import styles from '../Tracker/Tracker.module.sass';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import plus from '../../assets/images/butPlus.svg';
import prev from '../../assets/images/butprev.svg';
import Checkbox from '../../components/ui/button/checkbox/checkbox';
import { FC, useState } from 'react';



interface Props {
    tasksList: any
}
const Tracker:FC<Props> = ({tasksList}) => {
    const [inputArea, setInputAtea] = useState(false);
    const [value, setValue] = useState('');

    const [tasks, setTasks] = useState(tasksList);
    const addTask = (task: any) => {
        const item = { id: 4, text: task, date: 'today' }
        setTasks([...tasks, item]);
        setValue('')
    }

    const date = new Date();
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
                                <p>{date.toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={() => setInputAtea(!inputArea)}>
                                <img src={plus} width={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.notice_wrapper}>
                {tasks.map((el: { text: string | number | readonly string[] | undefined; }) =>
                    <div className={styles.input}>
                        <input value={el.text} />
                    </div>)
                }
                {inputArea === true && (
                    <div className={styles.input}>
                        <input value={value} onChange={event => setValue(event.target.value)} />
                        <button onClick={() => addTask(value)}>saveChanges</button>
                    </div>

                )}
            </section>
            <Footer />
        </div>
    )
}

export default Tracker;
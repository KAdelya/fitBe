import styles from '../Tracker/Tracker.module.sass';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import plus from '../../assets/images/butPlus.svg';
import prev from '../../assets/images/butprev.svg';
import Checkbox from '../../components/ui/button/checkbox/checkbox';
import { FC, useState } from 'react';



interface Props{
    tasks: []
}
const Tracker = () => {
    const [task, setTask] = useState(false);

    const tasks = [
        { id: 1, text: 'Something', date:'today'},
        { id: 2, text: 'Something else', date:'today'},
        { id: 3, text: 'Training', date:'today'},
    ]
    return (
        <div>
            <Header />
            <section className={styles.content_wrapper}>
                <div className={styles.border_wrapper}>
                    <div className={styles.button_wrapper}>
                        <div className={styles.buttons}>
                            <button>
                                <img src={prev} width={13}/>
                            </button>
                        </div>
                        <div className={styles.border_content}>
                            <p>Today</p>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={() => setTask(!task)}>
                                <img src={plus} width={20}/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.notice_wrapper}>
                {tasks.map(el =>
                    <div className={styles.notice}>
                        <p>{el.text}</p>
                    </div>)}
                    <div className={styles.input}>
                        <input />
                    </div>
            </section>
            <Footer />
        </div>
    )
}

export default Tracker;
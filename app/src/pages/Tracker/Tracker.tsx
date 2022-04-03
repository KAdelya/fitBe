import styles from '../Tracker/Tracker.module.sass';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import plus from '../../assets/images/butPlus.svg';
import prev from '../../assets/images/butprev.svg';
import Checkbox from '../../components/ui/button/checkbox/checkbox';

const Tracker = () => {
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
                            <button>
                                <img src={plus} width={20}/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.notice_wrapper}>
                <div className={styles.notice}>
                    
                    <p>Training</p>
                </div>
                <div className={styles.notice}>
                    <p>Something else</p>
                </div>
                <div className={styles.notice}>
                    <p>Clean the house</p>
                </div>
                <div className={styles.notice}>
                    <p>Training</p>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Tracker;
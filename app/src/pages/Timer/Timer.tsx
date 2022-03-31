import styles from '../Timer/Timer.module.sass';
import { useStore } from "../../utils/use-stores-hook";
import Modal from "../../components/layouts/ModalLayout/Modal";
import { observer } from "mobx-react";
import Button from '../../components/ui/button/button';
import line from '../../assets/images/line.svg'
import arr from '../../assets/images/arr.svg'
import rarr from '../../assets/images/rarr.svg'
import refresh from '../../assets/images/refresh.svg'
import { ModalTimer } from '../../components/modal/ModalTimer';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Timer = observer(() => {
    const { modalStore: { setCurrentModal } } = useStore()
    setCurrentModal(<Modal children={<ModalTimer />} />)
    return (
        <div>
            <Header />

            <section className={styles.content_wrapper}>

                <div className={styles.timer_wrapper}>
                   <div className={styles.timer_content_wrapper}>
                       <p>30</p>
                   </div>
                </div>
                <div className={styles.wrapper_timer_info}>
                    <div className={styles.reload_button_wrapper}>
                    <h1>Work</h1>
                    <div className={styles.reload_button}>
                        <button>
                            <img src={refresh} width={75}/>
                        </button>
                    </div>
                    </div>
                    <div className={styles.counter_block}>
                        <img src={line}  width={5}/>
                        <img src={rarr} width={35}/>
                        <p> 1/5</p>
                        <img src={arr} width={35}/>
                        <img src={line} width={5}/>
                    </div>
                    <div className={styles.lower_button_wrapper}>
                        <Button text='START' />
                        <Button text='STOP' />
                    </div>
                </div>
               
            </section>
            <Footer />
        </div>
    )
})
export default Timer;

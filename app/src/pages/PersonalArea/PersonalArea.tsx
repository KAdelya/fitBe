import styles from '../PersonalArea/PersonalArea.module.sass';
import { useStore } from "../../utils/use-stores-hook";
import Modal from "../../components/layouts/ModalLayout/Modal";
import { ModalWelcome } from "../../components/modal/ModalWelcome";
import { observer } from "mobx-react";
import Button from '../../components/ui/button/button';
import no_avatar from '../../assets/images/no_avatar.png'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { NavLink } from 'react-router-dom';

const PersonalArea = observer(() => {
    const { modalStore: { setCurrentModal } } = useStore()
    setCurrentModal(<Modal children={<ModalWelcome />} />)
    return (
        <div>
            <Header />
            <section className={styles.content_wrapper}>
                <div className={styles.wrapper_user_avavtar}>
                    <div className={styles.avatar_wrapper}>
                        <img src={no_avatar} />
                    </div>
                    <div className={styles.button_wrapper}>
                        <Button text='EDIT AVATAR' />
                    </div>
                </div>
                <div className={styles.wrapper_user_info}>
                    <h2>IvanIvanov</h2>
                    <p>Ivan Ivanov</p>
                    <div className={styles.item_blocks_wrap}>
                        <div className={styles.item_blocks}>
                            <h3>CURRENT WEIGHT</h3>
                            <p>75</p>
                        </div>
                        <div className={styles.item_blocks}>
                            <h3>CALORIES</h3>
                            <p>1750</p>
                        </div>
                        <div className={styles.item_blocks}>
                            <h3>HOURS SPENT</h3>
                            <p>50</p>
                        </div>
                        <div className={styles.item_blocks}>
                            <h3>WATER</h3>
                            <p>250</p>
                        </div>
                    </div>
                    <div className={styles.lower_button_wrapper}>
                        <Button text='MARK THE WORKOUT' />
                        <NavLink to='/track'>
                            <Button text='WEIGH YOURSELF' />
                        </NavLink>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
})
export default PersonalArea;

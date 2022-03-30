import { Icon } from '../../components/Icon/Icon';
import styles from '../PersonalArea/PersonalArea.module.sass';
import avatar from '../../assets/images/nikita.jpg';
import { useStore } from "../../utils/use-stores-hook";
import Modal from "../../components/layouts/Modal";
import { ModalWelcome } from "../../components/modal/ModalWelcome";
import { observer } from "mobx-react";
import Button from '../../components/ui/button/button';
import no_avatar from '../../assets/images/no_avatar.png'

const PersonalArea = observer(() => {
    const { modalStore: { setCurrentModal } } = useStore()
    setCurrentModal(<Modal children={<ModalWelcome />} />)
    return (
        <div>
            <header>
                <div className={styles.logo_wrapper}>
                    <Icon name='logo' width={48} height={48} />
                    <p>BeFit</p>
                </div>
                <nav className={styles.navbar_wrapper}>
                    <ul>
                        <li>Timer</li>
                        <li>Workout</li>
                        <li>Diary</li>
                        <li>Tracker</li>
                    </ul>
                </nav>
                <div className={styles.button_wrapper}>
                    <Button text='SIGN OUT' />
                </div>
            </header>

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
                            <h3>IN THE TOP</h3>
                            <p>1</p>
                        </div>
                    </div>
                    <div className={styles.lower_button_wrapper}>
                        <Button text='MARK THE WORKOUT' />
                        <Button text='WEIGH YOURSELF' />
                    </div>
                </div>
            </section>
            <footer>
                <p>Copyright © 2022. All rights reserved</p>
            </footer>
        </div>
    )
})
export default PersonalArea;

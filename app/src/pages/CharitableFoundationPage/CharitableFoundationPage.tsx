import styles from "../CharitableFoundationPage/CharitableFoundationPage.module.sass";
import { Icon } from "../../components/Icon/Icon";
import arrow_back from '../../assets/images/arrow_back.svg';
import heart from '../../assets/images/heart.svg';
import dog from '../../assets/images/dog.svg';

export const CharitableFoundationPage = () => {
    return (
        <div className={styles.page_content}>
            <div className={styles.page_content_wrapper}>
                <div className={styles.upper_content_wrapper}>
                    <header className={styles.header}>
                        <div className={styles.header_wrapper}>
                            <div className={styles.logo_wrapper}>
                                <img src={arrow_back} />
                                <p>Благотворительный фонд</p>
                            </div>
                        </div>
                    </header>
                    <div className={styles.main_wrapper}>
                        <img src={heart}/>
                        <div className={styles.motto}> Основная цель - помощь нашим <br></br> братьям меньшим: </div>
                        <div>Животным, попавшим в беду, бездомным, пострадавшим <br></br>
                            от рук человека, нуждающимся в лечении. Фонд активно <br></br>
                            развивается и старается оказывать поддержку <br></br>
                            волонтерам по всему миру.</div>
                        <img src={dog}/>
                        <div className={styles.button_wrapper}>
                            <button>Привязать карту</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

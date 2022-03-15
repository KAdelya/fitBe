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
                        <div className={styles.motto}> Основная цель - помощь нашим братьям меньшим: </div>
                        <div className={styles.text_1}>Животным, попавшим в беду, бездомным, пострадавшим
                            от рук человека, нуждающимся в лечении. Фонд активно
                            развивается и старается оказывать поддержку
                            волонтерам по всему миру.</div>
                        <img src={dog}/>
                        <div className={styles.text_2}>Чтобы у вас была мотивация тренироваться - мы
                            предлагаем вам подписку на благотворительный фонд! Вы
                            сами устанавливаете количество тренировок в неделю, а в
                            случае пропуска - с вашей карты будет списываться
                            установленная вами сумма, которая в последствии
                            поможет кому-то выжить!
                        </div>
                        <div className={styles.button_wrapper}>
                            <button>Привязать карту</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

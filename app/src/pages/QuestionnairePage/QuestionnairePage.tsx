import styles from './QuestionnairePage.module.sass';
import { Questionnaire } from '../../components/Questionnaire/Questionnaire';
import { Icon } from '../../components/Icon/Icon';


export const QuestionnairePage = () => {

    return (
        <div className={styles.questionnaire_page}>
            <div className={styles.questionnaire_page__logo}>
                <Icon name='logo' width={48} height={48} />
                <p>BeFit</p>
            </div>
            <div className={styles.questionnaire_page__title}>
                <h1>First, answer a couple of our questions</h1>
                <Questionnaire />
            </div>
        </div>
    );
};
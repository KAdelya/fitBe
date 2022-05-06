import styles from "./QuestionnairePage.module.sass";
import {FC} from "react";
import {Questionnaire} from "../../components/Questionnaire/Questionnaire";
import { Icon } from "../../components/Icon/Icon";


export const QuestionnairePage = () =>{
    return (
        <div className={styles.main_content_wrap}>
             <div className={styles.logo_wrapper}>
                {/* <Icon name='logo' width={48} height={48} /> */}
                <p>BeFit</p>
            </div>
            <div>
                <h1>First, answer a couple of our questions</h1>
                <Questionnaire />
            </div>
        </div>
    )
}

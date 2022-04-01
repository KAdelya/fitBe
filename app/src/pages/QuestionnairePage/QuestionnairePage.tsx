import styles from "./QuestionnairePage.module.sass";
import {FC, useState} from "react";
import {Questionnaire} from "../../components/Questionnaire/Questionnaire";

interface Props {
    data: any
}

export const QuestionnairePage: FC<Props> = ({data }) =>{
    return (
        <div className={styles.page_content}>
            <div className={styles.page_content_wrapper}>
                <p>Для начала ответьте на пару наших вопросов</p>
                <Questionnaire data={data}/>
            </div>
        </div>
    )
}

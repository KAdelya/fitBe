import styles from "./QuestionnairePage.module.sass";
import {FC, useState} from "react";
import {Questionnaire} from "../../components/Questionnaire/Questionnaire";
import { Icon } from "../../components/Icon/Icon";

interface Props {
    data: any
}

export const QuestionnairePage: FC<Props> = ({data }) =>{
    return (
        <div className={styles.main_content_wrap}>
             <div className={styles.logo_wrapper}>
                <Icon name='logo' width={48} height={48} />
                <p>BeFit</p>
            </div>
            <div>
                <h1>First, answer a couple of our questions</h1>
                <Questionnaire data={data}/>
            </div>
        </div>
    )
}

import styles from "./QuestionnairePage.module.sass";
import {FC, useState} from "react";
import {Questionnaire} from "../../components/Questionnaire/Questionnaire";
import { Icon } from "../../components/Icon/Icon";
import { setUser } from "../../stores/slices/userSlice";
import { ref, set } from "firebase/database";
import { db } from "../..";


export const QuestionnairePage = () =>{
    
    return (
        <div className={styles.questionnaire_page}>
             <div className={styles.questionnaire_page__logo}>
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

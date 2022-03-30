import styles from "../Questionnaire/Questionnaire.module.sass";
import { useState } from "react";
import Button from "../../components/ui/button/button";
import { Icon } from "../../components/Icon/Icon";

export const Questionnaire = () => {
    const [checked, setChecked] = useState(false);
    function changeCheckbox() {
        setChecked(!checked);
    }
    return (
        <div className={styles.main_content_wrap}>
            <div className={styles.logo_wrapper}>
                <Icon name='logo' width={48} height={48} />
                <p>BeFit</p>
            </div>
            <h1>First, answer a couple of our questions</h1>
            <form>
                <div className={styles.question_block_wrapper}>
                    <div className={styles.block_for_question}>
                        <label>Please, enter your gender:</label>
                        <div className={styles.flex_block}>
                            <label>
                                <input type="radio" className="custom-checkbox" checked={checked} onChange={changeCheckbox} />
                                Man
                            </label>
                            <label>
                                <input type="radio" className="custom-checkbox" checked={!checked} onChange={changeCheckbox} />
                                Female
                            </label>
                        </div>
                    </div>
                    <div className={styles.block_for_question}>
                        <label>Your weight (kg)</label>
                        <input />
                    </div>
                    <div className={styles.block_for_question}>
                        <label>Your age:</label>
                        <input />
                    </div>
                    <div className={styles.block_for_question}>
                        <label>Your height (cm):</label>
                        <input />
                    </div>
                    <div className={styles.block_for_question}>
                        <label>Activity</label>
                        <input />
                    </div>
                    <div className={styles.block_for_question}>
                        <label>Desired number of workouts per week</label>
                        <input />
                    </div>
                </div>
                <div className={styles.button_save_content}>
                    <div className={styles.button_wrapper}>
                        <Button text='Save' />
                    </div>
                </div>
            </form>
        </div>
    )
}

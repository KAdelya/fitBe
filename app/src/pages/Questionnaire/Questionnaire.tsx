import styles from "../Questionnaire/Questionnaire.module.sass";
import {useState} from "react";

export const Questionnaire = () => {
    const [checked, setChecked] = useState(false);
    function changeCheckbox() {
        setChecked(!checked);
    }
    return (
        <div className={styles.page_content}>
            <div className={styles.page_content_wrapper}>
                <p>Для начала ответьте на пару наших вопросов</p>
                <form>
                <div className={styles.question_block_wrapper}>
                    <div className={styles.block_for_question}>
                        <label>Укажите ваш пол:</label>
                        <div className={styles.flex_block}>
                            <label>
                                <input type="radio" className="custom-checkbox" checked={checked} onChange={changeCheckbox}/>
                                Мужчина
                            </label>
                            <label>
                                <input type="radio" className="custom-checkbox" checked={!checked} onChange={changeCheckbox}/>
                                Женщина
                            </label>
                        </div>
                    </div>
                    <div className={styles.block_for_question}>
                        <label>Ваш вес (кг)</label>
                        <input />
                    </div>
                    <div className={styles.block_for_question}>
                        <label>Ваш возраст:</label>
                        <input />
                    </div>
                    <div className={styles.block_for_question}>
                        <label>Ваш рост (в см):</label>
                        <input />
                    </div>
                    <div className={styles.block_for_question}>
                        <label>Активность</label>
                        <input />
                    </div>
                    <div className={styles.block_for_question}>
                        <label>Желаемое количество тренировок в неделю</label>
                        <input />
                    </div>
                </div>
                <div className={styles.button_save_content}>
                    <div className={styles.button_wrapper}>
                        <button type='submit'>Сохранить</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

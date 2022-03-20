import styles from "../Questionnaire/Questionnaire.module.sass";

export const Questionnaire = () => {
    return (
        <div className={styles.page_content}>
            <div className={styles.page_content_wrapper}>
                <p>Для начала ответьте на пару наших вопросов</p>
                <div className={styles.question_block_wrapper}>
                    <div className={styles.block_for_question}>
                        <label>Укажите ваш пол:</label>
                        <div className={styles.flex_block}>
                            <label>
                                <input type="radio" className="custom-checkbox" />
                                Мужчина
                            </label>
                            <label>
                                <input type="radio" className="custom-checkbox" />
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
                </div>
                <div className={styles.button_save_content}>
                    <div className={styles.button_wrapper}>
                        <button>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

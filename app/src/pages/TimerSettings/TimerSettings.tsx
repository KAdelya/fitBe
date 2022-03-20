import { Icon } from "../../components/Icon/Icon";
import styles from "../TimerSettings/TimerSettings.module.sass";
import { TimeSettingsBlock } from "../../components/TimeBlock/timeSettingsBlock";

export const TimerSettings = () => {
    return (
        <div className={styles.page_content}>
            <div className={styles.upper_header}>
                <div className={styles.logo_wrapper}>
                    <Icon name="logo" width="85" height="62" />
                    <p>Таймер</p>
                </div>
            </div>
            <div className={styles.content_wrapper}>
                <TimeSettingsBlock type="Подготовка" time={55} />
                <TimeSettingsBlock type="Работа" time={45} />
                <TimeSettingsBlock type="Отдых" time={0} />
                <TimeSettingsBlock type="Циклы" time={0} />
                <TimeSettingsBlock type="Сеты" time={0} />
                <TimeSettingsBlock type="Отдых между сетами" time={0} />
            </div>
            <div className={styles.button_wrapper}>
                <button>Старт</button>
            </div>
        </div>
    )
}

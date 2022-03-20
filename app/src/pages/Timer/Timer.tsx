import { Icon } from "../../components/Icon/Icon";
import { TimeBlock } from "../../components/TimeBlock/timeBlock";
import styles from "../Timer/Timer.module.sass";
import right_arrow from '../../assets/images/arr.svg'
import left_arrow from '../../assets/images/rarr.svg'
import line from '../../assets/images/line.svg'

export const Timer = () => {
    return (
        <div className={styles.page_content}>
            <div className={styles.upper_header}>
                <div className={styles.logo_wrapper}>
                    <Icon name="logo" width="85" height="62" />
                    <p>Таймер</p>
                </div>
            </div>
            <div className={styles.page_content_wrapper}>
                <div className={styles.title_wrapper}>
                    <p>Подготовка</p>
                    <img src={right_arrow} width={40} />
                </div>
                <div className={styles.time_wrapper}>
                    <p>55</p>
                </div>
                <TimeBlock type="Подготовка" time={55} />
                <TimeBlock type="Работа" time={55} />
                <TimeBlock type="Отдых" time={55} />
                <TimeBlock type="Работа" time={55} />
                <TimeBlock type="Отдых" time={55} />
                <TimeBlock type="Работа" time={55} />
                <div className={styles.work_time_block}>
                    <img src={line} width={6.8} />
                    <img src={left_arrow} width={40} />
                    <p>1/5</p>
                    <img src={right_arrow} width={40} />
                    <img src={line} width={6.8} />
                </div>
            </div>
        </div>
    )
}

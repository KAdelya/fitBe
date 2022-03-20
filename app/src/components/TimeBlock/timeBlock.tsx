import { FC } from "react";
import styles from "../TimeBlock/timeBlock.module.sass";

interface Props {
    type: string,
    time: number
}

export const TimeBlock: FC<Props> = ({ type, time }) => {
    return (
        <div className={styles.time_block}>
            {type} : {time}
        </div>
    )
}

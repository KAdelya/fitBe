import { FC } from "react";
import styles from "../TimeBlock/timeBlock.module.sass";
import mines from '../../assets/images/mines.svg'
import plus from '../../assets/images/plus.svg'

interface Props {
    type: string,
    time: number
}

export const TimeSettingsBlock: FC<Props> = ({ type, time }) => {
    return (
        <div className={styles.page_content_wrapper}>
            <div>
                <p>{type}</p>
            </div>
            <div>
                <button>
                    <img src={mines} width={30} className={styles.mines_but} />
                </button>
                <input value={time}/>
                <button>
                    <img src={plus} width={30} />
                </button>
            </div>
        </div>
    )
}

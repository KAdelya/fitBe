import { FC } from "react";
import styles from "../TimeBlock/timeBlock.module.sass";
import mines from '../../assets/images/mines.svg'
import plus from '../../assets/images/plus.svg'

interface Props {
    type: string,
    onChange: any
}

export const TimeSettingsBlock: FC<Props> = ({ type, onChange }) => {
    return (
        <div className={styles.page_content_wrapper}>
            <div>
                <p>{type}</p>
            </div>
            <div>
                <button>
                    <img src={mines} width={30} className={styles.mines_but} />
                </button>
                <input onChange={onChange}/>
                <button>
                    <img src={plus} width={30} />
                </button>
            </div>
        </div>
    )
}

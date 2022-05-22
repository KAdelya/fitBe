import { FC, useState } from 'react';
import CustomButton from '../../ui/button/CustomBtnLayout/CustomBtnLayout';
import styles from '../FoodCard/FoodCard.module.sass'

interface Props {
    title: string;

}
const FoodCard: FC<Props> = ({ title }) => {
    const [visible, setVisible] = useState(false)
    const [text, setText] = useState('')
    const [arr, setArr] = useState(Array<string>());
    const foods: any[] = []
    const handleCreate = (data: string) => {
        arr.push(text)
        setArr(arr)
        console.log(arr)
        setVisible(false)
        setText('')
    };
    return (
        <div className={styles.food_card}>
            <div className={styles.food_card__top}>
                <h3>{title}</h3>
                <div className={styles.food_card__icon}>
                    <button onClick={() => setVisible(!visible)}>
                        <h2>&#43;</h2>
                    </button>
                </div>
            </div>
            <div className={styles.food_card__list}>
                <ul>
                    {arr.map((item) => <li>{item}</li>)}
                </ul>
            </div>
            <div className={styles.food_card__bottom}>
                <div>
                    <pre>34.76</pre>
                </div>
                <div>
                    <pre>34.76</pre>
                </div>
                <div>
                    <pre>34.76</pre>
                </div>
                <div>
                    <pre>34.76</pre>
                </div>
            </div>
            <div className={styles.food_card__input}>
                {visible ?
                    <><input value={text} onChange={((e) => setText(e.target.value))} />
                        <CustomButton>
                            <button onClick={() => handleCreate(text)}>ADD</button>
                        </CustomButton></>
                    : <></>}
            </div>
        </div>
    )
}
export default FoodCard;

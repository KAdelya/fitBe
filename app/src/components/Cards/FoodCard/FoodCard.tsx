import { FC, useState } from 'react';
import { foodItems } from '../../../mocks/foodMock';
import CustomButton from '../../ui/button/CustomBtnLayout/CustomBtnLayout';
import styles from '../FoodCard/FoodCard.module.sass'

interface Props {
    title: string;

}
const FoodCard: FC<Props> = ({ title }) => {
    const [visible, setVisible] = useState(false)
    const [name, setName] = useState('')
    const [weight, setWeight] = useState('')
    const [arr, setArr] = useState([{}]);
    const handleCreate = (name: string, weight: string) => {
        arr.push({
            name: name,
            weight: weight
        })
        setArr(arr)
        compare(name)
        setVisible(false)
        setName('')
        setWeight('')
    };
    let food: Array<object>[];
    const compare = (name: string) => {
        for (let i = 0; i < foodItems.length; i++) {
            if (name == foodItems[i].name) {
                food.push([
                    {
                        name: foodItems[i].name,
                        calories: foodItems[i].calories,
                        carbohydrates: foodItems[i].carbohydrates,
                        fats: foodItems[i].fats,
                        squirrels: foodItems[i].squirrels
                    }])
            }
            else
                console.log(name);
        }
    }
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
                    {/* {food.map((item: any) => <li>{item.name},
                    {item.calories} {item.fats}</li>)} */}
                </ul>
            </div>
            <div className={styles.food_card__bottom}>
                <div>
                    {/* <pre>34.76</pre> */}
                </div>
                <div>
                    {/* <pre>34.76</pre> */}
                </div>
                <div>
                    {/* <pre>34.76</pre> */}
                </div>
                <div>
                    {/* <pre>34.76</pre> */}
                </div>
            </div>
            <div className={styles.food_card__input}>
                {visible ?
                    <>
                        <h2>Title:</h2>
                        <input value={name} onChange={((e) => setName(e.target.value))} />
                        <h2>Weight:</h2>
                        <input value={weight} onChange={((e) => setWeight(e.target.value))} />
                        <CustomButton>
                            <button onClick={() => handleCreate(name, weight)}>ADD</button>
                        </CustomButton></>
                    : <></>}
            </div>
        </div>
    )
}
export default FoodCard;



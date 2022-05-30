import { FC, useState } from 'react';
import { foodItems } from '../../../mocks/foodMock';
import { ITitle } from '../../../models/ITitle';
import { setCalories } from '../../../redux/slices/caloriesSlice';
import { addFoodItem } from '../../../redux/slices/foodCounterSlice';
import { useAppDispatch, useAppSelector } from '../../../utils/redux-hooks';
import CustomButton from '../../ui/button/CustomBtnLayout/CustomBtnLayout';
import styles from '../FoodCard/FoodCard.module.sass';

const FoodCard: FC<ITitle> = ({ title }) => {
    const dispatch = useAppDispatch();
    const foodList = useAppSelector(state => state.foodCounter);
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');

    const handleCreated = (name: string, weight: string) => {
        setVisible(false);
        for (let i = 0; i < foodItems.length; i++) {
            if (name === foodItems[i].name) {
                dispatch(addFoodItem
                    ({
                        name: foodItems[i].name,
                        calories: Math.round((foodItems[i].calories) / 100 * parseFloat(weight)),
                        carbohydrates: Math.round((foodItems[i].carbohydrates) / 100 * parseFloat(weight)),
                        fats: Math.round((foodItems[i].fats) / 100 * parseFloat(weight)),
                        squirrels: Math.round((foodItems[i].squirrels) / 100 * parseFloat(weight))
                    }));
                    dispatch(setCalories({
                        calories: Math.round((foodItems[i].calories) / 100 * parseFloat(weight)),
                        carbohydrates: Math.round((foodItems[i].carbohydrates) / 100 * parseFloat(weight)),
                        fats: Math.round((foodItems[i].fats) / 100 * parseFloat(weight)),
                        squirrels: Math.round((foodItems[i].squirrels) / 100 * parseFloat(weight))
                    }));
                    setName('');
                    setWeight('');
            }
            else 
                setName('');
                setWeight('');
        };
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
                        {foodList.map((item: any, index) => (
                            <li key={index}>
                                <h3>{item.name}</h3>
                                <div className={styles.food_card__list__item}>
                                    <pre>{item.fats}</pre>
                                    <pre>{item.carbohydrates}</pre>
                                    <pre>{item.squirrels}</pre>
                                    <pre>{item.calories}</pre>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.food_card__input}>
                    {visible ?
                        <>
                            <h2>Title:</h2>
                            <input 
                                type="text"
                                value={name} 
                                onChange={(e) => setName(e.target.value)} />
                            <h2>Weight:</h2>
                            <input 
                                type="number"
                                value={weight} 
                                onChange={(e) => setWeight(e.target.value)} />
                            <CustomButton>
                                <button onClick={() => handleCreated(name, weight)}>ADD</button>
                            </CustomButton></>
                        : <></>}
                </div>
            </div>
        );
    };
    export default FoodCard;



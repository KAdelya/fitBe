import styles from '../WaterCard/WaterCard.module.sass';
import CustomButton from '../../ui/button/CustomBtnLayout/CustomBtnLayout';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../utils/redux-hooks';
import { setWaterCount } from '../../../redux/slices/WaterCounterSlice';


const WaterCard = () => {
    const dispatch = useAppDispatch();
    const [visible, setVisible] = useState(false);
    const [water, setWater] = useState('');
    const { waterCounter } = useAppSelector(state => state.waterCounter);

    const handleClick = () => {
        setVisible(!visible);
        dispatch(
            setWaterCount({
                waterCounter: parseFloat(water),
            })
        );
        setWater('');
    };
    
    return (
        <div className={styles.water_card}>
            <div className={styles.water_card__top}>
                <h3>Water tracker</h3>
                <pre>{waterCounter}</pre>
                <div className={styles.water_card__icon}>
                    <button onClick={() => setVisible(!visible)}>
                        <h2>&#43;</h2>
                    </button>
                </div>
            </div>
            <div className={styles.water_card__input}>
                {visible ?
                    <>
                        <h2>Number(ml):</h2>
                        <input 
                            value={water}
                            type="number"
                            onChange={(e) => setWater(e.target.value)} />
                        <CustomButton>
                            <button onClick={() => handleClick()}>ADD</button>
                        </CustomButton></>
                    : <></>}
            </div>
        </div>
    );
};
export default WaterCard;




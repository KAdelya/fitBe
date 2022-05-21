import { Icon } from '../../components/Icon/Icon';
import styles from '../Calculator/Calculator.module.sass'
import { useState } from 'react';
import CustomButton from '../../components/ui/button/CustomBtnLayout/CustomBtnLayout';
import FoodService from '../../services/food.service'
const Calculator = () => {
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
    FoodService.getFood().then(res => {
        console.log(res.data)
        // setExercise(res.data.results)
    }).catch(err => {
        console.log(err)
    })

    // FoodService.getFoofInfo().then(res => {
    //     console.log(res.data.results)
    //     // setImage(res.data.results)
    // }).catch(err => {
    //     console.log(err)
    // })
    return (
        <div>
            <section className={styles.calculator_page}>
                <h1>Today</h1>
                <div className={styles.calculator_page__block}>
                    <div>
                        <p>Fats</p>
                        <pre>34.76</pre>
                    </div>
                    <div>
                        <p>Carbohydrates</p>
                        <pre>34.76</pre>
                    </div>
                    <div>
                        <p>Squirrels</p>
                        <pre>34.76</pre>
                    </div>
                    <div>
                        <p>Calories</p>
                        <pre>34.76</pre>
                    </div>
                </div>

                <div className={styles.calculator_page__food}>
                    <div className={styles.calculator_page__food__top}>
                        <h3>Breakfast</h3>

                        <div className={styles.calculator_page__food__icon}>
                            <button onClick={() => setVisible(!visible)}>
                                <Icon name="plus" width="50" height="42" />
                            </button>
                        </div>
                    </div>
                    <div className={styles.calculator_page__food__list}>
                        <ul>
                            {arr.map((item) => <li>{item}</li>)}
                        </ul>
                    </div>
                    <div className={styles.calculator_page__food__bottom}>
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

                    <div className={styles.calculator_page__food__input}>
                        {visible ?
                            <><input value={text} onChange={((e) => setText(e.target.value))} />
                                <CustomButton>
                                    <button onClick={() => handleCreate(text)}>ADD</button>
                                </CustomButton></>
                            : <></>}
                    </div>
                </div>

                <div className={styles.calculator_page__food}>
                    <div className={styles.calculator_page__food__top}>
                        <h3>Lunch</h3>
                        <div className={styles.calculator_page__food__icon}>
                            <Icon name="plus" width="50" height="42" />
                        </div>
                    </div>
                    <div className={styles.calculator_page__food__bottom}>
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
                </div>

                <div className={styles.calculator_page__food}>
                    <div className={styles.calculator_page__food__top}>
                        <h3>Dinner</h3>
                        <div className={styles.calculator_page__food__icon}>
                            <Icon name="plus" width="50" height="42" />
                        </div>
                    </div>
                    <div className={styles.calculator_page__food__bottom}>
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
                </div>

                <div className={styles.calculator_page__food}>
                    <div className={styles.calculator_page__food__top}>
                        <h3>Snack/Other</h3>
                        <div className={styles.calculator_page__food__icon}>
                            <Icon name="plus" width="50" height="42" />
                        </div>
                    </div>
                </div>

                <div className={styles.calculator_page__food}>
                    <div className={styles.calculator_page__food__top}>
                        <h3>Water tracker</h3>
                        <div className={styles.calculator_page__food__icon}>
                            <Icon name="plus" width="50" height="42" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Calculator
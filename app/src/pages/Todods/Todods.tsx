import styles from '../Todods/Todods.module.sass';
import { useState } from 'react';
import MainCustomBtn from '../../components/ui/button/ButtonLayout/ButtonLayout';
import { useAppSelector } from '../../utils/redux-hooks';
import { addTodo, markTodo, removeTodo } from '../../redux/slices/todosSlice';
import { useDispatch } from 'react-redux';

const Todods = () => {
    const [text, setText] = useState('');
    const [visible, setVisible] = useState(false);
    const todoList = useAppSelector(state => state.todoList);

    const dispatch = useDispatch();
    const handleCreate = (value: string) => {
        setVisible(false);
        setText('');
        if (!value)
            return;
        dispatch(addTodo({
            title: text
        }));
    };
    return (
        <div>
            <section className={styles.todos_page}>
                <div className={styles.todos_page__content}>
                    <div className={styles.todos_page__content__buttons}>
                        <div className={styles.todos_page__content__date}>
                            <div className={styles.content}>
                                <p>{new Date().toDateString()}</p>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={() => setVisible(!visible)}>&#43;</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.todo_notice}>
                {todoList.map((todo: any, index) => (
                    <div className={styles.todo} key={index}>
                        <div className={styles.todo__content}>
                            <h4 style={{ textDecoration: todo.completed ? 'line-through' : '' }}>{todo.title}</h4>
                            <div>
                                <MainCustomBtn>
                                    <button onClick={() => dispatch(markTodo({ index: index }))}>&#10004;</button>
                                    <button onClick={() => dispatch(removeTodo({ index: index }))}>&#10008;</button>
                                </MainCustomBtn>
                            </div>
                        </div>
                    </div>
                ))}
                <div className={styles.todo_notice__input}>
                    {visible ?
                        <div className={styles.todo_notice__input__visible}>
                            <input value={text} onChange={((e) => setText(e.target.value))} />
                            <MainCustomBtn>
                                <button onClick={() => handleCreate(text)}>ADD</button>
                            </MainCustomBtn>
                        </div> : <></>}
                </div>
            </section>
        </div>
    );
};

export default Todods;
import styles from '../Todods/Todods.module.sass';
import plus from '../../assets/images/butPlus.svg';
import prev from '../../assets/images/butprev.svg';
import { useState } from 'react';
import MainCustomBtn from '../../components/ui/button/ButtonLayout/ButtonLayout';

interface Todo {
    title: string;
    date: string;
    completed: boolean;
}

const Todods = () => {
    const [text, setText] = useState('');
    const [visible, setVisible] = useState(false);
    const [todos, setTodos] = useState<Array<Todo>>([]);
    const handleCreate = (title: string) => {
        setVisible(false);
        setText('');
        todos.push({
            title: title,
            date: new Date().toDateString(),
            completed: false
        });
        setTodos(todos);
    };


    return (
        <div>
            <section className={styles.todos_page}>
                <div className={styles.todos_page__content}>
                    <div className={styles.todos_page__content__buttons}>
                        <div className={styles.buttons}>
                            <button>&#60;</button>
                        </div>
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
                {todos.map((todo: any) => (
                    <div>
                        <pre>{todo.title}, {todo.date}</pre>
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
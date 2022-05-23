import styles from '../Todods/Todods.module.sass';
import plus from '../../assets/images/butPlus.svg';
import prev from '../../assets/images/butprev.svg';
import { useState } from 'react';

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
        console.log(todos);

    };


    return (
        <div>
            <section className={styles.todos_page}>
                <div className={styles.todos_page__content}>
                    <div className={styles.todos_page__content__buttons}>
                        <div className={styles.buttons}>
                            <button>
                                <img src={prev} width={13} alt='prev' />
                            </button>
                        </div>
                        <div className={styles.todos_page__content__date}>
                            <div className={styles.content}>
                                <p> date</p>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={() => setVisible(!visible)}>
                                <img src={plus} width={20} alt='next' />
                            </button>
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
                        <><input value={text} onChange={((e) => setText(e.target.value))} />
                            <button onClick={() => handleCreate(text)}>add task</button></> : <></>}
                </div>
            </section>
        </div>
    );
};

export default Todods;
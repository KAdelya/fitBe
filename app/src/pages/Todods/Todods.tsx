import styles from '../Todods/Todods.module.sass';
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
    const handleCreate = (value: string) => {
        setVisible(false);
        setText('');
        if (!value) return;
        addTodo(value);
    };
    const addTodo = (text: string) => {
        const newTodos = [...todos, { title: text, date: new Date().toDateString(), completed: false}];
        setTodos(newTodos);
    };
    const markTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos[index].completed = true;
        setTodos(newTodos);
    };
    const removeTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    return (
        <div>
            <section className={styles.todos_page}>
                <div className={styles.todos_page__content}>
                    <div className={styles.todos_page__content__buttons}>
                        <div className={styles.buttons}>
                            <button>&lsaquo;</button>
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
                {todos.map((todo: any, index) => (
                    <div className={styles.todo} key={index}>
                        <div className={styles.todo__content}>
                            <h4 style={{ textDecoration: todo.completed ? 'line-through' : '' }}>{todo.title}</h4>
                            <div>
                                <MainCustomBtn>
                                    <button onClick={() => markTodo(index)}>&#10004;</button>
                                    <button onClick={() => removeTodo(index)}>&#10008;</button>
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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/slices";
import { addTask, removeTask } from "../../stores/slices/todoSlice";


const Test = () => {
  const [text, setText] = useState('')
    const { tasks } = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();
  
    const handleCreate = (data: string) => {
      dispatch(addTask(data));
      setText('')
    };
    const handleRemove = (id: number) => {
      dispatch(removeTask(id));
    };
  
    return (
      <div >
        {tasks.map((task) => (
          <div>
            <pre>{task.id} - {task.title}</pre>
            <button onClick={() =>handleRemove(task.id)} style={{color: 'red'}}>&times;</button>
          </div>

        ))}

      <input value={text} onChange={((e) => setText(e.target.value))}/>
      <button onClick={() => handleCreate(text)}>add tasky</button>
      </div>
    );
  };

export default Test;
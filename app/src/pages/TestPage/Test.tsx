import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/slices";
import { addTask } from "../../stores/slices/todoSlice";


const Test = () => {
  const [text, setText] = useState('')
    const { tasks } = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();
  
    const handleCreate = (data: string) => {
      dispatch(addTask(data));
    };
  
  
    return (
      <div >
        {tasks.map((task) => (
        <div>{task.title}</div>
      ))}

      <input value={text} onChange={((e) => setText(e.target.value))}/>
      <button onClick={() => handleCreate(text)}>add tasky</button>
      </div>
    );
  };

export default Test;
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/slices";
import { addTask } from "../../stores/slices/todoSlice";
import TaskItem from "./TaskItem";

type Inputs = {
    taskTitle: string;
  };
  
  type PropTypes = {
    edit?: boolean;
  };
const Test = () => {
    const { tasks } = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();
  
    const handleCreate = (data: Inputs) => {
      dispatch(addTask(data.taskTitle));
    };
  
  
    return (
      <div >
        {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      </div>
    );
  };

export default Test;
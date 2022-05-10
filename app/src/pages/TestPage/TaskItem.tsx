import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../stores/slices';
import { addTask, removeTask } from '../../stores/slices/todoSlice';

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropTypes> = ({ task }) => {
  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(addTask(task));
  };
  return (
    <div>
      <div>
        <div>{task.title}</div>
      </div>
      <div>
        {/* <input
        type='checkbox'
          checked={task.completed}
          onClick={() => dispatch(completeTask(task))}
          className={styles.checkbox}
        /> */}
        <button onClick={handleOpen}>
          add
        </button>
        <button
          onClick={() => dispatch(removeTask(task))}
        >
          delete
        </button>
      </div>
        <div>
          <div>Edit Task Title</div>
        </div>
    </div>
  );
};

export default TaskItem;

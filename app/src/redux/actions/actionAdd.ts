import { ADD_TASK } from "../../constants";

const addTask = (id: any, text: any, date: any) => ({
    type: ADD_TASK,
    id,
    text,
    date
})
export default addTask;
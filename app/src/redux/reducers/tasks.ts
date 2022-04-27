import { ADD_TASK } from "../../constants";

const TASKS = [
    { id: 1, text: 'Something', date: 'today' },
    { id: 2, text: 'Something else', date: 'today' },
    { id: 3, text: 'Training', date: 'today' },
]

const tasks = (state = TASKS, action: any) => {
    switch(action.type){
        case ADD_TASK :
            return [...state, {
                id: action.id,
                text: action.text,
                date : action.date
            }];
        default: return state;
    }
}

export default tasks;
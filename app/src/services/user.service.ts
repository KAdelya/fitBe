import {  ref, set } from 'firebase/database';
import { db } from '..';


export const CreateUser = (id: any, email: any, 
    name: any, surname: any) => {
    return set(ref(db, `/${id}`), {
        user: {
            email: email,
            name: name,
            surname: surname
        },
        info: {
            spendingHours: 0,
            waterCount: 0,
        },
        weight: {
            currentWeight: 0
        },
        calories: 0,
        todoList: 0,
    });
};

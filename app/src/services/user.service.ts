import {  ref, set } from 'firebase/database';
import { db } from '..';

export const CreateUser = (id: any, email: any, 
    name: any, surname: any, startWeight: any, desiredWeight: any) => {
    return set(ref(db, `/${id}`), {
        user: {
            email: email,
            name: name,
            surname: surname
        },
        info: {
            spendingHours: 0,
        },
        weight: {
            startWeight: startWeight,
            currentWeight: startWeight,
            desiredWeight: desiredWeight,
        }
    });
};

import { onValue, ref, set } from 'firebase/database';
import { useState } from 'react';
import { db } from '..';
import { setUser } from '../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../utils/redux-hooks';


export const CreateUser = (id: any, email: any, 
    name: any, surname: any) => {
    return set(ref(db, `/${id}`), {
        user: {
            email: email,
            name: name,
            surname: surname
        },
        info: {
            // avatar: form.avatar,
            spendingHours: 0,
            waterCount: 0,
        },
        weight: 0,
        calories: 0
    });
};

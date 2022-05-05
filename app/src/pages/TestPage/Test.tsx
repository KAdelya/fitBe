import { child, get, onValue, ref, remove, set, update } from 'firebase/database';
import { snapshotEqual } from 'firebase/firestore';
import React, { useRef, useState } from 'react'
import { uid } from 'uid';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../..';

const Test = () => {
    const emailRef: any = useRef();
    const passwordRef: any = useRef();
    const records: any = []
    const [state, setState] = useState(records);
    const [todo, setTodo] = useState('');
    const [user, setUser] = useState({
        user: {
            email: '',
            name: '',
            surname: ''
        },
        info: {
            avatar: '',
            gender: '',
            spendingHours: '',
            water: ''
        },
        tracker: '',
        calories: ''
    });

    const handleToDoChange = (e: any) => {
        setUser(e.target.value);
    }
    /// this is for writing into db
    const writeToDataBase = () => {
        const uuid = uid();
        set(ref(db, `/${uuid}`), {
            todo,
            uuid
        });
        setTodo('')
    }
    const createUser = () => {
        const uuid = uid();
        set(ref(db, `/${uuid}`), {
            user: {
                email: '',
                ip: uuid,
                name: '',
                surname: ''
            },
            info: {
                avatar: '',
                gender: '',
                spendingHours: '',
                water: ''
            },
            tracker: '',
            calories: ''
        });
    }
    /// this is for updating db
    const updateInDataBase = () => {
        const uuid = uid();
        update(ref(db, `/${uuid}`), {
            todo,
            uuid
        }).then(() => { alert('update successfully') })
            .catch((error) => { alert('sorry :(' + error) })
    }

    const deleteFromDataBase = () => {
        const uuid = uid();
        remove(ref(db, `/${uuid}`))
            .then(() => { alert('delete successfully') })
            .catch((error) => { alert('sorry :(' + error) })
    }

    const getInfoFromDataBase = () => {
        const dbRef = (ref(db, `efceb0a27c3`))
        onValue(dbRef, (snapshot) => {
            let records: any[] = []
            snapshot.forEach(childSnapshot => {
                let data = childSnapshot.val()
                setState(records.push(data));
            });
            setState(records)
        })
    }

    const signUp = (email: any, password: any) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    async function handleSignup() {
        await signUp(emailRef.current.value, passwordRef.current.value)
    }
    return (
        <div>
            Test page works!
        </div>

    )
}

export default Test;
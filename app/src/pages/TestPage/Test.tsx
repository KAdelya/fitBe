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

    let [newEmail, setNewEmail] = useState('')
    let [newName, setNewName] = useState('');
    let [newSurname, setNewSurname] = useState('');
    let [newAvatar, setNewAvatar] = useState('');
    let [newSpendingHours, setNewSpendingHours] = useState('');
    let [newWaterCount, setWaterCount] = useState('');
    let [newTracker, setNewTracker] = useState('');
    let [newCalories, setNewCalories] = useState('');

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
    const createUser = () => {
        const uuid = uid();
        set(ref(db, `/${uuid}`), {
            user: {
                email: newEmail,
                ip: uuid,
                name: newName,
                surname: newSurname
            },
            info: {
                avatar: newAvatar,
                spendingHours: newSpendingHours,
                waterCount: newWaterCount
            },
            tracker: newTracker,
            calories: newCalories
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
            <input placeholder='email' onChange={(event) => { setNewEmail( event.target.value) }}/>
            <input placeholder='calories' onChange={(event) => { setNewCalories( event.target.value) }}/>
            <button onClick={createUser}>submit</button>
        </div>

    )
}

export default Test;
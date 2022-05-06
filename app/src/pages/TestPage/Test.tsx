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

    let [newEmail, setNewEmail] = useState('')
    let [newName, setNewName] = useState('');
    let [newSurname, setNewSurname] = useState('');
    let [newAvatar, setNewAvatar] = useState('');
    let [newSpendingHours, setNewSpendingHours] = useState('');
    let [newWaterCount, setWaterCount] = useState('');
    let [newTracker, setNewTracker] = useState('');
    let [newCalories, setNewCalories] = useState('');
    let [result, setResult] = useState([])
    

    /// this is for writing into db
    async function createUser() {
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
    async function updateInDataBase(uuid: string) {
        update(ref(db, `/${uuid}`), {
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
        }).then(() => { alert('update successfully') })
            .catch((error) => { alert('sorry :(' + error) })
    }

    async function deleteFromDataBase(uuid: string) {
        remove(ref(db, `/${uuid}`))
            .then(() => { alert('delete successfully') })
            .catch((error) => { alert('sorry :(' + error) })
    }

    const getInfoFromDataBase = (uuid: string) => {
        const dbRef = (ref(db, `/${uuid}`))
        onValue(dbRef, (snapshot) => {
            result = snapshot.val().user.email
        })
        setResult(result)
    }

    const signUp = (email: any, password: any) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    async function handleSignup() {
        await signUp(emailRef.current.value, passwordRef.current.value)
    }
    return (
        <div>
            <div><input placeholder='email' onChange={(event) => { setNewEmail( event.target.value) }}/></div>
            <div><input placeholder='name' onChange={(event) => { setNewName(event.target.value) }}/></div>
            <div><input placeholder='surname' onChange={(event) => { setNewSurname( event.target.value) }}/></div>
            <div><input placeholder='calories' onChange={(event) => { setNewCalories( event.target.value) }}/></div>
            <button onClick={() => getInfoFromDataBase('4a1f2c66520')}>submit</button>
            
        </div>

    )
}

export default Test;
import { child, get, onValue, ref, remove, set, update } from 'firebase/database';
import { snapshotEqual } from 'firebase/firestore';
import React, { useState } from 'react'
import { uid } from 'uid';
import { db } from '../..';

const Test = () => {
    const records: any = []
    const [state,setState] = useState(records);
    const [todo, setTodo] = useState('');
    const handleToDoChange = (e: any) => {
        setTodo(e.target.value);
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

    return (
        <div>
            Test page works!
            <input type='text' value={todo} onChange={handleToDoChange} />
            <button onClick={getInfoFromDataBase}>click here</button>
            <div>{state[0]}</div>
            <div>{state[1]}</div>
            <div>{state[2]}</div>
        </div>

    )
}

export default Test;
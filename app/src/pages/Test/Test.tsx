import { useState } from 'react';
import { setUser } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';


const Test = () => {

  // const dispatch = useAppDispatch();
  // const {userName, userSurname} = useAppSelector(state => state.user);
  // const [form, setForm] = useState({
  //   token: '',
  //   id: '',
  //   userEmail: '',
  //   userName:  '',
  //   userSurname: '',
  //   avatar: '',
  //   weight: '',
  // });

  
  // const submit = (e: any) => {
  //   e.preventDefault();
  //   dispatch(setUser({
  //     userName: form.userName,
  //     userSurname: form.userSurname,
  //   }));

  // };

  // const update = (e: any) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value
  //   });
  // };

  return (
    <>
    {/* <form onSubmit={submit}>
      <label>
       Имя:
        <input
          value={form.userName}
          name="userName"
          onChange={update}
        />
      </label>
      
    <label>
        Пароль:
        <input
          value={form.userSurname}
          name="userSurname"
          onChange={update}
        />
      </label>

      <button>Отправить</button>
    </form>
    
    <button onClick={() => console.log(userName, userSurname)}>check</button> */}
    text
    </>
  );
};


 export default Test;
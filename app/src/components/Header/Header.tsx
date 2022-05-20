import {FC, useState} from 'react';
import {NavLink, Route, useNavigate, useParams} from 'react-router-dom';
import styles from '../Header/Header.module.sass'
import {Icon} from '../Icon/Icon';
import Menu from '../Menu/Menu';
import menuBut from '../../assets/images/men.svg';
import {useDispatch} from 'react-redux';
import {removeUser} from '../../stores/slices/userSlice';
import {useAuth} from '../../utils/use-auth';
import {RegistrationPage} from '../../pages/RegistrationPage/RegistrationPage';
import {useAppDispatch} from '../../utils/redux-hooks';
import CustomButton from '../ui/button/CustomBtnLayout/CustomBtnLayout';

interface Props {
}

const Header: FC<Props> = ({children}) => {
    const {isAuth, id} = useAuth();
    const navigate = useNavigate();
    let {name} = useParams();
    const items = [
        // { value: 'Timer', href: `/timer/:id${id}` },
        // { value: 'Workout', href: `/training/:id${id}` },
        // { value: 'Diary', href: `/calculator/:id${id}` },
        // { value: 'Tracker', href: `/track/:id${id}` }
        {value: 'Timer', href: `/timer`},
        {value: 'Workout', href: `/training`},
        {value: 'Diary', href: `/calculator`},
        {value: 'Tracker', href: `/track/`}
    ];
    const [menuActive, setMenuActive] = useState(false);
    const dispatch = useAppDispatch()
    const signOut = () => {
        dispatch(removeUser());
        navigate(`/`, {replace: true})
    }
    return (
        <>
            <header>
                {/* <button className={styles.menu_button} onClick={() => setMenuActive(!menuActive)}>
                <img src={menuBut} />
            </button> */}
                <div className={styles.navigate_btn}>
                    <button onClick={() => navigate('/user')}>&#8592;</button>
                </div>

                {/* <NavLink to='/user'>
                <div className={styles.logo_wrapper}>
                    <Icon name='logo' width={48} height={48} />
                    <p>BeFit</p>
                </div>
            </NavLink> */}
                <nav className={styles.navbar}>
                    <ul>
                        <li><NavLink to={`/timer`}>Timer</NavLink></li>
                        <li><NavLink to={`/training`}>Workout</NavLink></li>
                        <li><NavLink to={`/calculator`}>Diary</NavLink></li>
                        <li><NavLink to={`/todods`}>Tracker</NavLink></li>
                    </ul>
                </nav>
                <div className={styles.button_wrapper}>
                    <CustomButton>
                        <button onClick={() => signOut()}>SIGN OUT</button>
                    </CustomButton>

                </div>
                {/* <div className={styles.menu}>
                <NavLink to='/user'>
                    <div className={styles.logo}>
                        <Icon name='logo' width={48} height={48} />
                        <p>BeFit</p>
                    </div>
                </NavLink>
                <Menu items={items} active={menuActive} setActive={setMenuActive} />
            </div> */}
            </header>
            <div>{children}</div>
        </>
    )
}

export default Header;
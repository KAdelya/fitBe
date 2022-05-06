import { useState } from 'react';
import { NavLink, Route, useNavigate, useParams } from 'react-router-dom';
import styles from '../Header/Header.module.sass'
import { Icon } from '../Icon/Icon';
import Menu from '../Menu/Menu';
import menuBut from '../../assets/images/men.svg';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../stores/slices/userSlice';
import { useAuth } from '../../utils/use-auth';
import { RegistrationPage } from '../../pages/RegistrationPage/RegistrationPage';


const Header = () => {
    const { isAuth, id } = useAuth();
    const navigate = useNavigate();
    let { name } = useParams();
    const items = [
        { value: 'Timer', href: `/timer/:id${id}` },
        { value: 'Workout', href: `/training/:id${id}` },
        { value: 'Diary', href: `/calculator/:id${id}` },
        { value: 'Tracker', href: `/track/:id${id}` }
    ];
    const [menuActive, setMenuActive] = useState(false);
    const dispatch = useDispatch()
    return isAuth ?
        (
            <header>
                <button className={styles.menu_button} onClick={() => setMenuActive(!menuActive)}>
                    <img src={menuBut} />
                </button>

                {/* <NavLink to='/user'>
                <div className={styles.logo_wrapper}>
                    <Icon name='logo' width={48} height={48} />
                    <p>BeFit</p>
                </div>
            </NavLink> */}
                <nav className={styles.navbar}>
                    <ul>
                        <li><NavLink to={`/timer/id_${id}`}>Timer</NavLink></li>
                        <li><NavLink to={`/training/id_${id}`}>Workout</NavLink></li>
                        <li><NavLink to={`/calculator/id_${id}`}>Diary</NavLink></li>
                        <li><NavLink to={`/tracker/id_${id}`}>Tracker</NavLink></li>
                    </ul>
                </nav>
                <div className={styles.button_wrapper}>
                    <button onClick={() => dispatch(removeUser())}>SIGN OUT</button>

                </div>
                <div className={styles.menu}>
                    <NavLink to='/user'>
                        <div className={styles.logo}>
                            <Icon name='logo' width={48} height={48} />
                            <p>BeFit</p>
                        </div>
                    </NavLink>
                    <Menu items={items} active={menuActive} setActive={setMenuActive} />
                </div>
            </header>
        )
        :
        (
           <>
           {navigate('/registration')}
           </>
        )

}

export default Header;
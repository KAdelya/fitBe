import { FC, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../Header/Header.module.sass';
import Menu from '../Menu/Menu';
import menuBut from '../../assets/images/men.svg';
import { removeUser } from '../../redux/slices/userSlice';
import CustomButton from '../ui/button/CustomBtnLayout/CustomBtnLayout';
import { useAppDispatch } from '../../utils/redux-hooks';

interface Props { }

const Header: FC<Props> = ({ children }) => {
    const navigate = useNavigate();
    const items = [
        { value: 'Profile', href: '/user' },
        { value: 'Timer', href: '/timer' },
        { value: 'Workout', href: '/training' },
        { value: 'Diary', href: '/calculator' },
        { value: 'Tracker', href: '/todods/' }
    ];
    const [menuActive, setMenuActive] = useState(false);
    const dispatch = useAppDispatch();
    const signOut = () => {
        dispatch(removeUser());
        navigate('/', { replace: true });
    };
    return (
        <>
            <header className={styles.header_wrapper}>
                <div className={styles.header}>
                    <button className={styles.header__menu_button} onClick={() => setMenuActive(!menuActive)}>
                        <img src={menuBut} alt='menu'/>
                    </button>
                    <div className={styles.header__navigate_button}>
                        <button onClick={() => navigate('/user')}>&#8592;</button>
                    </div>
                    <nav className={styles.header__navbar}>
                        <ul>
                            <li><NavLink to={'/timer'}>Timer</NavLink></li>
                            <li><NavLink to={'/training'}>Workout</NavLink></li>
                            <li><NavLink to={'/calculator'}>Diary</NavLink></li>
                            <li><NavLink to={'/todods'}>Tracker</NavLink></li>
                        </ul>
                    </nav>
                    <div className={styles.header__button}>
                        <CustomButton>
                            <button onClick={() => signOut()}>SIGN OUT</button>
                        </CustomButton>
                    </div>
                    <div className={styles.menu}>
                        <Menu items={items} active={menuActive} setActive={setMenuActive} />
                    </div>
                </div>
            </header>
            <div>{children}</div>
        </>
    );
};

export default Header;
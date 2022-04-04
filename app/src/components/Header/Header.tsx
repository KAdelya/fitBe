import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header/Header.module.sass'
import { Icon } from '../Icon/Icon';
import Menu from '../Menu/Menu';
import Button from '../ui/button/button';
import menuBut from '../../assets/images/men.svg';


const Header = () => {
    const items = [
        { value: 'Timer', href: '/timer' },
        { value: 'Workout', href: '/training' },
        { value: 'Diary', href: '/calculator' },
        { value: 'Tracker', href: '/tracker' }
    ];
    const [menuActive, setMenuActive] = useState(false);
    return (
        <header>
            <NavLink to='/user'>
                <div className={styles.logo_wrapper}>
                    <Icon name='logo' width={48} height={48} />
                    <p>BeFit</p>
                </div>
            </NavLink>
            <nav className={styles.navbar_wrapper}>
                <ul>
                    <li><NavLink to='/timer'>Timer</NavLink></li>
                    <li><NavLink to='/training'>Workout</NavLink></li>
                    <li><NavLink to='/calculator'>Diary</NavLink></li>
                    <li><NavLink to='/tracker'>Tracker</NavLink></li>
                </ul>
            </nav>
            <div className={styles.button_wrapper}>
                <NavLink to='/'>
                    {/* <Button text='SIGN OUT' /> */}
                </NavLink>
                {/* <button className={styles.menu_button}>
                    <img src={menuBut} />
                </button> */}
            </div>
            <div className={styles.menu_wrapper}>
                <Menu items={items} active={menuActive} setActive={setMenuActive}/>
            </div>
        </header>
    )
}

export default Header;
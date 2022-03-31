import { NavLink } from 'react-router-dom';
import styles from '../Header/Header.module.sass'
import { Icon } from '../Icon/Icon';
import Button from '../ui/button/button';


{/* <li><NavLink className={({ isActive }) => `${styles.location_link}` + (isActive ? " activated" : null)} to='/'>Главная</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${styles.location_link}` + (isActive ? " activated" : null)} to='/points'>Пункты сбора</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${styles.location_link}` + (isActive ? " activated" : null)} to='/ecomarket'>ЭкоМаркет</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${styles.location_link}` + (isActive ? " activated" : null)} to='/services'>О сервисе</NavLink></li> */}
const Header = () => {
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
                    <li><NavLink to=''>Tracker</NavLink></li>
                </ul>
            </nav>
            <div className={styles.button_wrapper}>
                <Button text='SIGN OUT' />
            </div>
        </header>
    )
}

export default Header;

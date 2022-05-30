import { FC, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../Header/Header.module.sass';
import Menu from '../Menu/Menu';
import menuBut from '../../assets/images/men.svg';
import CustomButton from '../ui/button/CustomBtnLayout/CustomBtnLayout';
import { useAppDispatch, useAppSelector } from '../../utils/redux-hooks';
import Toggle from '../Toggle/Toggle';
import styled, { ThemeProvider } from 'styled-components';
import { removeUser } from '../../redux/slices/userSlice';
import { removeWater } from '../../redux/slices/WaterCounterSlice';
import { deleteTodos} from '../../redux/slices/todosSlice';
import { deleteFoodItems } from '../../redux/slices/foodCounterSlice';


interface Props { }

const Content = styled.div`
  transition: all 0.50s linear;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
`;

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
    const theme = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch();
    const signOut = () => {
        dispatch(removeUser());
        dispatch(removeWater());
        dispatch(deleteTodos());
        dispatch(deleteFoodItems());
        navigate('/', { replace: true });
    };

    return (
        <ThemeProvider theme={theme}>
            <Content>
                <header className={styles.header_wrapper}>
                    <div className={styles.header}>
                        <button className={styles.header__menu_button} onClick={() => setMenuActive(!menuActive)}>
                            <img src={menuBut} alt='menu' />
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
                        <div className={styles.header__toggle}>
                            <Toggle  />
                        </div>
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
            </Content>
            <div>{children}</div>
        </ThemeProvider>
    );
};

export default Header;
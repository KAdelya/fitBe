import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MenuWrapper } from '../../constants';
import { IMenu } from '../../models/IMenu';
import { useAppSelector } from '../../utils/redux-hooks';
import styles from '../Menu/Menu.module.sass';
import Toggle from '../ui/toggle/Toggle';

const Menu: FC<IMenu> = ({ items, active, setActive }) => {
    const theme = useAppSelector(state => state.theme);
    return (
        <ThemeProvider theme={theme}>
            <div className={active ? `${styles.menu_active}` : `${styles.menu}`}>
                <div className={styles.blur}>
                    <div className={styles.blur__content}>
                        <MenuWrapper>
                            <ul>
                                {items.map((el: any) =>
                                    <li onClick={() => setActive(!active)}>
                                        <NavLink to={el.href}>{el.value}</NavLink>
                                    </li>)}
                                <li>
                                    <Toggle />
                                </li>
                            </ul>
                        </MenuWrapper>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};
export default Menu;
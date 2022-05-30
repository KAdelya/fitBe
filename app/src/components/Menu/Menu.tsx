import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Menu/Menu.module.sass';
import MainCustomBtn from '../ui/button/ButtonLayout/ButtonLayout';

interface Props {
    items: any
    active: any,
    setActive: any
}

const Menu: FC<Props> = ({ items, active, setActive }) => {
    return (
        <div className={active ? `${styles.menu_active}` : `${styles.menu}`}>
            <div className={styles.blur}>
                <div className={styles.blur__content}>
                    <ul>
                        {items.map((el: any) =>
                            <li onClick={()=>setActive(!active)}>
                                <NavLink to={el.href}>{el.value}</NavLink>
                            </li>)}
                        <li>
                            <div className={styles.blur__content__button}>
                                <NavLink to='/'>
                                    <MainCustomBtn>
                                        <button>SIGN OUT</button>
                                    </MainCustomBtn>
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Menu;
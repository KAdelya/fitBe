import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../Menu/Menu.module.sass'
import Button from '../ui/button/button'

interface Props {
    items: any
    active: any,
    setActive: any
}

const Menu: FC<Props> = ({ items, active, setActive }) => {
    return (
        <div className={active ? `${styles.menu_active}`:`${styles.menu}`}>
            <div className={styles.blur}>
                <div className={styles.menu_content}>
                    <ul>
                        {items.map((el: any) =>
                            <li>
                                <NavLink to={el.href}>{el.value}</NavLink>
                            </li>)}
                        <li>
                            <div className={styles.button}>
                                <NavLink to='/'>
                                    <Button text='SIGN OUT' />
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Menu;
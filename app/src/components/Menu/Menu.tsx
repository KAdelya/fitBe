import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../Menu/Menu.module.sass'

interface Props {
    items: any
}

const Menu: FC<Props> = ({ items }) => {
    return (
        <div className={styles.menu}>
            <div className={styles.blur}>
                <div className={styles.menu_content}>
                    <ul>
                        {items.map((el: any) =>
                            <li>
                                <NavLink to={el.href}>{el.value}</NavLink>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Menu;
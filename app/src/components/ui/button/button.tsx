import React, { FC } from 'react'
import styles from '../button/button.module.sass'

interface Props {
    text: string
}
const Button: FC<Props> = ({ text }) => {
    return (
        <button className={styles.custom}>{text}</button>

    )
}
export default Button;
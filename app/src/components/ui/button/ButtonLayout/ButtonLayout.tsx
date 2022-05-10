import style from '../ButtonLayout/ButtonLayout.module.sass';
import { FC } from 'react';

interface Props {
    onClick: any
}

export const MainCustomBtn: FC<Props> = ({ children , onClick}) => {
    return (
        <button className={style.custom} onClick={onClick}>
            {children}
        </button>
    );
}
export default MainCustomBtn;
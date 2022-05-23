import style from '../ButtonLayout/ButtonLayout.module.sass';
import { FC } from 'react';

interface Props { }

export const MainCustomBtn: FC<Props> = ({ children }) => {
    return (
        <div className={style.custom}>
            {children}
        </div>
    );
};
export default MainCustomBtn;
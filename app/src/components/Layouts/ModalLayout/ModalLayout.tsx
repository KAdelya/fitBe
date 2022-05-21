import style from './ModalLayout.module.sass';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../stores/slices';
;

interface Props { }

export const Modal: FC<Props> = ({ children }) => {
    const modalState = useSelector((state: RootState) => state.modals);
    console.log(modalState)
    return (
        <div className={style.overlay}>
            <div className={style.overlay__modal}>
                <div className={style.overlay__modal__close}>
                    <button >&times;</button>
                </div>
                {children}
            </div>
        </div>
    );
}
export default Modal;
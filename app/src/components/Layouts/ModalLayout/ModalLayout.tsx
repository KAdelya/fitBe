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
            <div className={style.modal}>
                <div className={style.modal_wrapper}>
                    <div className={style.close}>
                        <button >&times;</button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}
export default Modal;
import style from './ModalLayout.module.sass';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../stores/slices';


interface Props {
    сlose: any;
    open: any
    button: string
}

export const Modal: FC<Props> = ({ children, button }) => {
    const [open, сlose] = useState(true);
    const modalState = useSelector((state: RootState) => state.modal);
    return (
        open ?
            <div className={style.overlay}>
                <div className={style.overlay__modal}>
                    <div className={style.overlay__modal__close}>
                        <button onClick={() => сlose(!open)}>&times;</button>
                    </div>
                    {children}
                    <div>
                        <button onClick={() => сlose(!open)}>
                            {button}
                        </button>
                    </div>
                </div>

            </div> :
            <></>
    );
}
export default Modal;
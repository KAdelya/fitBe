import styles from './ModalContainer.module.sass';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../stores/slices';
import MainCustomBtn from '../../ui/button/ButtonLayout/ButtonLayout';


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
            <div className={styles.overlay}>
                <div className={styles.overlay__modal}>
                    <div className={styles.overlay__modal__close}>
                        <button onClick={() => сlose(!open)}>&times;</button>
                    </div>
                    {children}
                    <div className={styles.overlay__modal__button}>
                        <MainCustomBtn>
                            <button onClick={() => сlose(!open)}>
                                {button}
                            </button>
                        </MainCustomBtn>
                    </div>
                </div>

            </div> :
            <></>
    );
}
export default Modal;
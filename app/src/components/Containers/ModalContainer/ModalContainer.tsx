import styles from './ModalContainer.module.sass';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../stores';
import MainCustomBtn from '../../ui/button/ButtonLayout/ButtonLayout';


interface Props {
    close: any;
    open: any;
    button: string;
}

export const Modal: FC<Props> = ({ children, button }) => {
    const [open, close] = useState(true);
    const modalState = useSelector((state: RootState) => state.modal);
    return (
        open ?
            <div className={styles.overlay}>
                <div className={styles.overlay__modal}>
                    <div className={styles.overlay__modal__close}>
                        <button onClick={() => close(!open)}>&times;</button>
                    </div>
                    {children}
                    <div className={styles.overlay__modal__button}>
                        <MainCustomBtn>
                            <button onClick={() => close(!open)}>
                                {button}
                            </button>
                        </MainCustomBtn>
                    </div>
                </div>

            </div> :
            <></>
    );
};
export default Modal;
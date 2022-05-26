import styles from './ModalContainer.module.sass';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';
import MainCustomBtn from '../../ui/button/ButtonLayout/ButtonLayout';
import { AnimatePresence } from 'framer-motion';
import { ModalBox } from '../../Modal/AnimateModalStyle';

interface Props {
    close: any;
    open: any;
    button: string;
}

export const Modal: FC<Props> = ({ children, button }) => {
    const [open, close] = useState(true);
    return (
        open ?
            <div className={styles.overlay}>
                <AnimatePresence>
                    <ModalBox
                        initial={{ opacity: 0, y: 60, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { type: 'spring', stiffness: 150 }
                        }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}>
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
                    </ModalBox>
                </AnimatePresence>
            </div> : <></>
    );
};
export default Modal;
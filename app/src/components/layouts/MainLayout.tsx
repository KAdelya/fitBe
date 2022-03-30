import styles from './Modal.module.sass';
import { FC } from 'react';

interface Props { }

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.page_content}>
            <div className={styles.page_content_wrapper}>
                {children}
            </div>
        </div>
    );
}
export default MainLayout;

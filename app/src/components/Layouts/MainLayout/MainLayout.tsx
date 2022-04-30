import styles from './../MainLayout/MainLayout.module.sass';
import { FC } from 'react';

interface Props { }

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <div className={styles.page_content}>
            {children}
        </div>
    );
}
export default MainLayout;
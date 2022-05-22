import { FC } from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import styles from '../ProfilContainer/ProfilContainer.module.sass'

interface Props {}

const ProfilContainer: FC<Props> = ({ children }) => {
    return (
        <>
            {/* <Header /> */}
            <div className={styles.main_content}>{children}</div>
            <Footer />
        </>
    )
}
export default ProfilContainer;

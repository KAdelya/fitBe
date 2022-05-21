import { FC } from 'react'
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

interface Props {}

const ProfilContainer: FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}
export default ProfilContainer;

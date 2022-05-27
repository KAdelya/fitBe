import { FC } from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import styles from './ProfilContainer.module.sass';

import { useAppSelector } from '../../../utils/redux-hooks';
import styled, { ThemeProvider } from 'styled-components';

interface Props { }
const Content = styled.div`
  transition: all 0.50s linear;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.mainBg};
`;

const ProfilContainer: FC<Props> = ({ children }) => {
    const theme = useAppSelector(state => state.theme);
    return (
        <>
            <ThemeProvider theme={theme}>
                <Content>
                    <Header />
                    <div className={styles.main_content}>{children}</div>
                    <Footer />
                </Content>
            </ThemeProvider>
        </>
    );
};
export default ProfilContainer;

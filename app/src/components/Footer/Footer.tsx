import styled, { ThemeProvider } from 'styled-components';
import {  useAppSelector } from '../../utils/redux-hooks';
import styles from '../Footer/Footer.module.sass';

const Content = styled.div`
  transition: all 0.50s linear;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
`;

const Footer = () => {
    const theme = useAppSelector(state => state.theme);
    return (
        <ThemeProvider theme={theme}>
            <Content>
                <footer className={styles.footer}>
                    <p>Copyright © 2022. All rights reserved</p>
                </footer>
            </Content>
        </ThemeProvider>
    );
};
export default Footer;
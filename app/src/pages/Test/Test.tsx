
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../components/Themes/Theme';

const Content = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;
  font-size: 24px;
  transition: all 0.50s linear;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
`;

const Test = () => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };
  return (
    <ThemeProvider theme={theme}>
      <button onClick={() => toggleTheme()}>switch</button>
      <Content>Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Content>
    </ThemeProvider>
  );
};
export default Test;
import { createGlobalStyle} from 'styled-components';
import styled, { ThemeProvider } from 'styled-components';

// export const GlobalStyles = createGlobalStyle`

// body {

// background: ${({ theme }) => theme.body};

// color: ${({ theme }) => theme.text};

// font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;

// transition: all 0.50s linear;

// }`;
// const Content = styled.div`
//   display: flex;
//   height: 100vh;
//   align-items: center;
//   justify-content: center;
//   font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;
//   font-size: 24px;
//   color: ${props => props.theme.textColor};
//   background-color: ${props => props.theme.body};
// `;


export const lightTheme = {
    bgColor: '#6876fc',
    textColor: 'white'
  };
  
  export const darkTheme = {
    bgColor: '#1D1F26',
    textColor: 'white'
  };
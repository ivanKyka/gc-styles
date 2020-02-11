import React from 'react';
import Theme from "../../src/Theme";
import ThemeSwitcher from "../../src/ThemeSwitcher";
import styled from "styled-components";
import Buttons from "./Buttons";
import Inputs from "./Inputs";
import GlobalStyle from "../../src/GlobalStyles";

const App = () => (
    <Theme defaultThemeName={localStorage.getItem('theme')}>
        <GlobalStyle/>
        <Container>
            <ThemeSwitcher />
            <Inputs />
            <Buttons />
        </Container>
    </Theme>
);


const Container = styled.div`
    min-height: 100vh;
    height: max-content;
    width: 100vw;
    background: ${props => props.theme.background};
`;

export default App;

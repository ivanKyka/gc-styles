import React from 'react';
import Theme from "../../src/Theme";
import ThemeSwitcher from "../../src/ThemeSwitcher";
import styled from "styled-components";
import Buttons from "./Buttons";
import Inputs from "./Inputs";
import GlobalStyle from "../../src/GlobalStyles";
import Dropdowns from "./Dropdowns";
import Checkboxes from "./Checkboxes";
import Autocompletes from "./Autocompletes";
import MultipleInputs from "./MultipleInputs";


const App = () => (
    <Theme defaultThemeName={localStorage.getItem('theme')}>
        <GlobalStyle/>
        <Container>
            <ThemeSwitcher />
            <MultipleInputs/>
            <Autocompletes />
            <Checkboxes/>
            <Dropdowns />
            <Inputs />
            <Buttons />
        </Container>
    </Theme>
);


const Container = styled.div`
    min-height: 100vh;
    height: max-content;
`;

export default App;

import { createGlobalStyle } from "styled-components";

import eUkraineLightWoff from '../resources/fonts/e-Ukraine-Light.woff';
import eUkraineLightWoff2 from '../resources/fonts/e-Ukraine-Light.woff2';
import eUkraineLightTtf from '../resources/fonts/e-Ukraine-Light.ttf';
import eUkraineLightEot from '../resources/fonts/e-Ukraine-Light.eot';

import eUkraineHeadRegularWoff from '../resources/fonts/e-UkraineHead-Regular.woff';
import eUkraineHeadRegularWoff2 from '../resources/fonts/e-UkraineHead-Regular.woff2';
import eUkraineHeadRegularTtf from '../resources/fonts/e-UkraineHead-Regular.ttf';
import eUkraineHeadRegularEot from '../resources/fonts/e-UkraineHead-Regular.eot';

const GlobalStyle = createGlobalStyle`
    @font-face {
        src: url("${eUkraineLightEot}") format("embedded-opentype"),
             url("${eUkraineLightTtf}") format("truetype"),
             url("${eUkraineLightWoff}") format("woff");    
             url("${eUkraineLightWoff2}") format("woff2");
             font-style: normal;
             font-family: "e-Ukraine-Light";
    }
    
    @font-face {
            src: url("${eUkraineHeadRegularEot}") format("embedded-opentype"),
                 url("${eUkraineHeadRegularTtf}") format("truetype"),
                 url("${eUkraineHeadRegularWoff}") format("woff");    
                 url("${eUkraineHeadRegularWoff2}") format("woff2");
                 font-style: normal;
                 font-family: "e-UkraineHead-Regular";
        }

    body {
        margin: 0;
        padding: 0;
        font-family: "e-Ukraine-Light"  !important;
        color: ${props => props.theme.text};
    }
    
    button,
    input
    {
        font-family: "e-Ukraine-Light"  !important;
    }
    
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: "e-UkraineHead-Regular" ,sans-serif;
        text-align: center;
    }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

import eUkraineLightWoff from '../resources/fonts/e-Ukraine-Light.woff';
import eUkraineLightWoff2 from '../resources/fonts/e-Ukraine-Light.woff2';
import eUkraineLightTtf from '../resources/fonts/e-Ukraine-Light.ttf';
import eUkraineLightEot from '../resources/fonts/e-Ukraine-Light.eot';

import eUkraineBoldWoff from '../resources/fonts/e-Ukraine-Bold.woff';
import eUkraineBoldWoff2 from '../resources/fonts/e-Ukraine-Bold.woff2';
import eUkraineBoldTtf from '../resources/fonts/e-Ukraine-Bold.ttf';
import eUkraineBoldEot from '../resources/fonts/e-Ukraine-Bold.eot';



import eUkraineHeadRegularWoff from '../resources/fonts/e-UkraineHead-Regular.woff';
import eUkraineHeadRegularWoff2 from '../resources/fonts/e-UkraineHead-Regular.woff2';
import eUkraineHeadRegularTtf from '../resources/fonts/e-UkraineHead-Regular.ttf';
import eUkraineHeadRegularEot from '../resources/fonts/e-UkraineHead-Regular.eot';

const GlobalStyles = createGlobalStyle`
    @font-face {
        src: url("${eUkraineLightEot}") format("embedded-opentype"),
             url("${eUkraineLightTtf}") format("truetype"),
             url("${eUkraineLightWoff}") format("woff");    
             url("${eUkraineLightWoff2}") format("woff2");
             font-style: normal;
             font-family: "e-Ukraine-Light";
    }
    
    @font-face {
        src: url("${eUkraineBoldEot}") format("embedded-opentype"),
             url("${eUkraineBoldTtf}") format("truetype"),
             url("${eUkraineBoldWoff}") format("woff");    
             url("${eUkraineBoldWoff2}") format("woff2");
             font-style: normal;
             font-family: "e-Ukraine-Bold";
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
        font-size: 16px;
        background: ${props => props.theme.background};
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
    
    svg {
        fill: ${props => props.theme.text};
    }
`;

export default GlobalStyles;

import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

export default function Input(props) {
    if (props.message === '') return <InputField {...props}/>
    return <Wrapper {...props}>
        <InputField {...props}/>
        <span>{props.message}</span>
    </Wrapper>
}

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'password']),
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    invalid: PropTypes.bool,
    unlight: PropTypes.oneOf(['none' ,'default', 'info', 'success', 'warning', 'error']),
    message: PropTypes.string,
    messageType: PropTypes.oneOf(['default', 'info', 'success', 'warning', 'error'])
};

Input.defaultProps = {
    type: 'text',
    readOnly: false,
    disabled: false,
    invalid: false,
    unlight: 'none',
    message: '',
    messageType: 'default'
};


const colorsSet = {
    default: {color: 'background', bg: 'accentLight'},
    info: {color: 'white', bg: 'primaryLight'},
    success: {color: 'white', bg: 'success'},
    warning: {color: 'white', bg: 'secondaryLight'},
    error: {color: 'white', bg: 'error'}
};

//Functions for getting styles of different parts of input by props
function getColorByPros(props) {
    if (props.disabled) return css`color: ${props.theme.text};`;
    if (props.invalid) return css`
        color: ${props => props.theme.error};
        &:focus {
            color: ${props => props.theme.text};
        }
`;
    if (props.unlight !== 'none') return css`
    color: ${props => props.theme[colorsSet[props.unlight].bg]};
    &:focus {
        color: ${props => props.theme.text};
    }
`;
    return css`color: ${props.theme.text};`;
}

function getBackgroundByPros(props) {
    if (props.disabled) return css`background: ${props.theme.gray};`;
    return css`background: ${props.theme.inputFill};`;
}

function getBorderByProps(props) {
    if (props.invalid) return css`
        border: 1px solid ${props => props.theme.error};
        &:focus {
            border: 1px solid ${props => props.theme.accentLight};
        }
`;
    if (props.unlight !== 'none') return css`
    border: 1px solid ${props => props.theme[colorsSet[props.unlight].bg]};
    &:focus {
        border: 1px solid ${props => props.theme.accentLight};
    }
`;
    return css`
        border: 1px solid ${props => props.theme.inputBorder};
        &:focus {
            border: 1px solid ${props => props.theme.accentLight};
        }
`;
}

function getBoxShadowByProps(props) {
    if (props.invalid) return css`
        box-shadow: 0 0 1px 1px ${props => props.theme.error};
        &:focus {
            box-shadow: 0 0 1px 1px ${props => props.theme.accentLight};
        }
`;
    if (props.unlight !== 'none') return css`
    box-shadow: 0 0 1px 1px ${props => props.theme[colorsSet[props.unlight].bg]};
    &:focus {
        box-shadow: 0 0 1px 1px ${props => props.theme.accentLight};
    }
`;
    return css`
        &:focus {
            box-shadow: 0 0 1px 1px ${props => props.theme.accentLight};
        }
    ;`;
}

const InputField = styled.input.attrs(
    props => ({
        type: props.type === 'password'?'password':'text'
}))`
    height: 35px;
    width: calc(100% - 20px);
    margin: 5px;
    padding-left: 5px;
    border-radius: 5px;
    ${props => getBackgroundByPros(props)};
    ${props => getColorByPros(props)};
    ${props => getBorderByProps(props)};
    ${props => getBoxShadowByProps(props)};
`;

//Container for input with tooltip
const Wrapper = styled.div`
    position: relative;
    display: inline;
    width: 100%;
    span {
        position: absolute;
        width: max-content;
        color: ${props => props.theme[colorsSet[props.messageType].color]};
        background: ${props => props.theme[colorsSet[props.messageType].bg]};
        height: 40px;
        line-height: 40px;
        text-align: center;
        visibility: hidden;
        border-radius: 6px;
        padding: 0 10px;
    }
    span:after {
        content: '';
        position: absolute;
        top: 50%;
        right: 100%;
        margin-top: -8px;
        width: 0; height: 0;
        border-right: 8px solid ${props => props.theme[colorsSet[props.messageType].bg]};
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
    }
    input:focus+span {
        visibility: visible;
        left: 100%;
        top: 50%;
        margin-top: -20px;
        z-index: 999;
    }
`;

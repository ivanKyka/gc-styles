import React, { useState } from 'react';
import styled, {css} from "styled-components";
import PropTypes from 'prop-types';
import Icon from "./Icon";

export default function Password(props) {
    const [isValid, setValid] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    return(<Container>
        <PasswordField
            {...props}
            isValid={isValid}
            isVisible={isVisible}
            onBlur={props.regExp ? e => setValid(props.regExp.test(e.target.value)) : null}
        />
        <ToggleButton onClick={() => setIsVisible(!isVisible)}>
            <Icon name={isVisible ? 'eye-slash':'eye'}/>
        </ToggleButton>
    </Container>)
}

Password.propTypes = {
    invalid: PropTypes.bool,
    unlight: PropTypes.oneOf(['none' ,'default', 'info', 'success', 'warning', 'error']),
    regExp: PropTypes.object
};

Password.defaultProps = {
    invalid: false,
    unlight: 'none',
    regExp: null
};

function getColorByPros(props) {
    if (props.invalid || !props.isValid) return css`
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
    return css`background: ${props.theme.inputFill};`;
}

function getBorderByProps(props) {
    if (props.invalid || !props.isValid) return css`
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
    if (props.invalid || !props.isValid) return css`
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

const colorsSet = {
    default: {color: 'background', bg: 'accentLight'},
    info: {color: 'white', bg: 'primaryLight'},
    success: {color: 'white', bg: 'success'},
    warning: {color: 'white', bg: 'secondaryLight'},
    error: {color: 'white', bg: 'error'}
};

const PasswordField = styled.input.attrs(props => ({type: props.isVisible ? 'text':'password'}))`
        height: 35px;
    width: calc(100% - 20px);
    margin: 5px;
    padding-left: 5px;
    border-radius: 5px;
    &::placeholder {
        font-family: 'e-Ukraine-Light';
    }
    ${props => getBackgroundByPros(props)};
    ${props => getColorByPros(props)};
    ${props => getBorderByProps(props)};
    ${props => getBoxShadowByProps(props)};
`;

const Container = styled.div`
    position: relative;
    display: grid;
`;

const ToggleButton = styled.button`
    padding: 0;
    border: none;
    background: transparent;
    position: absolute;
    right: 20px;
    align-self: center;
    cursor: pointer;
    svg {
        fill: ${props => props.theme.gray};
        height: 20px;
        min-width: 25px;
    }
    &:hover {
        svg {
            height: 22px;
            min-width: 25px;
            fill: ${props => props.theme.text};
      }
    }
`;

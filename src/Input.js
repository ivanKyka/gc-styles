import React, {useRef} from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import Icon from "./Icon";

export default function Input(props) {
    const input = useRef(null);

    return (
        props.icon ? <Container>
            <InputField
                right={props.iconPosition === 'right'}
                {...props}
                ref={props.reference || input}
            />
            {props.icon && <IconButton
                onClick={e => props.iconClickHandler(e, input.current)}
                right={props.iconPosition === 'right'}
            ><Icon name={props.icon}/></IconButton>}
        </Container> : <InputField {...props} ref={props.reference}/>
    )
}

Input.propTypes = {
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    invalid: PropTypes.bool,
    icon: PropTypes.string,
    iconClickHandler: PropTypes.func,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    unlight: PropTypes.oneOf(['none' ,'default', 'info', 'success', 'warning', 'error']),
};

Input.defaultProps = {
    readOnly: false,
    disabled: false,
    invalid: false,
    unlight: 'none',
    icon: null,
    iconClickHandler: () => {},
    iconPosition: 'right'
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
        type: 'text'
}))`
    height: 35px;
    width: calc(100% - 20px);
    margin: 5px;
    border-radius: 5px;
    padding-left: ${props => props.right ? '5px' : '35px'};
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

const IconButton = styled.button`
    padding: 0;
    border: none;
    background: transparent;
    position: absolute;
    ${props => props.right ? 
    css`right: 20px;`:
    css`left: 10px;`};
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

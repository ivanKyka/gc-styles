import React from 'react';
import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

export default function Button({type, size, isFilled, disabled, children, onClick, onFocus, onBlur}) {

    return <StyledButton
        type={type}
        isFilled={isFilled}
        size={size}
        disabled={disabled}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
    >{children}</StyledButton>
}

Button.defaultProps = {
    type: 'default',
    size: 'sm',
    isFilled: true,
    disabled: false,
    children: 'Button',
    onClick: function () {},
    onFocus: function () {},
    onBlur: function () {}
};

Button.propTypes = {
    type: PropTypes.oneOf(['default', 'info', 'success', 'warning', 'error']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    isFilled: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
};


const typeStyles = {
    default: {color: 'background', bg: 'accentLight'},
    info: {color: 'white', bg: 'primaryLight'},
    success: {color: 'white', bg: 'success'},
    warning: {color: 'white', bg: 'secondaryLight'},
    error: {color: 'white', bg: 'error'}
};

function getColorByPros(props) {
    if (props.disabled) return css`color: ${props.theme.white};`;
    if (!props.isFilled) return css`
        color: ${props.theme[typeStyles[props.type].bg]};
        &:hover {color: ${props.theme[typeStyles[props.type].color]};}
    `;
    return css`color: ${props.theme[typeStyles[props.type].color]};`;
}

function getBackgroundByPros(props) {
    if (props.disabled) return css`background: ${props.theme.gray};`;
    if (!props.isFilled) return css`
        background: transparent;
        &:hover{background: ${props.theme[typeStyles[props.type].bg]};}
    `;
    return css`background: ${props.theme[typeStyles[props.type].bg]};`;
}

function getBorderByPros(props) {
    let borderSize;
    if (props.size === 'sm') borderSize = 2;
    if (props.size === 'md') borderSize = 3;
    if (props.size === 'lg') borderSize = 4;
    if (props.disabled) return css`border: none;`;
    if (!props.isFilled) return css`border: ${borderSize}px ${props.theme[typeStyles[props.type].bg]} solid`;
    return css`border: none`;
}

function getSizeByProps(props) {
    if (props.size === 'sm') return css`min-height: 30px; 
                                        min-width: 80px;
                                        font-size: 16px;    
                                        border-radius: 5px;`;
    if (props.size === 'md') return css`min-height: 45px; 
                                        min-width: 120px;
                                        font-size: 24px;
                                        border-radius: 7px;`;
    if (props.size === 'lg') return css`min-height: 60px; 
                                        min-width: 160px;
                                        font-size: 32px;
                                        border-radius: 10px;`;
};

const StyledButton = styled.button`
    display: block;
    margin: 10px;
    cursor: ${props => props.disabled ? 'auto' : 'pointer'};
    ${props => getBackgroundByPros(props)};
    ${props => getBorderByPros(props)};
    ${props => getColorByPros(props)};
    ${props => getSizeByProps(props)};
    ${props => !props.disabled && css`
        &:hover {
            filter: brightness(1.2);
        }
        &:active {
            filter: brightness(0.8);
        }
`}
`;

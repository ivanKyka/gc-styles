import React from 'react';
import styled, {css} from "styled-components";
import PropTypes from 'prop-types';

export default function Tooltip(props) {
    return (
        <Wrapper {...props}>
            {props.children}
            <span>{props.message}</span>
        </Wrapper>
    )
}

Tooltip.propTypes = {
    children: PropTypes.element.isRequired,
    message: PropTypes.string,
    messageType: PropTypes.string,
    orientation: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    isActive: PropTypes.bool
};

Tooltip.defaultProps = {
    message: '',
    messageType: 'default',
    orientation: 'right',
    isActive: false
}

const colorsSet = {
    default: {color: 'background', bg: 'accentLight'},
    info: {color: 'white', bg: 'primaryLight'},
    success: {color: 'white', bg: 'success'},
    warning: {color: 'white', bg: 'secondaryLight'},
    error: {color: 'white', bg: 'error'}
};

const tooltipPositions = {
    left: css`
        top: 50%;
        left: 100%;
        margin-top: -8px;
        border-left: 8px solid ${props => props.theme[colorsSet[props.messageType].bg]};
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
`,
    right: css`
        top: 50%;
        right: 100%;
        margin-top: -8px;
        border-right: 8px solid ${props => props.theme[colorsSet[props.messageType].bg]};
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
`,
    top: css`
        top: 100%;
        left: 50%;
        margin-left: -8px;
        width: 0; height: 0;
        border-top: 8px solid ${props => props.theme[colorsSet[props.messageType].bg]};
        border-right: 8px solid transparent;
        border-left: 8px solid transparent
`,
    bottom: css`
        bottom: 100%;
        left: 50%;
        margin-left: -8px;
        border-bottom: 8px solid ${props => props.theme[colorsSet[props.messageType].bg]};
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
`
};

const tooltipActiveStyles= {
    left: css`
        right: 100%;
        top: 50%;
        margin-top: -20px;
        margin-right: 5px;
`,
    right: css`
        left: 100%;
        top: 50%;
        margin-top: -20px;
`,
    top: css`
        bottom: calc(100% + 4px);
        justify-self: center;
`,
    bottom: css`
        bottom: -100%;
        justify-self: center;
`
};

const Wrapper = styled.div`
    position: relative;
    display: grid;
    width: 100%;
    span {
        position: absolute;
        width: max-content;
        padding: 0 10px;
        color: ${props => props.theme[colorsSet[props.messageType].color]};
        background: ${props => props.theme[colorsSet[props.messageType].bg]};
        height: 40px;
        line-height: 40px;
        text-align: center;
        visibility: ${props => props.isActive ? 'visible':'hidden'};
        border-radius: 6px;
        
        ${props => props.isActive && css`
            z-index: 999;
            ${tooltipActiveStyles[props.orientation]}
        `}
    }
    span:after {
        content: '';
        position: absolute;
        width: 0; height: 0;
        ${props => tooltipPositions[props.orientation]}
    }
    input:focus+span {
        visibility: visible;
        z-index: 999;
        ${props => tooltipActiveStyles[props.orientation]}
    }
`;

import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';
import Icon from "./Icon";

export default function Dropdown({ icon, title, children, onOpen, onClose, disabled }) {
    const [isOpened, setIsOpened] = useState(false);

    const togglePane = e => {
        e.preventDefault();
        if (disabled) return;
        if (isOpened) onClose();
        else onOpen();
        setIsOpened(!isOpened);
    }

    return (
        <>
            <HeadPane isOpen={isOpened}
                      hasIcon={icon !== ''}
                      onClick={togglePane}
                      disabled={disabled}
            >
                {icon && <Icon name={icon}/>}
                <span>{title}</span>
                <Icon name={isOpened ? 'chevron-left' : 'chevron-down'}/>
            </HeadPane>
            {isOpened && <BodyPane>{children}</BodyPane>}
        </>
    )
}

Dropdown.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
        PropTypes.string
    ]),
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    disabled: PropTypes.bool
}

Dropdown.defaultProps = {
    icon: '',
    children: <div />,
    onOpen: () => {},
    onClose: () => {},
    disabled: false
}

function getHeadColorsByProps(props) {
    if (props.disabled) return css`
        background: ${props => props.theme.gray};
        color: ${props =>props.theme.white};
        svg {fill: ${props =>props.theme.white}}
`;
    if (props.isOpen) return css`
        background: ${props => props.theme.accentDark};
        color: ${props =>props.theme.white};
        svg {fill: ${props =>props.theme.white}}
        &:hover {
            background: ${props => props.theme.accent};
        }
        &:hover+div {
            border-color: ${props => props.theme.accent};
        }
`;
    return css`
        background: ${props => props.theme.inputFill};
        filter: brightness(0.9);
        color: ${props =>props.theme.text};
        svg {fill: ${props =>props.theme.text}}
        &:hover {
            filter: brightness(1.1);
        }
`;
}


const HeadPane = styled.div`
    display: grid;
    grid-template-columns: ${props => props.hasIcon && '50px'} 1fr 60px;
    min-height: 40px;
    margin: 10px 10px 0;
    width: calc(100% - 20px);
    max-width: 100%;
    align-items: center;
    cursor: ${props => props.disabled ? 'default':'pointer'};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-weight: bold;
    ${props => getHeadColorsByProps(props)};
    ${props => !props.isOpen && css`
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border: 1px solid ${props.theme.inputBorder};
    `};
    span { padding-left: ${props => !props.hasIcon ? '10px' : '0'}; }
    svg {
        height: 30px;
        object-fit: contain;
        justify-self: center;
        align-self: center;
    }
`;

const BodyPane = styled.div`
    display: block;
    margin: 0 10px 10px 10px;
    width: calc (100% - 24px);
    padding: 15px;
    border: 2px solid ${props => props.theme.accentDark};
    border-top: none;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    max-width: 100%;
`;

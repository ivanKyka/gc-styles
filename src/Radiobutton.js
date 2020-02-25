import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

export default function Radiobutton({
                                        children,
                                        onChange,
                                        name,
                                        checked,
                                        defaultChecked,
                                        value,
                                        disabled
                                    }) {
    return(
        <Container disabled={disabled}>
            <input type="radio"
                   name={name}
                   onChange={onChange}
                   checked={checked}
                   readOnly={checked !== undefined}
                   defaultChecked={defaultChecked}
                   disabled={disabled}
                   value={value}
            />
            <Box disabled={disabled}/>
            <Mark>{children}</Mark>
        </Container>
    )
}

Radiobutton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.element
    ]),
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool
}

Radiobutton.defaultProps = {
    children: '',
    onChange: null,
    disabled: false
}


const Container = styled.label`
    position: relative;
    height: 30px;
    display: grid;
    grid-template-columns: 25px max-content;
    input[type="radio"] {
        visibility: hidden;
        margin: 0;
        height: 10px;
        width: 10px;
    }
        
    input[type="radio"]:checked + span {
        background-color: ${props => props.disabled ? props.theme.gray : props.theme.accentLight};
        border-color: ${props => props.disabled ? props.theme.gray : props.theme.accentLight};
    }
        
    input[type="radio"]:checked + span:after {
        opacity: 1;
    }
`;

const Box = styled.span`
    background-color: ${props => props.disabled ? props.theme.gray : props.theme.white};
    border: 1px solid #ccc;
    border-radius: 50%;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    height: 18px;
    left: 0;
    position: absolute;
    top: 0;
    width: 18px;
    align-self: center;
    &:after {
        //box-shadow: 0 0 1px 1px ${props => props.theme.background};
        background: ${props => props.theme.background};
        content: "";
        border-radius: 50%;
        height: 8px;
        left: 5px;
        opacity: 0;
        position: absolute;
        top: 5px;
        width: 8px;
    }
`;

const Mark = styled.span`
    vertical-align: center;
`;

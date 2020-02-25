import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

export default function Checkbox({
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
            <input type="checkbox"
                onChange={onChange}
                name={name}
                checked={checked}
                readOnly={checked !== undefined}
                defaultChecked={defaultChecked}
                value={value}
                disabled={disabled}
            />
            <Box disabled={disabled} />
            <Mark>{children}</Mark>
        </Container>
    )
}

Checkbox.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.element
    ]),
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool
}

Checkbox.defaultProps = {
    children: '',
    onChange: null,
    name: undefined,
    value: '',
    disabled: false
}


const Container = styled.label`
    position: relative;
    height: 30px;
    display: grid;
    grid-template-columns: 25px max-content;
    
    input[type="checkbox"] {
        visibility: hidden;
        margin: 0;
        height: 10px;
        width: 10px;
    }
        
    input[type="checkbox"]:checked + span {
        background-color: ${props => props.disabled ? props.theme.gray : props.theme.accentLight};
        border-color: ${props => props.disabled ? props.theme.gray : props.theme.accentLight};
    }
        
    input[type="checkbox"]:checked + span:after {
        opacity: 1;
    }
`;

const Box = styled.span`
    background-color: ${props => props.disabled ? props.theme.gray : props.theme.white};
    border: 1px solid #ccc;
    border-radius: 15%;
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    height: 18px;
    left: 0;
    position: absolute;
    top: 0;
    width: 18px;
    align-self: center;
    &:after {
        border: 4px solid ${props => props.theme.background};
        border-top: none;
        border-right: none;
        content: "";
        height: 4px;
        left: 4px;
        opacity: 0;
        position: absolute;
        top: 4px;
        transform: rotate(-45deg);
        width: 8px;
    }
`;

const Mark = styled.span`
    vertical-align: center;
`;

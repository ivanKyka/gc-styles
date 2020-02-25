import React, {useState, useEffect, useRef} from 'react';
import styled, {keyframes} from 'styled-components';
import PropTypes from 'prop-types';
import Input from "./Input";

export default function Autocomplete({
                                         onChange,
                                         options,
                                         placeholder,
                                         useOptionsOnly,
                                         Value
                                     }) {
    const [isOpened, setOpened] = useState(false);
    const [value, setValue] = useState({id: '', label: ''});
    const [query, setQuery] = useState('');
    const inputRef = useRef(null);

    useEffect(() => setValue(Value), [Value]);
    useEffect(() => {
        setQuery('');
        inputRef.current.value = value.label;
    }, [value]);


    return (
        <Wrapper>
            <Input
                defaultValue={value.label}
                onChange={e => {
                    if (!useOptionsOnly)
                        onChange({id: e.target.value, label: e.target.value});
                    setQuery(e.target.value);
                }}
                placeholder={placeholder}
                reference={inputRef}
                onFocus={() => setOpened(true)}
                onBlur={() => {
                    if (useOptionsOnly) inputRef.current.value = value.label;
                    setTimeout(() => setOpened(false), 100)
                }}
            />
            <List isOpened={isOpened}>
                {
                    options
                        .filter(el => el.id.includes(query) || el.label.includes(query))
                        .map((el => <ListItem
                            onClick={() => {
                                setValue(el);
                                onChange(el);
                            }}
                            key={el.id}
                            tabIndex={0}
                        >
                            {el.label}
                        </ListItem>))
                }
            </List>
        </Wrapper>
    )
}

Autocomplete.propTypes = {
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string
    })).isRequired,
    placeholder: PropTypes.string,
    useOptionsOnly: PropTypes.bool,
    Value: PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string
    })
}

Autocomplete.defaultProps = {
    placeholder: '',
    useOptionsOnly: false,
    Value: {id: '', label: ''}
}

const ListItem = styled.li`
    display: block;
    height: 30px;
    list-style: none;
    line-height: 30px;
    vertical-align: center;
    background: ${props => props.theme.background};
    padding-left: 10px;
    cursor: pointer;
    &:hover {
        background: ${props => props.theme.accent};
        color: ${props => props.theme.accentText};
    }
`;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`;

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

const List = styled.ul`
    display: ${props => props.isOpened ? 'block' : 'none'};
    max-height: 50vh;
    overflow-y: auto;
    background: ${props => props.theme.inputFill};
    width: calc(100% - 10px);
    margin: 0 5px;
    padding: 0;
    position: absolute;
    z-index: 999;
    box-shadow:  0 3px 6px 0 rgba(0, 0, 0, 0.16);
    border: 1px solid ${props => props.theme.gray};
    animation: ${fadeIn} .1s ease-in;
`;

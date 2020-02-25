import React, {useState, useRef, useEffect} from 'react';
import styled, {css, keyframes} from 'styled-components';
import PropTypes from 'prop-types';
import Icon from "./Icon";

function arr_diff (a1, a2) {

    let a = [], diff = [];

    for (let i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (let i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (let k in a) {
        diff.push(k);
    }

    return diff;
}

export default function MultipleInput({
                                          options,
                                          onChange,
                                          allowCustomData,
                                          placeholder
                                      }) {

    const [data, setData] = useState([]);
    const [focused, setFocus] = useState(false);
    const [query, setQuery] = useState('');
    const input = useRef(null);
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) {
            onChange(data), [data]
        } else (didMount.current = true);
        setQuery('');
    }, [data]);

    function addData(val) {
        if (allowCustomData) setData([...data, val]);
        else if (options.find(el => el === val))
            setData([...data, val]);
    }
    function removeFromData(val) {setData(data.filter(el => el !== val))}
    function removeLast() {setData([...data.slice(0, data.length - 1)])}

    return (
        <Wrapper>
            <Container
                focused={focused}
                onClick={() => input.current.focus()}
            >
                {data.length > 0 ? data.map(el => <Item key={el}>{el}<Icon
                    onClick={e => {
                        e.stopPropagation();
                        removeFromData(el)
                    }}
                    name={'times'}
                /></Item>) : <Placeholder focused={focused}>{placeholder}</Placeholder>}
                <Input
                ref={input}
                    onFocus={() => setFocus(true)}
                    onBlur={e => {
                        setTimeout(() => setFocus(false), 100);
                        input.current.value = '';
                    }}
                    onInput={e => setQuery(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter' && e.target.value) {
                            addData(e.target.value);
                            input.current.value = '';
                        } else if (e.key === 'Backspace') removeLast();
                    }}
                />
            </Container>
            <List isOpened={focused}>
                {
                    arr_diff(options,data)
                        .filter(el => el.toLowerCase().includes(query.toLowerCase()))
                        .map((el => <ListItem
                            onClick={() => addData(el)}
                            key={el}
                            tabIndex={0}
                        >{el}</ListItem>))
                }
            </List>
        </Wrapper>
    )
}

MultipleInput.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
    allowCustomData: PropTypes.bool,
    placeholder: PropTypes.string
}

MultipleInput.defaultProps = {
    allowCustomData: false,
    placeholder: ''
}


const Input = styled.input.attrs(() => ({
    type: 'text'
}))`
    max-width: 100%;
    min-width: 200px;
    border: none;
    background: transparent;
    color: ${props => props.theme.text};
    font-size: 16px;
`;


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    min-height: 30px;
    width: calc(100% - 40px);
    margin: 10px 10px 0;
    border-radius: 5px;
    color: ${props => props.theme.accentText};
    border: 1px solid ${props => props.theme.inputBorder};
    background: ${props => props.theme.inputFill};
    cursor: text;
    &::placeholder {
        font-family: 'e-Ukraine-Light';
    }
    ${props => props.focused && css`
        box-shadow: 0 0 1px 1px ${props => props.theme.accentLight};
        border: 1px solid ${props => props.theme.accentLight};
`}
`;

const Item = styled.div`
    padding: 2px;
    background: ${props => props.theme.accent};
    border-radius: 4px;
    color: ${props => props.theme.accentText};
    margin-right: 5px;
    margin-bottom: 5px;
    display: grid;
    grid-template-columns: 1fr 20px;
    align-items: center;
    justify-items: center;
    
    svg {
        height: 14px;
        fill: ${props => props.theme.accentText};
        object-fit: contain;
        cursor: pointer;
        &:hover {
            height: 16px;
        }
    }
`;

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
    width: calc(100% - 20px);
    margin: 0 10px;
    padding: 0;
    position: absolute;
    z-index: 999;
    box-shadow:  0 3px 6px 0 rgba(0, 0, 0, 0.16);
    border: 1px solid ${props => props.theme.gray};
    animation: ${fadeIn} .1s ease-in;
`;

const Placeholder = styled.span`
    height: 30px;
    line-height: 30px;
    color: ${props => props.theme.gray};
    display: ${props => props.focused ? 'none' : 'block'};
`;

import React from 'react';
import styled from "styled-components";
import Input from "../../src/Input";
import Password from "../../src/Password";
import Tooltip from "../../src/Tooltip";
import Icon from "../../src/Icon";

export default function Inputs() {
    return (
        <>
                <h1>Inputs</h1>
                <Container>
                        <p>Default with console output</p>
                        <Input placeholder={'Start writing'} onChange={e => console.log(e.target.value)}/>
                        <p>ReadOnly</p>
                        <Input readOnly defaultValue={'Lorem ipsum'}/>
                        <p>Disabled</p>
                        <Input disabled defaultValue={'Lorem ipsum'}/>
                        <p>Invalid value</p>
                        <Input defaultValue={'Lorem ipsum'} invalid/>
                        <p>Default message</p>
                        <Tooltip message={'Hello'}>
                                <Input defaultValue={'Lorem ipsum'}/>
                        </Tooltip>
                        <p>Info message</p>
                        <Tooltip message={'Info'} messageType={'info'}>
                                <Input defaultValue={'Lorem ipsum'}/>
                        </Tooltip>
                        <p>Warning message</p>
                        <Tooltip message={'Warning'} messageType={'warning'}>
                                <Input defaultValue={'Lorem ipsum'}/>
                        </Tooltip>
                        <p>Success message</p>
                        <Tooltip message={'Lorem ipsum dolor'} messageType={'success'}>
                                <Input defaultValue={'Lorem ipsum'}/>
                        </Tooltip>
                        <p>Error message</p>
                        <Tooltip message={'Error'} messageType={'error'}>
                                <Input defaultValue={'Lorem ipsum'}/>
                        </Tooltip>
                        <p>Activated tooltip</p>
                        <Tooltip message={'Hello'} isActive={true}>
                                <Input />
                        </Tooltip>
                        <p>Top message</p>
                        <Tooltip message={'Hello'} orientation={"top"}>
                                <Input />
                        </Tooltip>
                        <p>Left message</p>
                        <Tooltip message={'Hello'} orientation={"left"}>
                                <Input />
                        </Tooltip>
                        <p>Bottom message</p>
                        <Tooltip message={'Hello'} orientation={"bottom"}>
                                <Input />
                        </Tooltip>
                        <p>Success unlight</p>
                        <Input defaultValue={'Lorem ipsum'} unlight={'success'}/>
                        <p>Warning unlight</p>
                        <Input defaultValue={'Lorem ipsum'} unlight={'warning'}/>
                        <p>Info unlight</p>
                        <Input defaultValue={'Lorem ipsum'} unlight={'info'}/>
                        <p>Error unlight</p>
                        <Input defaultValue={'Lorem ipsum'} unlight={'error'}/>
                        <p>Default Icon</p>
                        <Input defaultValue={'Lorem ipsum'} icon={'search'}/>
                        <p>Left Icon</p>
                        <Input defaultValue={'Lorem ipsum'} iconPosition={"left"} icon={'search'}/>
                        <p>Icon with Handler</p>
                        <Input
                                defaultValue={'Lorem ipsum'}
                                icon={'search'}
                                iconClickHandler={(event, input) => {console.log(event.type + ' ' + input.value)}}
                        />
                        <p>Password (test)</p>
                        <Password regExp={/^test$/}/>
                        <p>Unlight password (test)</p>
                        <Password regExp={/^test$/} defaultValue={'test'} unlight={'success'}/>
                        <p>Invalid password</p>
                        <Password invalid={true}/>

                </Container>
        </>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 120px 1fr;
    //padding-right: 100px;
    width: calc(100%);
    grid-auto-rows: max-content;
    justify-content: center;
    align-items: center;
    p {
        color: ${props => props.theme.text};
        font-size: 10px;
    }
`;

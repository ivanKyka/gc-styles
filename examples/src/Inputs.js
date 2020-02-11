import React from 'react';
import styled from "styled-components";
import Input from "../../src/Input";

export default function Inputs() {
    return (
        <>
                <h1>Поля вводу</h1>
                <Container>
                        <p>Default with console output</p>
                        <Input defaultValue={'Lorem ipsum'} onChange={e => console.log(e.target.value)}/>
                        <p>Default with Password</p>
                        <Input type={'password'} defaultValue={'Lorem ipsum'}/>
                        <p>ReadOnly</p>
                        <Input readOnly defaultValue={'Lorem ipsum'}/>
                        <p>Disabled</p>
                        <Input disabled defaultValue={'Lorem ipsum'}/>
                        <p>Readonly password (Eh-he-he :D)</p>
                        <Input type={'password'} readOnly defaultValue={'Lorem ipsum'}/>
                        <p>Invalid value</p>
                        <Input defaultValue={'Lorem ipsum'} invalid/>
                        <p>Invalid password</p>
                        <Input type={'password'} defaultValue={'Lorem ipsum'} invalid/>
                        <p>Default message</p>
                        <Input defaultValue={'Lorem ipsum'} message={'Hello'}/>
                        <p>Info message</p>
                        <Input defaultValue={'Lorem ipsum'} message={'Info'} messageType={'info'}/>
                        <p>Warning message</p>
                        <Input defaultValue={'Lorem ipsum'} message={'Warning'} messageType={'warning'}/>
                        <p>Success message</p>
                        <Input defaultValue={'Lorem ipsum'} message={'Lorem ipsum dolor'} messageType={'success'}/>
                        <p>Error message</p>
                        <Input defaultValue={'Lorem ipsum'} message={'Error'} messageType={'error'}/>
                        <p>Success unlight</p>
                        <Input defaultValue={'Lorem ipsum'} unlight={'success'}/>
                        <p>Warning unlight</p>
                        <Input defaultValue={'Lorem ipsum'} unlight={'warning'}/>
                        <p>Info unlight</p>
                        <Input defaultValue={'Lorem ipsum'} unlight={'info'}/>
                        <p>Error unlight</p>
                        <Input defaultValue={'Lorem ipsum'} message={'Error'} messageType={'error'} unlight={'error'}/>
                </Container>
        </>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 120px 1fr 120px 1fr;
    padding-right: 100px;
    grid-auto-rows: max-content;
    justify-content: center;
    align-items: center;
    p {
        color: ${props => props.theme.text};
        font-size: 10px;
    }
`;

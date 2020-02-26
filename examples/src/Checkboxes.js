import React from 'react';
import styled from "styled-components";
import Checkbox from "../../src/Checkbox";
import Radiobutton from "../../src/Radiobutton";

export default function Checkboxes() {
    return (
        <>
            <Container>
                <div>
                    <h1>Checkboxes</h1>
                    <Checkbox>Сheckbox</Checkbox>
                    <Checkbox  defaultChecked={true}>Default Checked</Checkbox>
                    <Checkbox checked>Hard Checked</Checkbox>
                    <Checkbox disabled>Disabled</Checkbox>
                    <Checkbox disabled checked>Disabled checked</Checkbox>
                    <Checkbox onChange={
                        e => alert(e.target.checked ? 'checked':'unchecked')
                    }>onChange trigger</Checkbox>
                </div>
                <div>
                    <h1>Radio buttons</h1>
                    <Radiobutton name={'example1'}>Value 1</Radiobutton>
                    <Radiobutton name={'example1'}>Value 2</Radiobutton>
                    <Radiobutton name={'example2'} disabled>Disabled</Radiobutton>
                    <Radiobutton name={'example2'} disabled checked>Disabled checked</Radiobutton>
                    <Radiobutton name={'example3'} checked>Default checked</Radiobutton>
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    justify-content: center;
`;

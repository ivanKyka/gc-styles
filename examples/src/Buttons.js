import React from 'react';
import styled from "styled-components";
import Button from "../../src/Button";

export default function Buttons() {
    return (
        <>
            <h1>Кнопки</h1>
            <Container>
                <div>
                    <Button>Default</Button>
                    <Button type={'info'}>Info</Button>
                    <Button type={'success'}>Success</Button>
                    <Button type={'warning'}>Warning</Button>
                    <Button type={'error'}>Error</Button>
                </div>
                <div>
                    <Button size={"md"}>Default</Button>
                    <Button size={"md"} type={'info'}>Info</Button>
                    <Button size={"md"} type={'success'}>Успішно</Button>
                    <Button size={"md"} type={'warning'}>Warning</Button>
                    <Button size={"md"} type={'error'}>Error</Button>
                </div>
                <div>
                    <Button size={"lg"}>Default</Button>
                    <Button size={"lg"} type={'info'}>Info</Button>
                    <Button size={"lg"} type={'success'}>Success</Button>
                    <Button size={"lg"} type={'warning'}>Warning</Button>
                    <Button size={"lg"} type={'error'}>Error</Button>
                </div>
                <div>
                    <Button isFilled={false} >Default</Button>
                    <Button isFilled={false} type={'info'}>Info</Button>
                    <Button isFilled={false} type={'success'}>Success</Button>
                    <Button isFilled={false} type={'warning'}>Warning</Button>
                    <Button isFilled={false} type={'error'}>Error</Button>
                </div>
                <div>
                    <Button isFilled={false} size={"md"}>Default</Button>
                    <Button isFilled={false} size={"md"} type={'info'}>Info</Button>
                    <Button isFilled={false} size={"md"} type={'success'}>Success</Button>
                    <Button isFilled={false} size={"md"} type={'warning'}>Warning</Button>
                    <Button isFilled={false} size={"md"} type={'error'}>Error</Button>
                </div>
                <div>
                    <Button isFilled={false} size={"lg"}>Default</Button>
                    <Button isFilled={false} size={"lg"} type={'info'}>Info</Button>
                    <Button isFilled={false} size={"lg"} type={'success'}>Success</Button>
                    <Button isFilled={false} size={"lg"} type={'warning'}>Warning</Button>
                    <Button isFilled={false} size={"lg"} type={'error'}>Error</Button>
                </div>
                <div>
                    <Button disabled>Disabled</Button>
                    <Button disabled size={'md'}>Disabled</Button>
                    <Button disabled size={'lg'}>Disabled</Button>
                </div>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(7, max-content);
    grid-auto-rows: max-content;
    justify-content: center;
`;

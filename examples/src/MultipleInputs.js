import React, {useState} from 'react';
import styled from "styled-components";
import Autocomplete from "../../src/Autocomplete";
import MultipleInput from "../../src/MultipleInput";

export default function MultipleInputs(){
    const data1 = ['Один','Два','Три','Чотири','П\'ять','Шість','Сім', 'Вісім','Дев\'ять'];
    const data2 = ['One','Two','Three','Four','Five','Six','Seven', 'Eight','Nine'];


    return <Container>
        <h1>Multiple inputs</h1>
        <p>Fixed options</p>
        <MultipleInput
                        options={data2}
                        placeholder={'Only like select'}
                        onChange={e => console.log(e)}
        />
        <p>Custom data allowed</p>
        <MultipleInput
                        options={data2}
                        allowCustomData
                        placeholder={'Put your own data here'}
                        onChange={e => console.log(e)}
        />
    </Container>
}

const Container = styled.div`
    display: grid;
    justify-items: center;
`;

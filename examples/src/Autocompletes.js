import React, {useState} from 'react';
import styled from "styled-components";
import Dropdown from "../../src/Dropdown";
import Autocomplete from "../../src/Autocomplete";

export default function Autocompletes(){
    const data1 = [
        {id:'1', label: 'Один'},
        {id:'2', label: 'Два'},
        {id:'3', label: 'Три'},
        {id:'4', label: 'Чотири'},
        {id:'5', label: 'П\'ять'},
        {id:'6', label: 'Шість'},
        {id:'7', label: 'Сім'},
        {id:'8', label: 'Вісім'},
        {id:'9', label: 'Дев\'ять'}
    ];

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    return <Container>
        <h1>Автодоповнення форм</h1>
        {/*console output*/}
        <Autocomplete options={data1}
                      onChange={data => setValue1(data)}
                      useOptionsOnly
                      placeholder={'Only options'}
        />
        <p>{`{id: "${value1.id}", label: "${value1.label}"}`}</p>
        <Autocomplete options={data1}
                      onChange={data => setValue2(data)}
                      placeholder={'Any params'}
        />
        <p>{`{id: "${value2.id}", label: "${value2.label}"}`}</p>
    </Container>
}

const Container = styled.div`
    display: grid;
    justify-items: center;
`;

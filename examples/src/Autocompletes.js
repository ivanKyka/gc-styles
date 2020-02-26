import React, {useState} from 'react';
import styled from "styled-components";
import Dropdown from "../../src/Dropdown";
import Autocomplete from "../../src/Autocomplete";

export default function Autocompletes(){
    const data1 = [
        {id:'1', label: 'One'},
        {id:'2', label: 'Two'},
        {id:'3', label: 'Three'},
        {id:'4', label: 'Four'},
        {id:'5', label: 'Five'},
        {id:'6', label: 'Six'},
        {id:'7', label: 'Seven'},
        {id:'8', label: 'Eight'},
        {id:'9', label: 'Nine'}
    ];

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    return <Container>
        <h1>Autocomplete</h1>
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

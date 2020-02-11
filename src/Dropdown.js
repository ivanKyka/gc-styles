import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Dropdown(props) {
    const [isOpened, setIsOpened] = useState(false);

    const togglePane = e => {
        e.preventDefault();
        setIsOpened(!isOpened);
    }

    return (
        <>
            <HeadPane isOpen></HeadPane>
            <BodyPane isOpen></BodyPane>
        </>
    )
}



const HeadPane = styled.div`
    
`;

const BodyPane = styled.div`

`;

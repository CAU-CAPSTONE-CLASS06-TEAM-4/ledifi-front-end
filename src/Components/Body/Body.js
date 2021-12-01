import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import LBody from './LBody';
import RBody from './RBody';


function Body() {
    return (
        <BodyDiv>
            <BodyStyle>
                <LBody />
                <RBody />
            </BodyStyle>
        </BodyDiv>

    );

}
export default Body;

const BodyDiv = styled.div`
    width : 100%;
    padding-left : 30px;
    display : flex;
    flex-direction : row;
    justify-content: flex-end;
    margin-bottom: 30px;
`;
const BodyStyle = styled.div`
    width :100%;
    height : 100vh;
    background: #364965;
    border-radius: 50px 0 0 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
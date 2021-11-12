import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Sensitivity from './Sensitivity';
import Results from './Results';
function RBody({controlSeek}) {

    return (
        <RBodyStyle>
            <Sensitivity/>
            <Results controlSeek = {controlSeek}/>
        </RBodyStyle>

    );

}
export default RBody;


const RBodyStyle = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding : 35px
`;



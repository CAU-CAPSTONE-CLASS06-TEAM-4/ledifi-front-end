import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Controller from './controller';
function LBody({seek}) {

    return (
        <LBodyStyle>
            <Controller seek = {seek}/>
        </LBodyStyle>
    );

}
export default LBody;

const LBodyStyle = styled.div`
    width: 65%;
    height: 100%;
    padding : 35px;
    border-right: 1px solid #FFFFFF;
`;

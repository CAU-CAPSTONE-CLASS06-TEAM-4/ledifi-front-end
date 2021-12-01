import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import InputSlider from './Slider';


function Sensitivity({ setSensitivity }) {

    return (
        <SensitivityStyle>
            <SensitivityTextBox>
                정적 기준 시간 (초)
            </SensitivityTextBox>
            <InputSlider setSensitivity={setSensitivity} />
        </SensitivityStyle>
    );

}
export default Sensitivity;


const SensitivityStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:flex-start;
    margin-bottom: 10px;
`;

const SensitivityTextBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 10px;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: #FFFFFF;
`;

const SensitivityResult = styled.div`
    color: #FF9393;
    margin-left: 10px;
`;




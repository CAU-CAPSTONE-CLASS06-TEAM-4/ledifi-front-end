import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import InputSlider from './Slider';


function Sensitivity() {

    return (
        <SensitivityStyle>
            <SensitivityTextBox>
                정적 기준 시간 (초)
            </SensitivityTextBox>
            <InputSlider />
        </SensitivityStyle>
    );

}
export default Sensitivity;


const SensitivityStyle = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:flex-start;
`;

const SensitivityTextBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 30px;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: #FFFFFF;
`;

const SensitivityResult = styled.div`
    color: #FF9393;
    margin-left: 10px;
`;




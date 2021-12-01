import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Sensitivity from './Sensitivity';
import Results from './Results';
import RequestResultButton from '../Button/Button';
import PropTypes from 'prop-types';
function RBody({ result, fps, setSensitivity, requestAgain, step }) {

    return (
        <RBodyStyle>
            <Sensitivity setSensitivity={setSensitivity} />
            {step === 2 ? <RequestResultButton text={'결과 재요청'} click={requestAgain} /> : <InactiveButton>결과 재요청</InactiveButton>}
            <Results
                sample_result={result}
                fps={fps}
            />
        </RBodyStyle>

    );

}
RBody.defaultProps = {
    result: [0],
    fps: 1
}
export default RBody;

const InactiveButton = styled.div`
      width: 100%;
    border-radius: 20px;
    border: 2px solid gray;
    padding : 15px 10px 15px 10px;
    background-color: #FFFFFF2E;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: gray;
    display: flex;
    flex-direction: row;
    align-items : center;
    justify-content: center;
`;
const RBodyStyle = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding : 35px;
`;




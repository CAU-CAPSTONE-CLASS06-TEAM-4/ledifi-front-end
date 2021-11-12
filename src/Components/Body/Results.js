import React, { useState, useRef, useEffect } from 'react';
import { flushSync } from 'react-dom';
import styled from 'styled-components';
import VideoObserver from './VideoObserver';

function Results({controlSeek}) {

    const handleButtonCliek = (e) => {
        console.log(e);
        VideoObserver.triggerEvent(e);
    }
    const ResultColor = {
        'silence': '#8096E7',
        'filler': '#E1A054'
    };

    const ResultName = {
        'silence': '정적',
        'filler': '간투사'
    };

    const ResultTimeStyle = styled.div`
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;     
        gap: 10px;
    `;


    const sample_result = [
        ['silence', 534, 723, 'transition'],
        ['silence', 923, 1054, 'writing'],
        ['silence', 3343, 3519, 'no_change'],
        ['silence', 5484, 5610, 'dot'],
        ['filler', 125, 139, 'no_change'],
        ['filler', 312, 333, 'no_change'],
        ['filler', 1391, 1411, 'writing']
    ];

    const FetchResultBox = ({ result, index }) => {
        return <ResultBoxStyle color={ResultColor[result[0]]} onClick = {()=>handleButtonCliek(30+index)}>
            {ResultName[result[0]]}
            <ResultTimeStyle>
                {result[1]} ~ {result[2]}
                <div />
                {result[2] - result[1]}s
            </ResultTimeStyle>
        </ResultBoxStyle>
    }

    return (
        <ResultStyle>
            {
                sample_result.map(
                    ((item,key) => <FetchResultBox result={item} key = {key} index = {key}/>)
                )
            }
        </ResultStyle>
    );

}
export default Results;


const ResultBoxStyle = styled.div`
    border-radius: 20px;
    width: 100%;
    height: 70px;
    background-color: ${props => props.color};
    color: white;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
`;

const ResultStyle = styled.div`
    width: 100%;
    height: 80%;
    border-radius: 20px;
    border: 2px solid white;
    padding : 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;



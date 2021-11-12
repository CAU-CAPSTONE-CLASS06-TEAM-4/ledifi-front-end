import React from 'react';
import styled, {keyframes} from 'styled-components';
import loading from '../../images/reload.svg';
function Loading() {
    return (
        <LoadingArea>
           <span>영상을 분석중입니다</span>
           <LoadingImg src = {loading} alt = ""/>
        </LoadingArea>
    );

}
export default Loading;


const LoadingArea = styled.div`
    span {
        background: linear-gradient(90deg, #8096E7 -2.45%, rgba(178, 14, 255, 0.54) 98.17%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    width: 100%;
    height: 500px;
    border: 3px solid #80A9E7;
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: bold;
    font-size: 24px;

    cursor: pointer;
`;

const rotate = keyframes`
	100% {
    	transform: rotate(360deg);
    }
`;

const LoadingImg = styled.img`
    width: 60px;
    height: 60px;
    margin-top: 30px;
    animation: ${rotate} 3s linear infinite;
`;



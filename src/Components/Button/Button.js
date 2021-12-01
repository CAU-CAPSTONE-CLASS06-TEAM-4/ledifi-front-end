import React from 'react';
import styled from 'styled-components';


const HeaderButtonStyle = styled.button` //최상단 헤더용 버튼
/* general style */
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: black;
    background-color: white;
    padding: 10px;
`;

export function HdButtonR({ text }) {
    return <HeaderButtonStyle>{text}</HeaderButtonStyle>;
}



const BodyHeaderButtonStyle = styled.button` //바디 상단헤더 버튼
    padding: 14px 30px;

    background: white;
    box-shadow: 0px 0px 20px 3px rgba(128, 169, 231, 0.87);
    border-radius: 20px;

    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    color: #A4A4A4;
`;


export function BodyHeaderButton({ text }) {
    return <BodyHeaderButtonStyle>{text}</BodyHeaderButtonStyle>;
}


const RequestResultButtonStyle = styled.button`
    width: 100%;
    border-radius: 20px;
    border: 2px solid white;
    padding : 15px 10px 15px 10px;
    background-color: #FFFFFF2E;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items : center;
    justify-content: center;
`;


export default function RequestResultButton({ text, click }) {
    return <RequestResultButtonStyle onClick={click}>{text}</RequestResultButtonStyle>;
}




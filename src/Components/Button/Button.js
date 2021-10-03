import React from 'react';
import styled, { css } from 'styled-components';
import FlexGrow from '../header/header';

const HeaderButtonR = styled.button` //최상단 헤더용 버튼
/* general style */
width: 120 px;
height: 34 px;
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 33px;
color: #ffffff;
background-color: #000000;

`;

function HdButtonR({ children, ...rest }) {
    return <headerButtonR {...rest}>{children}</headerButtonR>;
}

export default HeaderButtonR;


const BodyHdrbutton = styled.button` //바디 상단헤더 버튼
 padding-top: 14 px;
 padding-bottom : 15 px;
 padding-left : 35 px;
 padding-right : 35 px;
 border-radius: 20 px;
 border-color: 1 px #7c685c;
 border:none;
 outline:none;
 display: inline-flex;
 justify-content: flex-end;
 margin-right: 30 px;
 width: 193 px;
 height: 63 px;
 line-height: 33 px;
 font-family: 'Noto Sans CJK KR';
 font-style: normal;
 font-weight: 600;
 font-size: 24px;
 background-color: #000000;
 color: #A4A4A4;
 `;


function BodyHdrbutt({ children, ...rest }) {
    return <BodyHdrbutton {...rest}>{children}</BodyHdrbutton>;
}

export { BodyHdrbutton };


import React from 'react';
import styled, { css } from 'styled-components';
import FlexGrow from '../header/header';

const headerButtonR = styled.button`
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

function hdButtonR({ children, ...rest }) {
    return <headerButtonR {...rest}>{children}</headerButtonR>;
}

export default hdButtonR;

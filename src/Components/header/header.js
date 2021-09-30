import styled from "styled-components";
import React from 'react';
import Box from '@material-ui/core/Box';
import HdButtonR from "../Button/Button";
import BodyHdrbutton from "../Button/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function FlexGrow() {
    return (
        <div style={{ width: '100%' }}>
            <Box display="flex" p={1} bgcolor="#000000" color="#ffffff">
                <Box p={1} flexGrow={1} bgcolor="#000000">
                    <HdButtonR>Le Di Fi</HdButtonR>
                </Box>
                <Box p={1} bgcolor="#000000">
                    <HdButtonR>내 강의</HdButtonR>
                </Box>
                <Box p={1} bgcolor="#000000">
                    <HdButtonR>마이페이지</HdButtonR>
                </Box>
                <Box p={1} bgcolor="#000000">
                    <AccountCircleIcon />
                </Box>
            </Box>
        </div>
    );
}

const BodyHdCont = styled.div`
 width: 100%;
 background-color: #7c685c;
`;

export function BodyHeader() {
    return (
        <BodyHdCont>
            <BodyHdrbutton>새 강의 편집</BodyHdrbutton>
            <BodyHdrbutton>편집중인 강의</BodyHdrbutton>
        </BodyHdCont>
    );
}




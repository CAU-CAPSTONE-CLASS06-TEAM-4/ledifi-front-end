import styled from "styled-components";
import React from 'react';
import Box from '@material-ui/core/Box';
import hdButtonR from "../Button/Button";
import bodyHdbutton from "../Button/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function FlexGrow() {
    return (
        <div style={{ width: '100%' }}>
            <Box display="flex" p={1} bgcolor="#000000" color="#ffffff">
                <Box p={1} flexGrow={1} bgcolor="#000000">
                    <hdButtonR>Le Di Fi</hdButtonR>
                </Box>
                <Box p={1} bgcolor="#000000">
                    <hdButtonR>내 강의</hdButtonR>
                </Box>
                <Box p={1} bgcolor="#000000">
                    <hdButtonR>마이페이지</hdButtonR>
                </Box>
                <Box p={1} bgcolor="#000000">
                    <AccountCircleIcon />
                </Box>
            </Box>
        </div>
    );
}

const bodyHdCont = styled.div`
 width: 100%;
 background-color: #7c685c;
`;

export function bodyHeader() {
    return (
        <bodyHdCont>
            <bodyHdbutton>새 강의 편집</bodyHdbutton>
            <bodyHdbutton>편집중인 강의</bodyHdbutton>
        </bodyHdCont>
    );
}




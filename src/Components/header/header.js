import styled from "styled-components";
import React from 'react';
import Box from '@material-ui/core/Box';
import hdButtonR from "../Button/Button";

export default function FlexGrow() {
    return (
        <div style={{ width: '100%' }}>
            <Box display="flex" p={1} bgcolor="#000000">
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
                    <hdButtonR>icon1</hdButtonR>
                </Box>
            </Box>
        </div>
    );
}

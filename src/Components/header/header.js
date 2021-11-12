import styled from "styled-components";
import React from 'react';
import Box from '@material-ui/core/Box';
import {HdButtonR} from "../Button/Button";
import {BodyHeaderButton} from "../Button/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../../images/logo.svg';

const HeaderStyle = styled.div` 
    padding : 20px 40px;
    width: 100%;
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;


export function Header() {
    return (
        <HeaderStyle>
            <img src = {logo} style = {{width : 100}}/>
            {/* <HeaderMenu>
                <HdButtonR text = {"내 강의"}/>
                <HdButtonR text = {"마이페이지"}/>
            </HeaderMenu> */}
        </HeaderStyle>
    );
}

const BodyHeaderStyle = styled.div`
    width: 100%;
    margin-top: 80px;
    margin-bottom: 50px;
    background-color: white;
    display : flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const BodyHeaderMenu = styled.div`
    display : flex;
    flex-direction: row;
    align-items: center;
`;

const BodyHeaderLabel = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    color : black;
`;


export function BodyHeader() {
    return (
        <BodyHeaderStyle>
            <BodyHeaderLabel>
                <span style = {{color : '#E9559C'}}>김익명 </span>
                교수님 안녕하세요 :)
            </BodyHeaderLabel>
            <BodyHeaderMenu>
                <BodyHeaderButton text =  {"새 강의 편집"}/>
                <div style = {{marginRight : 30}}/>
                <BodyHeaderButton text = {"편집중인 강의"}/>
            </BodyHeaderMenu>
        </BodyHeaderStyle>
    );
}




import { List, Switch } from '@material-ui/core';
import Upload from './upload';
import React, { useState } from 'react';
import styled from 'styled-components';
import Loading from './loading';
import VideoPlayer from './VideoPlayer';
import { VideocamTwoTone } from '@mui/icons-material';


function Controller({seek}) {
    const [step, setStep] = useState(0);
    const [video, setVideo] = useState(null);

    const videoUploader = (e) => {
        setVideo((URL.createObjectURL(e))); 
        setStep(2);
    }

    const GetPage = () => {
        switch(step) {
            case 0 :
                return <Upload videoHandler = {videoUploader}/>;
            case 1 :
                return <Loading/>;
            case 2 :
                return <VideoPlayer videoFile = {video} seek = {seek}/>;
            default :
                return <Upload/>;
        }
    }

    const StepUi = () => {
        return <StepUiStyle>
            {Array.from(Array(3).keys()).map((index) => 
                <StepCircle key = {index} color = {index === step ? "#80A9E7" : '#A4A4A4'}/>
            )}
        </StepUiStyle>;
    }

    return (
        <BodyStyle>
            <Header>
                <TitleInput
                    type = "text" 
                    placeholder = "영상 제목을 입력해주세요" 
                    maxLength = {26} 
                />
            </Header>
            <GetPage/>
            <StepUi/>
        </BodyStyle>
    );

}
export default Controller;



const StepCircle = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 60px;
    background-color: ${props => props.color || '#A4A4A4'};
`;
const StepUiStyle = styled.div`
    width: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const BodyStyle = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom : 10px
`;

const TitleInput = styled.input`
    &::placeholder {
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 18px;
        color: white;
    }
    font-family: 'Noto Sans CJK KR';
    width: 50%;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    color: white;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-border-radius: 10px;
    outline: none;
    border : none;
`;

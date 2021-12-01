import { List, Switch } from '@material-ui/core';
import Upload from './upload';
import React, { useState } from 'react';
import styled from 'styled-components';
import Loading from './loading';
import VideoPlayer from './VideoPlayer';
import { VideocamTwoTone } from '@mui/icons-material';
import axios from 'axios';
import RBody from './RBody';

function Controller({ seek }) {
    const [step, setStep] = useState(0);
    const [video, setVideo] = useState(null);
    const [videofile, setVideofile] = useState(null);
    const [result, setResult] = useState([]);
    const [fps, setFps] = useState(1);
    const [second, setSecond] = useState(3);

    const videoUploader = (e) => {
        setVideofile(e);
        setVideo((URL.createObjectURL(e)));
        setStep(1);
        //console.log(e);
        const frm = new FormData()
        frm.append('file', e)
        frm.append('second', second)
        axios.post('fileUpload', frm, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(
            (response) => {
                let result_data = response.data.slice(1);
                setFps(response.data[0]);
                setResult(result_data);
                setStep(2);
            }

        );

    }

    const setSensitivity = (e, value) => {
        setSecond(value);
    }

    const requestAgain = () => {
        setStep(1);
        const frm = new FormData()
        frm.append('file', videofile)
        frm.append('second', second)
        axios.post('fileUpload', frm, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(
            (response) => {
                let result_data = response.data.slice(1);
                setFps(response.data[0]);
                setResult(result_data);
                setStep(2);
            }

        );

    }

    const GetPage = () => {
        switch (step) {
            case 0:
                return <Upload videoHandler={videoUploader} />;
            case 1:
                return <Loading />;
            case 2:
                return <VideoPlayer videoFile={video} seek={seek} />;
            default:
                return <Upload />;
        }
    }

    const StepUi = () => {
        return <StepUiStyle>
            {Array.from(Array(3).keys()).map((index) =>
                <StepCircle key={index} color={index === step ? "#80A9E7" : '#A4A4A4'} />
            )}
        </StepUiStyle>;
    }

    return (
        <BodyDiv>
            <BodyStyle>
                <LBodyStyle>
                    <Header>
                        <TitleInput
                            type="text"
                            placeholder="영상 제목을 입력해주세요"
                            maxLength={26}
                        />
                    </Header>
                    <GetPage />
                    <StepUi />
                </LBodyStyle>
                <RBody result={result} fps={fps} setSensitivity={setSensitivity} requestAgain={requestAgain} step={step} />
            </BodyStyle>
        </BodyDiv>
    );

}
export default Controller;


const BodyDiv = styled.div`
    width : 100%;
    padding-left : 30px;
    display : flex;
    flex-direction : row;
    justify-content: flex-end;
    margin-bottom: 30px;
`;


const BodyStyle = styled.div`
    width :100%;
    height : 100vh;
    background: #364965;
    border-radius: 50px 0 0 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

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
const LBodyStyle = styled.div`
    width: 65%;
    height: 100%;
    padding : 35px;
    border-right: 1px solid #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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

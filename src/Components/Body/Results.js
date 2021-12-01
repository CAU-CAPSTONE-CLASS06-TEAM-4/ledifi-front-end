import React, { useState, useRef, useEffect } from 'react';
import { flushSync } from 'react-dom';
import styled, { css } from 'styled-components';
import check from '../../images/check.svg';
import check_active from '../../images/check_active.svg';
import VideoObserver from './VideoObserver';
import RequestResultButton from '../Button/Button';
import axios from 'axios';
function Results({ sample_result, fps }) {
    const [videoResult, setVideoResult] = useState('');
    const [toggle, setToggle] = useState(new Array(1000).fill(true));
    const [step, setStep] = useState(0);
    //sample result의 길이만큼 배열 생성 (토글 사용을 위한 배열) ex) [false, false, false, false]
    // [false, true, false ...]이런식으로 true된 부분은 선택 효과를 보여주도록 할거임

    const handleButtonCliek = (second, index) => {
        console.log(sample_result);
        //버튼 클릭했을때 실행되는 함수 (second는 이동할 초, index)
        VideoObserver.triggerEvent(second); //비디오 플레이어 쪽으로 이동할 second변수 보내줌
        //클릭한 버튼의 index에서 토글을 true로 바꾸는 과정
        let temp = [...toggle];
        temp[index] = !toggle[index];
        setToggle(temp);
    }

    const ResultColor = {
        'silence': '#8096E7',
        'filler': '#E1A054'
    };

    const ResultName = {
        'silence': '정적',
        'filler': '간투사'
    };

    const onSubmit = () => {
        setStep(1);
        let temp = sample_result;
        for (let i = 0; i < sample_result.length; i++) {
            temp[i].push(toggle[i]);
        }

        const frm = new FormData()
        frm.append('result', JSON.stringify(temp))
        axios.post('edit', frm, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(
            (response) => {
                setStep(2);
                setVideoResult(response.data);
            }

        );

    }


    const FetchResultBox = ({ result, index }) => {
        let start = Math.round((result[1] / fps) * 10) / 10;
        let end = Math.round((result[2] / fps) * 10) / 10;
        let start_string = new Date(start * 1000).toISOString().substr(11, 8);
        let end_string = new Date(end * 1000).toISOString().substr(11, 8);
        let duration = Math.round((end - start) * 10) / 10;

        //ResultBoxStyle에 border변수에 toggle[index] => 해당 버튼의 toggle값이 true인지 false인지 넣어주고, true면 테두리 그려주도록
        //아래 버튼도 마찬가지로 삼항연산자로 true값이면 칠해진 아이콘을 표시
        return <ResultBoxStyle
            color={ResultColor[result[0]]}
            onClick={() => handleButtonCliek(start, index)}
            border={toggle[index]}
        >
            <ResultDivStyle>
                {ResultName[result[0]]}
                <ResultTimeStyle>
                    {start_string} ~ {end_string}
                    <div style={{ width: 20 }} />
                    {duration}s
                </ResultTimeStyle>
            </ResultDivStyle>
            {
                toggle[index] ? <img src={check_active} /> : <img src={check} />
            }
        </ResultBoxStyle>
    }


    const FetchButton = () => {
        if (step == 0) {
            return <RequestResultButton text={'편집 완료'} click={onSubmit} />;
        } else if (step == 1) {
            return <RequestResultButton text={'영상 가공중'} />;
        } else {
            return <a href={videoResult} target="_blank" download><RequestResultButton text={'다운로드'} /></a>
        }
    }

    return (
        <>
            <ResultStyle>
                <ResultListStyle>
                    {
                        fps > 1 && sample_result.map(
                            ((item, key) => <FetchResultBox result={item} key={key} index={key} />)
                        )
                    }
                </ResultListStyle>
            </ResultStyle>
            <FetchButton />
        </>
    );

}
export default Results;


const ResultTimeStyle = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;

const ResultDivStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const ResultBoxStyle = styled.div`
    border-radius: 20px;
    width: 100%;
    height: 70px;
    background-color: ${props => props.color};
    color: white;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    ${props => props.border === true && css`
        border: 2px solid white;
    `}
`;

const ResultStyle = styled.div`
    width: 100%;
    height: 70%;
    border-radius: 20px;
    border: 2px solid white;
    padding : 20px 10px 0px 20px;
    background-color: #FFFFFF2E;
    margin-top: 20px;
    margin-bottom: 15px;
`;

const ResultListStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;
    padding-right: 10px;
`;



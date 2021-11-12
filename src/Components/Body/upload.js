import React, { useState, useRef } from 'react';
import styled from 'styled-components';

function Upload({videoHandler}) {
    const [preview, setPreview] = useState("");
    const hiddenFileInput = useRef(null);


    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    function handleImageUpload (e) {
        videoHandler(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    }


    return (
        <UploadArea onClick = {handleClick}>
            {"클릭해서 동영상 업로드"}
            <VideoInput
                type="file"
                accept = ".mp4,.avi,.wmv,.mov"
                ref={hiddenFileInput} 
                onChange={handleImageUpload}
            />
        </UploadArea>
    );

}
export default Upload;


const UploadArea = styled.div`
    width: 100%;
    height: 80%;
    border: 3px dashed #A4A4A4;
    border-radius: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #80A9E7;

    cursor: pointer;
`;

const VideoInput = styled.input`
    //display: none;
`;

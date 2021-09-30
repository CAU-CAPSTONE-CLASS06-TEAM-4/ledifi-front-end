import styled from "styled-components";
import React from 'react';
import FlexGrow from "../Components/header/header";
import bodyHeader from "../Components/header/header";


const pageContainer = styled.div`
 width: 1000 px;
 background-color: #7c685c;
 display: flex;
 `;


function fileUploadPage() {
    return (
        <pageContainer>
            <bodyHeader />
        </pageContainer>
    )


}

export default fileUploadPage;

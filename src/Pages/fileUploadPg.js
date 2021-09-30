import styled from "styled-components";
import React from 'react';
import FlexGrow from "../Components/header/header";
import BodyHeader from "../Components/header/header";


const PageContainer = styled.div`
 width: 1000 px;
 background-color: #7c685c;
 display: flex;
 `;


function FileUploadPage() {
    return (
        <PageContainer>
            <FlexGrow />
            <BodyHeader />
        </PageContainer>
    )


}

export default FileUploadPage;

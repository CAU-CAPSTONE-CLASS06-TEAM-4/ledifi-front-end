import styled from "styled-components";
import React from 'react';
import { Header, BodyHeader } from "../Components/header/header";
import Controller from '../Components/Body/controller'


const PageContainer = styled.div`
    width: 100%;
    margin : 0 auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 `;


function FileUploadPage() {
    return (
        <PageContainer>
            <Header />
            <BodyHeader />
            <Controller />
        </PageContainer>
    );
}

export default FileUploadPage;

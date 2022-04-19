import React from 'react'
import { ContainerS } from '../SalesCommon/CommonStyling'
import HOC from '../SalesCommon/HOC'
import styled from 'styled-components'
import Header from '../SalesCommon/Header'

const Wrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
`

const Content = styled.div`
width: 50%;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid #ccc;
border-radius: 6px;

span{
    margin-bottom: 5px;
}

button{
    margin-top: 10px;
    border: none;
    background: #00bcd4;
    color: #fff;
    padding: 7px 0;
    border-radius: 6px;

}

`

const UploadDocuments = () => {
  return (
    <>
        <ContainerS>
            <Header cname={'Salers Document'} />
            <Wrapper>
               
                <Content>
               
                    
            <span>Doc 1</span>
            <input type="file" />
            <span>Doc 2</span>
            <input type="file" />
            <span>Doc 3</span>
            <input type="file" />
            <span>Doc 4</span>
            <input type="file" />

            <button>Upload</button>
                    
            </Content>


            </Wrapper>

        </ContainerS>
    </>
  )
}

export default HOC(UploadDocuments)
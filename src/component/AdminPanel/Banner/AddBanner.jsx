import React from 'react'
import { ContainerS } from '../Common/CommonStyling'
import styled from 'styled-components'
import HOC from '../Common/HOC'
import Header from '../Header'

const MainDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;

    button{
        padding: 6px 20px;
        border-radius: 999px;
        cursor: pointer;
        border: none;
        background: #00bcd4;
        color: #fff;
    }
`
const Wrapper = styled.div`
    width: 50%;
    margin: 20px;
    border: 1px solid #ccc;
    border-radius: 999px;
    padding: 10px;


    span{
        margin: 20px ;

        ::after{
            content: '*';
            color: red;
        }
    }
`

const AddBanner = () => {
  return (
    <>
    <ContainerS>
        <Header cname={"Add-Banner"}/>
        <MainDiv>
            <Wrapper>
                <span>Select A Banner</span>
                <input type="file" accept='image/*'/>      
            </Wrapper>
            <button>Upload</button>   

        </MainDiv>
    </ContainerS>

    </>
  )
}

export default HOC(AddBanner)
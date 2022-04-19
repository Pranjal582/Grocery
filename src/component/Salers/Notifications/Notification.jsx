import React from 'react'
import { ContainerS } from '../SalesCommon/CommonStyling'
import HOC from '../SalesCommon/HOC'
import styled from 'styled-components'


const MainContainers = styled.div`
    width: 100%;
    display: flex;
    padding: 20px;
`
const SmallContainer = styled.div`
    width: 30%;
    min-height: 100px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;

    @media screen and (max-width: 568px){
        width: 100%;
    }

    h5{
        font-size: 1rem;
        color: #fa4970;
    }
    h6{
        font-weight: 400;
        font-size: 0.9rem;
        color: #808080;
    }
    p{
        font-size: 0.8rem;
        color: green;
    }

    button{

        border: none;
        color: #fff;
        border-radius: 5px;
        padding: 5px 10px;
        margin: 0 10px;
        background-color: #158a3e;

    }
    &:nth-child(2){
           
           color: red;
       }
`

const Notification = () => {
  return (
    <>
    <ContainerS>
        <h4>Notifications</h4>
        <MainContainers>
            <SmallContainer>
                <h5>Notification 1</h5>
                <h6>Details : Lorem ipsum dolor sit amet . Repudiandae aliquid vitae provident distinctio perspiciatis impedit minus fugiaquod eaque. </h6>
                <p>Time :  12:30 PM </p>
                <button >Accept</button>
                <button style={{backgroundColor: '#ff0000'}}>Reject</button>
            </SmallContainer>
        </MainContainers>
    </ContainerS>
    </>
  )
}

export default HOC(Notification)
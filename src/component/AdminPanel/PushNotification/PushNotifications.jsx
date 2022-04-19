import React from 'react'
import { ContainerS } from '../Common/CommonStyling'
import HOC from '../Common/HOC'
import Header from '../Header'
import styled from 'styled-components'

const MainContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    padding: 20px;
`

const Wrpper = styled.div`
  width  :50%; 

  textarea,select{
      width: 100%;
      margin: 10px 0px;
      padding: 5px 10px;
      border-radius: 3px;
      border: 1px solid #ccc;
      outline: none;
     
  }
  span{
      color: #4d4c4c;
  }
   button{
       cursor: pointer;
       background-color: #9e9af0;
       color: #fff;
       border: none;
       border-radius: 2px;
       padding: 6px 30px;
   }
  
  
`

const PushNotification = () => {
  return (
    <>
        <ContainerS>
            <Header cname={"Create Discount"}/>
            <MainContainer>
                <Wrpper>
                    <span>Select Vendor</span>

                    <select >
                        <option value="2">Select a Vendor</option>
                        <option value="1">Vendor</option>
                        <option value="3">Vendor</option>
                        <option value="4">Vendor</option>
                        <option value="5">Vendor</option>
                        <option value="6">Vendor</option>
                    </select>

                    <span> Notification </span>
                    <textarea type="text" name="" id="" placeholder='Enter Message' />
                    <button>Send</button>

                </Wrpper>
            </MainContainer>

        </ContainerS>

    </>
  )
}

export default HOC(PushNotification)
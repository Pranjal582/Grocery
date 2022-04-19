import React from 'react'
import { ContainerS } from '../../Vendor/CommonStyling'
import styled from 'styled-components'
import Online from './Online'
import Ofline from './Ofline'
import HOC from '../../Vendor/HOC'

const MainContainer = styled.div`
    
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    
`
const Left = styled.div`
width: 50%;
padding: 10px;

@media screen and (max-width: 568px){
    width: 100%;
  }
  
`

const Right = styled.div`

  width: 50%;
  padding: 10px;

`

const OflineOnlineHome = () => {

  return (
    <>
    <ContainerS>
        <MainContainer>

        <Left > <span> Online Sale Product List</span>  <Online/> </Left>
            <Right > <span> Offline Sale Product List </span>  <Ofline/> </Right> 

           
          

        </MainContainer>
    </ContainerS>
    </>
  )
}

export default HOC(OflineOnlineHome)
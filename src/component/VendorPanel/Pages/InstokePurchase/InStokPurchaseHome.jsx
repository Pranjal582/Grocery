import React from 'react'
import { ContainerS } from '../../Vendor/CommonStyling'
import HOC from '../../Vendor/HOC'
import styled from 'styled-components' 
import InStoke from './InStoke'
import PurchasList from './PurchasList'


const MainContainer = styled.div`
display: flex;
flex-wrap: wrap;

`
const Left = styled.div`
width: 50%;
padding: 10px;
  
`

const Right = styled.div`

  width: 50%;
  padding: 10px;

`


const InStokPurchaseHome = () => {
  return (
    <>
      <ContainerS>
          <MainContainer>
            <Left > <span> InStoke</span> <InStoke/> </Left>
            <Right > <span> Purchase List</span> <PurchasList/> </Right>    
          </MainContainer>      
      </ContainerS>
    </>
  )
}

export default HOC(InStokPurchaseHome)
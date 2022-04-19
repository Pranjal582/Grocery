import React from 'react'
import { ContainerS } from '../Common/CommonStyling'
import styled from 'styled-components'
import HOC from '../Common/HOC'
import Charts from './Charts'
import Header from '../Header'

const MainContainers = styled.div`

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    height: calc(100vh - 100px);

    @media screen and (max-width: 678px) {

      padding: 10px;

    }

`

const ProductOrderStatistic = () => {
  return (
    <>
    <ContainerS>
        <Header cname={"Product Order Statistics"}/>
        <MainContainers>
            <Charts/>

        </MainContainers>
    </ContainerS>
    </>
  )
}

export default HOC(ProductOrderStatistic)
import React from 'react'


import styled from 'styled-components'
import { ContainerS } from '../Vendor/CommonStyling'
import Header from '../Vendor/Header'
import HOC from '../Vendor/HOC'
import ComplainTable from './ComplainTable'

const Complain = () => {
  return (
    <>
        <ContainerS>
            <MainContainer>
            <Header cname={"Complain"}/>
                <ComplainTable/>
                <ComplainTable/>
           
           
            </MainContainer>
        </ContainerS>
    </>
  )
}

export default HOC(Complain)

const MainContainer = styled.div`
    width: 100%;

`


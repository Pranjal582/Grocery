import React from 'react'
import styled from 'styled-components'
import { ContainerS } from '../Vendor/CommonStyling'
import HOC from '../Vendor/HOC'
import CommissionListTable from './CommissionListTable'

const CommissionList = () => {
  return (
    <>

    <ContainerS>
        <MainContainer>
            <h5>Commission List</h5>
            <CommissionListTable/>
        </MainContainer>
    </ContainerS>
 
    </>
  )
}

export default HOC(CommissionList)

const MainContainer = styled.div`
    width: 100%;
`
import React from 'react'
import { ContainerS } from '../../Vendor/CommonStyling'
import HOC from '../../Vendor/HOC'
import styled from 'styled-components'
import SuppliersReturn from './SuppliersReturn'

const MainContainers  = styled.div`
    width: 100%;
    display: flex;

    .leftSide{
        width: 50%;
        padding: 10px;
    }
`

const Returns = () => {
  return (
    <>
        <ContainerS>
            <MainContainers>

                <div className="leftSide">
                    <h3>Returns By Customers</h3>
                    <SuppliersReturn/>
                </div>
                <div className="leftSide">
                <h3>Returns By Suppliers </h3>

                <SuppliersReturn/>
                </div>
                
               

            </MainContainers>

        </ContainerS>
    </>
  )
}

export default HOC(Returns)
import React from 'react';
//material ui data table
import styled from 'styled-components';
import { ContainerS } from '../Vendor/CommonStyling';
import HOC from '../Vendor/HOC';
import OrderList from './OrderList'
import Header from '../Vendor/Header'



function VendorOrder(props) {

    // for pagination hadler 

    const MainContainer = styled.div`
    width: 100%;

    `


    return (
        <ContainerS>
            <MainContainer >
                <Header cname={"Orders"}/>
    
                <OrderList/>             
                   
            </MainContainer>
        </ContainerS>
    )
}

export default HOC(VendorOrder)

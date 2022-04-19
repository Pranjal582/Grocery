import React from 'react';
import styled from 'styled-components';
import { ContainerS } from '../Vendor/CommonStyling';
import Cards from './Cards/Cards'
import Statistics from './Statistics/Statistics';
import HOC from '../Vendor/HOC';

function VendorMainDashBord() {

const MainContainer = styled.div`
    width: 100%;  
    `
const Wrapper = styled.div`
    border: 1px solid #c6c6cc;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;

    h4{
        margin: 20px 0;
    }

`
    return (
        <ContainerS>
            <MainContainer >
                <Cards/>
                <Wrapper>
                    <Statistics/>
                                  
                </Wrapper>             
            </MainContainer>
        </ContainerS>
    )
}

export default HOC(VendorMainDashBord)

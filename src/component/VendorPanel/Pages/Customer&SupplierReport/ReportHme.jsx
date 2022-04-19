import React from 'react'
import HOC from '../../Vendor/HOC'
import CustomerChart from './CustomerChart'
import SupplierChart from './Suppliers'
import styled from 'styled-components'

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

`
const CustomerReport= styled.div`
    width: 50%;
    padding: 10px;
`


const Wrapper = styled.div`
    width: 100%;
    border: 1px solid lightblue;
    height: 300px;
    -webkit-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
position: relative;
border-radius: 5px;

background-image: linear-gradient(to right, #f3f6fb, #edf0f5, #e7eaef, #e2e5ea, #dcdfe4, #dcdfe3, #dcdee3, #dcdee2, #e2e3e6, #e7e8ea, #ededee, #f2f2f2);


`

const ReportHme = () => {
  return (
    <>
    <Content>
        <CustomerReport>
             <h3>Customer Report</h3>
            <Wrapper>
                 <CustomerChart/>
            </Wrapper>
        </CustomerReport>
        <CustomerReport>
                 <h3>Suppliers Reports</h3>
            <Wrapper>    
                 <SupplierChart/>
            </Wrapper>
        </CustomerReport>
    </Content>
    </>
  )
}

export default HOC(ReportHme)
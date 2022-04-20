import React from 'react'
import HOC from '../Vendor/HOC'
import Header from '../Vendor/Header'
import {  ContainerS } from '../Vendor/CommonStyling'
import styled from 'styled-components'
import { Data } from './Data'
import { Link } from 'react-router-dom'

const Contents = styled.div`
    width: 100%;

`

const PaymentGateway = () => {
  return (
    <>
    <ContainerS>
        <Header cname={"Payment Gateway"} />
        <Contents class="table-responsive">
        <table  class="table table-sm" >
  <thead  class="bg-info">
    <tr >
      <th scope="col">#</th>
      <th scope="col">Gateway name</th>
      <th scope="col">Status</th>
      <th scope="col">Transactions</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {Data.map((data =>(

    <tr key={data.id} >
      <th scope="row"> {data.id} </th>
      <td>Paypal</td>
      <td  >
          <span style={{color : "#fff" ,  borderRadius: '3px' ,padding:"2px 8px", backgroundColor: data.status === true ? 'green' : 'red'}}>
              {data.status === true ? 'Active' : 'Inactive'}
            </span>   
        </td>
      <td> 
          <Link to='/vendor/payment-gateway-details'> view transactions </Link>
         </td>
      <td >
        <button className='TableBtn' > {data.btn} </button>
        <button className='TableBtn' > {data.btn2} </button>
      </td>
    </tr>
      )))}

  </tbody>
</table>

        </Contents>

    </ContainerS>


    </>
  )
}

export default HOC(PaymentGateway)
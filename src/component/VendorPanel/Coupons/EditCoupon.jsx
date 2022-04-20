import React from 'react'
import { ContainerS } from '../Vendor/CommonStyling'
import HOC from '../Vendor/HOC'
import styled from 'styled-components'
import Header from '../Vendor/Header'

const ContentWrapper =  styled.div`

    width: 80%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* height: calc(100vh - 60px); */
    flex-direction: column;
    /* padding: 20px; */

    

    input{
        margin: 10px 0;
        width: 50%;
        outline-offset: 3px;
        outline-color: blueviolet;
        padding: 3px 8px;
        border-radius: 3px ;
        border: 1px solid #ccc;

    }

    button{
      background-color:#21b53f ;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 188px;
      padding: 6px 0;
    }

`

const EditCoupon = () => {
  return (
    <>
    <ContainerS>
      <Header cname={'Edit Coupons'}  />
        <ContentWrapper>
            <input type="text" placeholder='Coupon Code' required />
            <input type="text" placeholder='Enter Discount' required />
            <input type="text" placeholder='From' required />
            <input type="text" placeholder='To' required />
            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
       
        <button>Edit Coupons</button>

        </ContentWrapper>
    </ContainerS>
    </>
  )
}

export default HOC(EditCoupon)
import React from 'react'
import { ContainerS } from '../Vendor/CommonStyling'
import Header from '../Vendor/Header'
import HOC from '../Vendor/HOC'
import CouponList from './CouponsList'

const Coupon = () => {
  return (
    <>
    <ContainerS>
        <Header cname={"Coupons-List"} needaddbtn={true} btn={"Create Coupon"}/>
        <CouponList/>

    </ContainerS>
    </>
  )
}

export default HOC(Coupon)
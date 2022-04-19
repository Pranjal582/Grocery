import React from 'react'
import { ContainerS } from '../Common/CommonStyling'
import HOC from '../Common/HOC'
import Header from '../Header'
import VendorList from './VendorList'

const VendorHome = () => {
  return (
    <>
        <ContainerS>
            <Header cname={"Total Vendor List"}/>
            <VendorList/>
        </ContainerS>

    </>
  )
}

export default HOC(VendorHome)
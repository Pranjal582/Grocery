import React from 'react'
import PartnerListTable from './DeliveryPartnerList'

import Header from '../Header';
import HOC from '../Common/HOC';
import { ContainerS } from '../Common/CommonStyling';


const AdminDeliveryHome = () => {


  return (
    <>
        <ContainerS>
            <Header cname={"Delivery Partner List"} needaddbtn={true} btn={"Add Partner"} pathname="/" / >
            <PartnerListTable/>
        </ContainerS>

    </>
  )
}

export default HOC(AdminDeliveryHome)
import React from 'react'
import { ContainerS } from '../Vendor/CommonStyling'
import Header from '../Vendor/Header'
import HOC from '../Vendor/HOC'
import UseList from './UserList'

const UsersHome = () => {
  return (
    <>
        <ContainerS>
            <Header cname={"Total Vendor List"}/>
            <UseList/>
        </ContainerS>
    </>
  )
}

export default HOC(UsersHome)
import React from 'react'
import styled from 'styled-components'
import { ContainerS } from '../Vendor/CommonStyling'
import Header from '../Vendor/Header'
import HOC from '../Vendor/HOC'

const Conatainer = styled.div`

width: 100%;

display: flex;
justify-content: center;

`

const Inputs = styled.div`
width: 100%;
display: flex;
flex-direction: column;

input{
  width: 50%;
  padding:5px 10px ;
  border-radius: 10px;
  outline: none;
  border: 1px solid lightgray;
}
lebel{
  margin: 10px 0;
}

button{
  width: 188px;
  padding: 6px 0;
  border: none;
  cursor: pointer;
  margin: 30px 0;
  background-color: #0a3f15;
  color: white;
}

`

const AddProduct = () => {
  return (
    <>
    <ContainerS>
        <Header cname={"Add Product"} />
        
        <Conatainer>
            <Inputs>
            <lebel>
                Product Name
            </lebel>
            <input type="text" />       
            <lebel>
                Categories
            </lebel>
            <input type="text" />       
            <lebel>
               Price
            </lebel>
            <input type="number" />       
            <lebel>
               Product Images
            </lebel>
            <input type="file" /> 

            <button >Submit</button>      
            </Inputs>
        </Conatainer>
    </ContainerS>

    </>
  )
}

export default HOC(AddProduct)
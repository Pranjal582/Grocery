import React from 'react'

import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import HOC from '../Vendor/HOC'

const Container = styled.div`
  width: 100%;
  margin-top: 65px;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid ;
  height: calc(100vh - 65px);

 p, span{
    padding: 3px 10px ;
    border: 1px solid lightblue;
    outline-color: blueviolet;
  }


`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px;
  cursor: pointer;
`

const SmallContainer = styled.div`
  width: 230px;
  height: 300px;
  border: 1px solid lightgray;
  border-radius: 2px;
  position: relative;
  
`

const Name = styled.div`
  width: 100%;
  text-align: center;
`
const Images = styled.div`
  width: 100%;
  height: 100%;
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  
  }
`

const DescriptionBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h5{
    padding: 8px;
  }

  button{
    border: none;
    padding: 5px 20px;
    color: #fff;
    background-color: #188cc2;
    cursor: pointer;
    outline: none;
   
  }


 
`

const SingleProductsDetails = () => {

  const location = useLocation()
  console.log("location",location.state)
  const name = location.state.name;
  const price = location.state.price;
  const image = location.state.img;

  return (
    <>
      <Container>
        <Wrapper>
          <SmallContainer>
            <Images>
                <img src={image} alt="" />
            </Images>        
          </SmallContainer>
        </Wrapper>
        <Name >Product Name : <span contenteditable="true">{name}</span> </Name>      
        <DescriptionBox>
        <h5 >Price : <span contenteditable="true"> {price} </span></h5>
        <h5 >Descriptions</h5>
        <p contenteditable="true">
          Apple AirPods (2nd Gen)
        </p>
        <button>Save</button>
        </DescriptionBox>

      </Container>
    </>
  )
}

export default HOC(SingleProductsDetails)
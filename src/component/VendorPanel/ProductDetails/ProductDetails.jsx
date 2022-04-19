import React from 'react'
import styled from 'styled-components'
import { Rating } from '@mui/material'
import { useNavigate } from 'react-router'
import HOC from '../Vendor/HOC'
import { ContainerS } from '../Vendor/CommonStyling'

import Header from '../Vendor/Header'

const MainContainers = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
`
const SmallContainers = styled.div`
    width: 250px;
    height: 320px;
    border: 1px solid lightblue;
    display: flex;
    border-radius: 7px;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    justify-content:center ;
    margin-bottom: 10px;

    @media screen and (max-width:768px){
        width: 180px;
        height: 240px;
    }

    button{
        cursor: pointer;
        padding: 5px 10px;
        border: 0;
        border-radius: 3px;
        background-color: #17a2b8;
        color: #fff;
    }
      
`
const Images = styled.div`
    width: 100%;
    height: 70%;

    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

const BtnDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`


const ProductDetails
 = () => {

    const data = [
        {
            id: 1,
            img : 'https://m.media-amazon.com/images/I/71NLN1HgFkL._AC_SL1500_.jpg',
            rating : 3.5,
            reviewhead : 'Good Product',
            name : "airpods",
            price : '$1100',
            

           
        },
        {
            id: 2,
            img : ' https://www.aptronixindia.com/media/catalog/product/1/1/11-inch128gbipadprowi-ficelluar-spacegrey.png',
            rating : 5,
            price : '$1100',
            name : "airpods"
        },
        {
            id: 3,
            img : 'https://m.media-amazon.com/images/I/71NLN1HgFkL._AC_SL1500_.jpg',
            rating : 3.5,
            price : '$1100',
            name : "airpods"
        },
        {
            id: 4,
            img : 'https://m.media-amazon.com/images/I/71NLN1HgFkL._AC_SL1500_.jpg',
            rating : 3.5,
            price : '$1100',
            name : "airpods"
        },
        {
            id: 5,
            img : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_IN?wid=1280&hei=1190&fmt=jpeg&qlt=80&.v=1632948896000',
            rating : 3.5,
            price : '$1100',
            name : "airpods"
        },
        {
            id: 6,
            img : 'https://m.media-amazon.com/images/I/71NLN1HgFkL._AC_SL1500_.jpg',
            rating : 3.5,
            price : '$1100',
            name : "airpods"
        },
        {
            id: 7,
            img : 'https://m.media-amazon.com/images/I/71NLN1HgFkL._AC_SL1500_.jpg',
            price : '$1100',
            rating : 3.5
        },
        {
            id: 8,
            img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7EFGx7rmsP_QzdovN24QCS6IquBhNt_eF7-x7P3Ms0ELDtUdhtCxM4NpG3nOnaqDIWKk&usqp=CAU',
            rating : 3.5
        },
        {
            id: 9,
            img : 'https://m.media-amazon.com/images/I/71NLN1HgFkL._AC_SL1500_.jpg',
            rating : 3.5
        },
]

    const navigate = useNavigate()
  return (
    <>
    <ContainerS>
       <Header cname={"Products"} btn="Add Product" needaddbtn={true} pathname="/vendor/vendor-add-product"/>
        <MainContainers>
            {data.map((items )=>(

            <SmallContainers key={items.id}>
                <Images>
                    <img src={items.img} alt="" />
               </Images>
                <span>Product name : <span>{items.name} </span></span>
                <span>Price : <span>{items.price} </span></span>
                <span><Rating name="half-rating-read" defaultValue={items.rating} precision={0.5} readOnly /></span>

                <BtnDiv>

                <button onClick={()=>navigate('/vendor/product-single-details',{state:items})}>Details</button>
                <button onClick={()=>navigate('/vendor/review',{state:items})}>review</button>
                </BtnDiv>

            </SmallContainers>
            ))}
        </MainContainers>
    </ContainerS>
    </>
  )
}

export default HOC(ProductDetails)
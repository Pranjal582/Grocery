import React from 'react'
import { ContainerS } from '../Common/CommonStyling'
import Header from '../Header'
import styled from 'styled-components'
import HOC from '../Common/HOC'
import { Tooltip } from '@material-ui/core'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';


const MainContainers = styled.div`
    
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

const Wrapper = styled.div`
    width: 50%;
    padding: 10px;
    height: 200px;
    position: relative;
    
    span{
        position: absolute;
        right: 10px;
        bottom: 20px;
       
    }
`
const Banners = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Data = [
    {
        id: 1,
        img : "https://img.freepik.com/free-psd/digital-marketing-facebook-banner-template_237398-233.jpg?w=2000"},
    {
        id: 2,
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaZZk7x3AmC-M0u4ywpmUwlDz6BdU2q5YJg&usqp=CAU"},
    {
        id: 3,
        img : "https://img.freepik.com/free-psd/digital-marketing-facebook-banner-template_237398-233.jpg?w=2000"},
    {
        id: 4,
        img : "https://img.freepik.com/free-psd/digital-marketing-facebook-banner-template_237398-233.jpg?w=2000"},
]

const Banner = () => {

  return (
    <>
    <ContainerS>
        <Header cname={"Banners"} btn={'Add Banner'} needaddbtn={true} pathname='/add-banner'/>
        <MainContainers>

            {Data.map((elm=>(

            <Wrapper key={elm.id} >
                <Banners><img src={elm.img} alt="" /></Banners>
                <span>
                    <Tooltip title="Delete">
                        <IconButton  >
                            <DeleteIcon style={{ color: 'red'}} />
                        </IconButton>
                    </Tooltip>
                </span>
            </Wrapper>
            )))}

      </MainContainers>
    </ContainerS>
    </>
  )
}

export default HOC(Banner)
import React from 'react'
import styled from 'styled-components'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import{ useNavigate} from 'react-router-dom'

const Container = styled.div`
width: 100%;

background-color: #f0f4fa;
border-radius: 10px;
padding: 20px;


`
const MainContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`
const SmallCards = styled.div`
    width: 280px;
    height: 120px;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 10px;
    -webkit-box-shadow: 0px 1px 2px 1px rgba(186,175,186,1);
    -moz-box-shadow: 0px 1px 2px 1px rgba(186,175,186,1);
    box-shadow: 0px 1px 2px 1px rgba(186,175,186,1);
    position: relative;
    /* background-color: #96ecf2; */
    cursor: pointer;
    margin-bottom: 30px;
    transition: all 0.3s ease-in-out;

    :nth-child(1){
        background-image: linear-gradient(to right, #e1e1e1, #dfdfe0, #dddddf, #dbdcde, #d8dadd, #d7dbe0, #d6dbe2, #d4dce5, #d4dfeb, #d3e2f2, #d3e6f9, #d2e9ff);
    }

    :nth-child(4){
        background-image: linear-gradient(to right, #e1e1e1, #dfdfe0, #dddddf, #dbdcde, #d8dadd, #d7dbe0, #d6dbe2, #d4dce5, #d4dfeb, #d3e2f2, #d3e6f9, #d2e9ff);    }
    :nth-child(3){
        background-image: linear-gradient(to top, #f6f0f4, #ebe6eb, #dfdce2, #d3d2d8, #c7c8cf, #c4c8d2, #bfc9d5, #bacad7, #b9d6e4, #b6e3ef, #b4f0f5, #b6fcf8);    }
        color: green;
:hover{
    transform: scale(1.1);
}

span{
    position: absolute;
    left: 30px;
    top: 20px;
    color: #757a7a;
    font-size: 2.2rem;
    font-weight: 700;
}
h6{
    position: absolute;
   top: 80%;
   left: 50%;
   transform: translate(-50%, -50%);
   font-size: 1.2rem;
   font-weight: 700;
   color: green;
   z-index: 2;

    
}
img{
    width: 100px;
    position: absolute;
    right: 10px;
    bottom: 10px;
}

@media screen and (max-width: 600px){
    width: 100%;
}

`

const Cards = () => {
    const navigate = useNavigate();
  return (
    <>
    <Container>
        <MainContent>
            <SmallCards  onClick={() => navigate("#")}>
                <span>199</span>
                <h6>Total Products</h6>

                <ShoppingBasketOutlinedIcon style={{position :'absolute', right: '10px', bottom : '10px', fontSize : '100px', color : '#ceebee', zIndex: '1', opacity: '0.8'}}/>

            </SmallCards>
            <SmallCards style={{
                
                }} onClick={() => navigate("/categories")}>
                <span>5900</span>
                <h6>Total Order</h6>

                <ShoppingBasketOutlinedIcon style={{position :'absolute', right: '10px', bottom : '10px', fontSize : '100px', color : '#ceebee', zIndex: '1', opacity: '0.8'}}/>

            </SmallCards>
            <SmallCards style={{backgroundColor : '#2ed8f3'}} onClick={() => navigate("/users")}>
                <span>999</span>
                <h6>Total Revenu</h6>

                <ShoppingBasketOutlinedIcon style={{position :'absolute', right: '10px', bottom : '10px', fontSize : '100px', color : '#ceebee', zIndex: '1', opacity: '0.8'}}/>
            </SmallCards>
            <SmallCards onClick={() => navigate("/users")}>
                <span>19</span>
                <h6>New Product</h6>
                <ShoppingBasketOutlinedIcon style={{position :'absolute', right: '10px', bottom : '10px', fontSize : '100px', color : '#ceebee', zIndex: '1', opacity: '0.8'}}/>
            </SmallCards>
        </MainContent>

    </Container>

    </>
  )
}

export default Cards
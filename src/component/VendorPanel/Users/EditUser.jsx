import React from 'react'
import styled from 'styled-components'
import {useLocation} from 'react-router-dom'
import HOC from '../Vendor/HOC'
import { ContainerS } from '../Vendor/CommonStyling'
import Header from '../Vendor/Header'





const MainContainer = styled.div`

    width: 100%;
    display: flex;
    align-items:center ;
    justify-content: center;

`
const Wrapper = styled.div`
    width: 100%;
    /* display: flex; */
    /* flex-direction: column; */
    border: 1px solid #9e9e9e ;
    padding: 20px;
    border-radius: 5px;

    input, textarea {
        margin-bottom: 10px;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 20px;
    }

    span{
      color: #2d2b5a;
      margin-left: 10px;
    }
    -webkit-box-shadow: 8px 8px 7px -6px rgba(48,47,48,1);
    -moz-box-shadow: 8px 8px 7px -6px rgba(48,47,48,1);
    box-shadow: 8px 8px 7px -6px rgba(48,47,48,1);

`

// const BtnDiv = styled.div`
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     button{
//         float: right;
//         width: 119px;
//         padding: 5px 0;
//         border: none;
//         background-color: #9e9af0;
//         color: #fff;
//         cursor: pointer;
//         border-radius: 4px;
//     }
// `

const Image = styled.div`
  width: 180px;
  height: 180px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 50%; 

  img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }
`
const CardDetails =  styled.div`

    user-select: none; /* supported by Chrome and Opera */
   -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
   -moz-user-select: none; /* Firefox */
   -ms-user-select: none; /* Internet Explorer/Edge */
   -webkit-touch-callout: none; // Disable Android & iso long press: ;
   margin: 20px 0;
   display: flex;
   flex-direction: column;
   width: 50%;
   padding: 10px;

   h4{
     color: #075d71;
     font-size: 1.3rem;
     font-weight: 700;
   }



   @media screen and (max-width: 768px) {
    width: 100%;

   }

   h5{
     display: flex;
     font-size: 0.9rem;
     color: #aa5b00;
     width: 100%;

     p{
         min-width: 100px;
         /* border: 1px solid ;  */
     }

     span{
         width: 100%;

        input, textarea{

            padding: 4px 10px;
            width: 100%;
            border-radius: 4px;
            border: 1px solid #ccc;
            
            }
     }

    
   
   }
`
const DetailsWrapper  = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  button{
      padding: 6px 40px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      background-color: #9e9af0;
      color: #fff;
  }
`

const EditVendor = () => {

  const location = useLocation()
  const name = location.state.name
  const email = location.state.email
  const img = location.state.img

  return (
    <>
        <ContainerS>
        <Header cname={"Edit Vendor"}/>
  
            <MainContainer>
              
            <Wrapper>
                <Image>
                  <img src={img} alt="" />
                  <input type="file" accept='image/*' />
                </Image>
                <DetailsWrapper>

                    <CardDetails>

                      <h4> Details</h4>
                      <h5> <p>Name :</p>  <span> <input type="text" value={name} /> </span>  </h5>
                      <h5> <p>Phone No:</p> <span> <input type="text" /> </span></h5>     
                      <h5> <p>Email :</p> <span> <input type="text" value={email} /></span></h5> 
        
                    </CardDetails>
                    <CardDetails>
                      <h4>Address</h4>
                      <h5><p>Address : </p> <span> <textarea type="text" /> </span>  </h5>
                      <h5 > <p>Country :</p> <span> <input type="text" /> </span>  </h5>
                      <h5> <p>City  :</p> <span> <input type="text" /></span>       </h5>
                      <h5> <p>State :</p> <span> <input type="text" /> </span>      </h5>
                      <h5> <p>Pin :</p> <span> <input type="text" /> </span>       </h5>
                    </CardDetails>  

                    <button>Save</button>
                      
                </DetailsWrapper>  
      
            </Wrapper>
        </MainContainer>
        </ContainerS>
    </>
  )
}

export default HOC(EditVendor)
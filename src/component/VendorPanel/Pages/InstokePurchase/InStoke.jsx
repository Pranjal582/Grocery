import React from 'react'
import styled from 'styled-components'



const Wrapper = styled.div`

  width: 100%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 1px solid #ccc;
  border-radius: 7px;

  @media screen and (max-width: 568px) {

    width: 100%;

  }
`

const SmallContainer = styled.div`
  width: 120px;
  height: 180px;
  border: 1px solid green;
  overflow: hidden;
  border-radius: 5px;
  padding: 5px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin-bottom:  10px;

  :hover {
    transform: scale(1.1);
  }

  p{
    font-size: .81rem;
    padding: 0;
    margin: 0;
  }
`

const ImgContainer = styled.div`
  width: 100%;
  height: 70%;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const InStoke = () => {

  const data = [
    {
      id: 1,
      img: "data:image/jpeg;base64,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",
      name: "Product name",
      inStoke : '15',
      prices : "rs 15,999"
      
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/61TnX0PmqES._SX569_.jpg",
      name: "Product name",
      inStoke : '15',
      prices : "rs 15,999"

    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqCINgD7YqQO9YjIqyO8ew0Qm5natrkkb_y8gKTYlliyEGDE4ydbCP7i6lHluKOdAvQU&usqp=CAU",
      name: "Product name",
      inStoke : '15',
      prices : "rs 15,999"

    },
    {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGXWyZGtVKGS3qVxo2TQKrDiD0kqdkGF_OA&usqp=CAU",
      name: "Product name",
      inStoke : '15',
      prices : "rs 15,999"

    },
    {
      id: 5,
      img: "https://d316acfc88wber.cloudfront.net/global/phones/spark8T/SPARK8T-blue.png",
      name: "Product name",
      inStoke : '15',
      prices : "rs 15,999"

    },
    {
      id: 6,
      img: "data:image/jpeg;base64,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",
      name: "Product name",
      inStoke : '15',
      prices : "rs 15,999"

    },
  ]

  return (
    <>
      <Wrapper>
        
        {data.map((data)=>{
          return(
            <SmallContainer key={data.id}>
            <ImgContainer>
            <img src= {data.img} alt="" />
            </ImgContainer>
            <p>{data.name} </p>
            <h6> inStoke : {data.inStoke}  </h6>
            <p style={{marginTop: '-10px'}} > Prices : {data.prices}  </p>
          </SmallContainer>
          )
        })}
       
         
    
      </Wrapper>
    </>
  )
}

export default InStoke
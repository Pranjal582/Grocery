import React from 'react'
import HOC from '../SalesCommon/HOC'
import {ContainerS  } from '../SalesCommon/CommonStyling'
import Header from '../SalesCommon/Header'
import styled from 'styled-components'
import { data } from './data'


const MainContainers =  styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`

const SmallContainers = styled.div`
  width : 230px ;
  height: 300px;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ;
  margin: 10px 0;
  
  :nth-child(even){
    margin: 10px 30px;
  }

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  :hover{
    transform: scale(1.1);
  }
`

const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
 

 
  }
  button{
    border: none;
    background: #00bcd4;
    border-radius: 10px;
    cursor: pointer;
    color: #fff;

    &:nth-child(2){
   background-color: #ff0000;


  }
`

const SalesDocuments = () => {

  const handleClick = (e) => {
    setCurrent(Number(e.target.id));
  }

  const [current , setCurrent] = React.useState(1)
  const [itemper , setitemper] = React.useState(8)

  const pages= [];
  for(let i=1; i<=Math.ceil(data.length/itemper); i++){
    pages.push(i);
  }

  const IndexOfLastPage = current * itemper;

  const indexOfFirstPage = IndexOfLastPage - itemper;
  const currentPage = data.slice(indexOfFirstPage, IndexOfLastPage);

  const renderPage = pages.map(number=>{
    return(
      <li className={currentPage === number ? 'active' : null} key={number} id={number} onClick={handleClick}>{number}</li>
    )
  })


  return (
    <>
        <ContainerS>
          <Header cname={'All Documents'} />
          <MainContainers>
         

          {currentPage.map((item,index)=>{
            return(

              <SmallContainers>
                <img src="data:image/jpeg;base64,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" alt="" />
              <Button>
                <button>Edit </button>
                <button> Delete</button>
              </Button>
              </SmallContainers>
            )
          })}
          </MainContainers>

          <ul className="pageNumber">

          {renderPage}

          </ul>

          

        </ContainerS>
    </>
  )
}

export default HOC(SalesDocuments)
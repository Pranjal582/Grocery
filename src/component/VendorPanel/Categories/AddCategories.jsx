import React from 'react'
import { ContainerS } from '../Vendor/CommonStyling'
import HOC from '../Vendor/HOC'
import styled from 'styled-components'
import Header from '../Vendor/Header'

const MainContainer = styled.div`
    width: 100%;
    padding: 0px 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h5{
        text-align: center;
        margin-bottom: 20px;
        font-size: 1rem;
        font-weight: 500;
        margin: 20px 0;
    }

`
const Wrapper = styled.div`
    width: 70%;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 6px;

    button{
        width: 100%;
        padding: 4px 0;
        border-radius: 3px;
        border: none;
        background-color: #308dea;
        color: #fff;
    }

  

    @media screen and (max-width: 578px) {
        width: 100%;
    }

    select,input{
        width: 100%;
        outline : none;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 7px 10px;
        margin: 10px 0 ;
    }
`

const AddCategories = () => {
  return (
    <>
    <ContainerS>
        <Header cname={"Add-Categories"}/>
        <MainContainer>
            <Wrapper>
                <h5>Add Category</h5>
                <span>
                    Category Name
                </span>
                <input type="text" />

                <button>Add a Categories</button>
                
            </Wrapper>
            <h5>Add Sub-Category</h5>
            <Wrapper>
           
                <span>
                    Category Name
                </span>
                <select>
                    <option value="1">Select Parent-category</option>
                    <option value="2"> Parent-category</option>
                    <option value="3"> Parent-category</option>
                    <option value="4">Parent-category</option>
                    <option value="5"> Parent-category</option>
                </select>
                <span>
                    Sub-Category Name
                </span>
                <input type="text" />

                <button>Add a Sub-Categories</button>

            </Wrapper>


        </MainContainer>

    </ContainerS>

    </>
  )
}

export default HOC(AddCategories)
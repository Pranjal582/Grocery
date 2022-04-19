import React from 'react'
import {ContainerS} from '../../Vendor/CommonStyling'
import Header from '../../Vendor/Header'
import HOC from '../../Vendor/HOC'
import Statistics from './Statistics'
import styled from 'styled-components'


const MainContainer = styled.div`

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 6px;
    -webkit-box-shadow: 1px 2px 3px 0px rgba(59,59,59,1);
    -moz-box-shadow: 1px 2px 3px 0px rgba(59,59,59,1);
    box-shadow: 1px 2px 3px 0px rgba(59,59,59,1);
    
`


const LeftSide = styled.div`
    width: 25%;
    padding: 10px;

    @media screen and (max-width: 678px) {
        width: 100%;
    }
`
const RightSide = styled.div`

    width: 75%;
    padding: 10px;

    @media screen and (max-width: 678px) {
        width: 100%;
     }

    h5{
        text-align: center;
        color: #122151;
    }
`
const LeftWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin: 20px 0;
    

    .content{

        h4{
            font-size: 1rem;
            font-weight: 500;
            color: #21b53f;
        }
        h3{
            font-size: 1.356rem;
            font-weight: 600;
            color: #0f3159;
        }
    }

    img{

        width: 90px;
        height: 90px;
        margin-right: 20px;     
     }
`
    
    const RightWrapper = styled.div`


    `

const SalesReport = () => {
  return (
    <>
        <ContainerS>
            <Header cname={"Sales Report"} />
            <MainContainer>
                <LeftSide>
                    <LeftWrapper>
                        <img src="data:image/png;base64,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" alt="" />
                        <div className='content'>
                            <h3>$ 5780</h3>
                            <h4>Last Week Sale</h4>
                        </div>
                    </LeftWrapper>
                    <LeftWrapper>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjjRU3Xcw48fqmjhFfv0GlTM0euPNBWojeQ&usqp=CAU" alt="" />
                        <div className='content'>
                            <h3>$ 57,080</h3>
                            <h4>Last Month Sale</h4>
                        </div>
                    </LeftWrapper>
                    <LeftWrapper>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1g53oYeWxoqzuf8P4KuuhiQyfa1goGQae8rzGpc86c2vo2DG6-dTtgzBfWIn1LNB_r-c&usqp=CAU" alt="" />
                        <div className='content'>
                            <h3>$ 570,9080</h3>
                            <h4>Last Year Sale</h4>
                        </div>
                    </LeftWrapper>
                </LeftSide>
                <RightSide>
                    <RightWrapper>
                        <h5>Revenu</h5>
                        <Statistics/>
                    </RightWrapper>
                </RightSide>
            </MainContainer>
        

        </ContainerS>
    </>
  )
}

export default HOC(SalesReport)
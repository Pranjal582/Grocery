import React from 'react'


import styled from 'styled-components'

const NotificationContainer = styled.div`

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`

const Wrapper = styled.div`
width: 1005%;
min-height: 100px;
padding: 10px;
border: 1px solid lightblue;
border-radius: 5px;

.span{
    display: flex;

    &:nth-child(2){
        p,h5{
            color: #ac0000;

        }
       

        }

    h5{
        color: blue;
        min-width: 150px;
    }

    p{
        margin-left: 10px;
        color: #424242;
        font-weight: 500;
    }
    
}

@media screen and (max-width: 568px){
    width: 100%;
    margin-bottom: 20px;
}

`

const SuppliersReturn = () => {
  return (
    <>
        <NotificationContainer>
            <Wrapper>
                <div className='span'> <h5>  Product Name  </h5> : <p> Product 1 </p> </div>
                <div className='span'> <h5>  Quentity  </h5> : <p>  1 </p> </div>        
                <div className='span'> <h5>  Price  </h5> : <p>  15999 </p> </div>        
                <div className='span'> <h5>  Description  </h5> : <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores officia, necessitatibus aspernatur nisi ipsam facere voluptates velit? Incidunt id quam veritatis fugit sint itaque voluptatum dignissimos illo! Ex, dolores. </p> </div>        
                <div className='span'> <h5>  Return Reason  </h5> : <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolores officia, necessitatibus aspernatur nisi ipsam facere voluptates velit? Incidunt id quam veritatis fugit sint itaque voluptatum dignissimos illo! Ex, dolores. </p> </div>        
            </Wrapper>
        </NotificationContainer>

    </>
  )
}

export default SuppliersReturn
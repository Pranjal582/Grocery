import React from 'react'
import styled from 'styled-components'




const Containers = styled.div`
  
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0;
`

const LeftSide = styled.div`

  width: 30%;
  
`

const Middle = styled.div`
width: 40%;
border: 1px solid yellow;
border-radius: 6px;

`

const RightSide = styled.div`
width: 30%;

`


const Report = () => {
  return (
    <>   
      <Containers>
        <LeftSide>

        </LeftSide>
        <Middle>
     

        </Middle>
        <RightSide>

        </RightSide>
      </Containers> 
    </>
  )
}

export default Report
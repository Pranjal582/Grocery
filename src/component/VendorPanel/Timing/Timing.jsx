import React from 'react'
import { ContainerS } from '../Vendor/CommonStyling'
import Header from '../Vendor/Header'
import HOC from '../Vendor/HOC'
import styled from 'styled-components'


const MainContainers = styled.div`

display: flex;
flex-wrap: wrap-reverse;


`

const Wrapper = styled.ul`
margin: 30px 0;
list-style: none;
padding: 10px ;
width: 50%;
border: 1px solid;
border-radius: 4px;


span{
    
}
li{
    justify-content: space-between;
    display: flex;
    align-items: center;
}
p{
    min-width: 90px;
}

@media screen and (max-width: 578px) {

    width: 100%;
}

button{
    width: 199px;
    padding: 5px 0;
    border: none;
    border-radius: 3px;
    color: #fff;
    background-color: #045b16;
    cursor: pointer;
    margin: 20px 0;
}

`

const Timeing = () => {
  return (
    <>
    <ContainerS>

        <Header cname={"Opening & Closing Time"}/>

        <MainContainers>
            <Wrapper>
                
            <li> <p>Monday</p>  <span> <input type="time" />  </span>  to <span> <input type="time" /></span> </li>
            <li> <p>Tuesday</p>  <span> <input type="time" />  </span>  to <span> <input type="time" /></span></li>
            <li> <p>Wednesday</p> <span> <input type="time" />  </span>  to <span> <input type="time" /></span></li>
            <li> <p>Thursday</p> <span> <input type="time" />  </span>  to <span> <input type="time" /></span></li>
            <li> <p>Friday</p> <span> <input type="time" />  </span>  to <span> <input type="time" /></span> </li>
            <li> <p>Saturday</p> <span> <input type="time" />  </span>  to <span> <input type="time" /></span></li>
            <li> <p>Sunday</p> <span> <input type="time" />  </span>  to <span> <input type="time" /></span></li>
            
                <button>Save</button>
            
            </Wrapper>
            <Wrapper>
            <li> <p>Monday</p>  <span> 09:30 AM </span>  to <span> 10 : 00 PM </span> </li>
            <li> <p>Tuesday</p>  <span> 09:30 AM </span>  to <span> 10 : 00 PM </span> </li>
            <li> <p>Wednesday</p>  <span> 09:30 AM </span>  to <span> 10 : 00 PM </span> </li>
            <li> <p>Thursday</p>  <span> 09:30 AM </span>  to <span> 10 : 00 PM </span> </li>
            <li> <p>Friday</p>  <span> 09:30 AM </span>  to <span> 10 : 00 PM </span> </li>
            <li> <p>Saturday</p>  <span> 09:30 AM </span>  to <span> 10 : 00 PM </span> </li>
            <li> <p>Sunday</p>  <span> 09:30 AM </span>  to <span> 10 : 00 PM </span> </li>
        


            </Wrapper>

        </MainContainers>

    </ContainerS>
    </>
  )
}

export default HOC(Timeing)
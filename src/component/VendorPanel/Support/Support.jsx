import React from 'react'
import { ContainerS } from '../Vendor/CommonStyling'
import styled from 'styled-components'
import HOC from '../Vendor/HOC'
import Header from '../Vendor/Header'

const MainContainers = styled.div`
    width: 100%;
    display: flex;

    justify-content: center;
    padding: 20px;
    flex-wrap: wrap;
`

const Wrapper = styled.div`
    width: 50%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;


    @media screen and (max-width: 578px) {
        width: 100%;
    }

.bhag{
    display: flex;

    

    p{
        min-width: 90px;
    }

    span{
        margin-left: 10px;
    }
}

h5{
    margin-bottom: 20px;
}

//reghtside

input{
    width: 100%;
}

h4{
    font-size: 1rem;
    font-weight: 500;

}

button{
    width: 100%;
    margin-top: 20px;
    border: none;
    color: #fff;
    background-color: #308dea;
    border-radius: 4px;
    padding: 7px 0;
}
    

`

const Support = () => {
    const [address , setAddress] = React.useState('')
    const [number , setNumber] = React.useState('')
    const [email , setEmail] = React.useState('')

    const [header , setHeader] = React.useState('If you have any query or need help, please contact us at')
  return (
    <>
    <ContainerS>
        <Header cname={"Support"}/>
        <MainContainers>
            <Wrapper>
                <h5>If you have any query or need help, please contact us at</h5>
                <div className='bhag'>
                    <p>Address</p>
                    :
                    <span>New Delhi</span>
                </div>
                <div className='bhag'>
                    <p>Phone No</p>
                    :
                    <span> +91 9876543210</span>
                </div>
                <div className='bhag'>
                    <p>Email</p>
                    :
                    <span>test@abcTechnology.com </span>
                </div>

            </Wrapper>
            <Wrapper>
                <h5>Update Support Details</h5>
                <h4>Header</h4>
                <input type="text" value={header} 
                onChange={(e)=>setHeader(e.target.value)} />
                <h4>Address</h4>
                <input type="text" value={address} 
                onChange={(e)=>setAddress(e.target.value)} />
                <h4>Phone No</h4>
                <input type="number" value={number} 
                onChange={(e)=>setNumber(e.target.value)} />
                <h4>Email</h4>
                <input type="email" value={email} 
                onChange={(e)=>setEmail(e.target.value)} />

                <button>Save</button>


            </Wrapper>
        </MainContainers>
    </ContainerS>

    </>
  )
}

export default HOC(Support)
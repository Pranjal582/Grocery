
import { ContainerS } from '../Vendor/CommonStyling'
import HOC from '../Vendor/HOC'
import styled from 'styled-components'
import Header from '../Vendor/Header'
import {  useNavigate } from 'react-router'

const MainContainer = styled.div`

width: 100%;
margin: 10px 0;

button{
    color: #fff;
    border: none;
    border-radius: 3px;
     
    :nth-child(1){
        background-color: #21b53f;
    }
    :nth-child(2){
        background-color: #5b5dfe;
    }
    :nth-child(3){
        background-color: #ff0037;
    }
}

    
`

const Categories = () => {

    const navigate = useNavigate()



  return (
    <>
        <ContainerS>
            <Header cname={"Categories"} btn={"Add-Category"} needaddbtn={true} pathname="/vendor/create-categories"/>
            <MainContainer>
            <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Categories Name</th>

      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>
          <button  onClick={()=>navigate('/vendor/category-details')}>View Sub-categories</button>
          <button style={{margin:"0 40px"}} onClick={()=>navigate('/vendor/edit-categories')} >Edit </button>
          <button>Delete</button>
      </td>
      
    </tr>

  </tbody>
</table>
                
                
            </MainContainer>
        </ContainerS>
    </>

  )
}

export default HOC(Categories)
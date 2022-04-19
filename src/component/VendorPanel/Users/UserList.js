
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router'


const UseList = () => {

  const navigate = useNavigate()

  const data = [
    {
      id : 1,
      name :"Full Name",
      email : "test@gmail.com",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFHuhglF2CsQlcDZnlhFR4wmCPe6vypsSnZNlMDeu21rnQKI5BQys5Ff5ddat9TjQLV44&usqp=CAU",
      nameOncard : "Test 1",
      cardNumber : "1234-5678-9012-3456",
      expiryDate : "12/20",
      cvv : "123",
  },
    {
      id : 2,
      name :"Full Name",
      email : "test@gmail.com",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsK6oIKzeSCKiqpjv5cuoC4ZC_hJ0FxNkvQ&usqp=CAU",
      nameOncard : "Test 2",
      cardNumber : "1234-5678-9012-3456",
      expiryDate : "12/20",
      cvv : "123",
  },
    {
      id : 3,
      name :"Full Name",
      email : "test@gmail.com",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpyVv0yPolQXIK8pO1Fb9OttQRSClAaTxwI7EEFNhyVXvRTXgEU5QPbQEsuBsdK0aooUE&usqp=CAU",
      nameOncard : "Test 3",
      cardNumber : "1234-5678-9012-3456",
      expiryDate : "12/20",
      cvv : "123",
  },
  ]

  
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
   
            <th>Profile Image</th>
            <th>Name</th>
  
            <th>Email</th>        
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {data.map((data=>(

          <tr key={data.id} >
      
            <td>
              <img src={data.img} alt="" style={{width:"50px" , height:"50px", borderRadius:"999px", objectFit:"cover"}}/>
               </td>
            <td>{data.name} </td>
   
            <td>{data.email} </td>
           
            <td>
              <button 
                onClick={()=>navigate('/vendor/users-details',{state:data})}
               style={{border: 'none', cursor:"pointer", backgroundColor:"green", color:"#fff",margin: '0 10px'}}>View</button>
              <button 
                onClick={()=>navigate('/vendor/users-edit',{state:data})}
               style={{border: 'none', cursor:"pointer", backgroundColor:"green", color:"#fff",margin: '0 10px'}}>Edit</button>
              <button style={{border: 'none', cursor:"pointer", backgroundColor:"red", color:"#fff"}}>Delete</button>
            </td>
          </tr>

          )))}
        </tbody>
      </Table>
    
    </>
  )
}

export default UseList
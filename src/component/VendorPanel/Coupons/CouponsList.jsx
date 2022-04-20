

import {useNavigate} from 'react-router'














const CouponList = () => {


  //api -integrations get data

  // const url = 'https://we-fast-flyweis.herokuapp.com/coupon/all'

  // const token = (localStorage.getItem('token'))
  // const [data, setdata] = useState([])

  // let config = {
  //   headers: {"Authorization" : `Bearer ${token}`}
  // }

  // // const GetCoupons = async ()=>{
  

  //   try{ 
  //     const data = await axios.get(url,config)
  //     console.log('mydata::',data.data.data.coupons)
  //     setdata(data.data.data.coupons)

  //   }catch(e){
  //     console.log("lol error::",e)
  //   }
    
  // }

  // delete data from database

  // const handleDelete = async (id)=>{

  //  try{
  //     const res = await axios.delete("https://we-fast-flyweis.herokuapp.com/coupon/"+id,config)
  //     console.log("delete::",res)
  //     GetCoupons();
  //   }catch(e){
  //     console.log("All error:::",e)
  //   }

  // }

  // useEffect(()=>{
  //   GetCoupons();

  // },[])

  const navigate = useNavigate()

  
  const data = [
    {
      id : 1,
      couponCode: 'SDET-2020',
      discountPercentage : '10',

    },
    {
      id : 2,
      couponCode: 'SDET-2020',
      discountPercentage : '10',

    },
    {
      id : 12,
      couponCode: 'SDET-2020',
      discountPercentage : '10',

    },
    {
      id : 11,
      couponCode: 'SDET-2020',
      discountPercentage : '10',

    },
    {
      id : 10,
      couponCode: 'SDET-2020',
      discountPercentage : '10',

    },
  ]


  // const data = [
  //   {
  //     id: 1,
  //     couponCode: 'SDET-2020',
  //     discountPercentage : '10',

  //   }
  // ]



  return (
    <>
    <table class="table">

            {/* <------------header----------------> */}
      <thead class="thead-dark">
        <tr>
         
          <th scope="col">Coupon Code</th>
          <th scope="col">Total Discount</th>
          <th scope="col">Valid From</th>
          <th scope="col">Valid To</th>
          
          <th scope="col">Action</th>
        </tr>
      </thead>

      {/* <--------------Body-data------------> */}
      <tbody>
        {data.map((item)=>(

        <tr key={item.id}>
        
          <td>{item.couponCode}</td>
          <td>{item.discountPercentage}%</td>
          <td>{item.validFrom}</td>
    
          <td>{item.validTill} </td>
          <td>
            {/* <button onClick={handleClickOpen} style={{border: 'none', cursor : 'pointer',backgroundColor: '#10b0ef', color:'#fff' }}>View</button> */}
            <button onClick={()=>navigate('/vendor/edit-coupon', {state:item})} style={{margin : '0 10px',border: 'none', cursor : 'pointer',backgroundColor: '#54ef9c', color:'#fff' }}>Edit</button>
            <button   style={{border: 'none', cursor : 'pointer',backgroundColor: 'red', color:'#fff' }}>delete</button> 
            {/* onClick={()=>handleDelete(item.id)} */}
          </td>
        </tr>
        ))}
    
      </tbody>
    </table>

    {/* <----------Dialog Box ------------------> */}
    

     

    </>
  )
}

export default CouponList
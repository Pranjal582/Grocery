import { borderRadius, color } from '@mui/system'
import React from 'react'
import {ContainerS} from '../Vendor/CommonStyling'
import HOC from '../Vendor/HOC'
import { TransactionData } from './Data'

const TransactionList = () => {
  return (
    <>
    <ContainerS>
        <table class="table">
        <thead class="bg-info">
          <tr>
            <th scope="col">#</th>
            <th scope="col">user</th>
            <th scope="col">Date</th>
            <th scope="col">amount</th>
            <th scope="col">transationsId</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>

          {TransactionData.map((data=>(
          <tr key={data.id}>
            <th scope="row">{data.id} </th>
            <td>@{data.name} </td>
            <td> {data.date}  </td>
            <td> {data.amount} </td>
            <td> # {data.tId}</td>
            <td> 
                <span style={{backgroundColor: data.status === true ? "green" : '#f45' , padding:'2px 10px', borderRadius: '10px',color:'#fff' }} >    
                  {data.status === true ? 'paid' : 'failed'}   
                </span>
            </td>
            <td>
              <button 
              style={{backgroundColor: 'red',
              color:'#fff', borderRadius: '4px',
                padding: '0px 7px', border:'0'}} >
              delete</button>
            </td>
          </tr>
          )))}

        </tbody>
      </table>  
    </ContainerS>

    </>
  )
}

export default HOC(TransactionList)
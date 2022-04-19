import React from 'react'
import Header from '../Vendor/Header'
import styled from 'styled-components'
import { ContainerS } from '../Vendor/CommonStyling'
import HOC from '../Vendor/HOC'


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const MainContainer = styled.div`

    width: 100%;
    padding: 10px ;

    h6{
        width: 70%;
        display: flex;

      p{

        min-width: 130px;
        margin-right: 10px;
    }

    @media screen and (max-width: 600px)
        {
          width: 100%;
          border: 1px solid;
        }
     }

    h5{
        margin-top: 40px;
    }
  

`

const SubCate = styled.div`
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;

    button{
        color: #FFF;
        background-color: #308dea;
        border: none;
        border-radius: 4px;

        :nth-child(2){
            margin-left: 20px;
            background-color: red;
        }     
    }

`

const SingleCategoriesDetails = () => {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [names , setnames] = React.useState();

    console.log(names)
  
    const handleClickOpen = (item) => {
      setOpen(true);
      setnames(item.name)
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const data = [
      {
        id: 1,
        name: 'sub16'
      },
      {
        id: 12,
        name: 'sub13'
      },
      {
        id: 11,
        name: 'sub11'
      },
      {
        id: 10,
        name: 'sub12'
      },
    ]
  


  return (
    <>
    <ContainerS>
        <Header cname={"Category-Details"}/>
        <MainContainer>

            <h6><p>Category Name </p>: Category 1 </h6>
            <h6><p>Description </p>: Category  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit officia doloremque nobis distinctio, perferendis accusantium dolorem ipsa, adipisci inventore recusandae natus aperiam fugiat commodi, quas molestiae similique aliquam soluta error!
             </h6>
             <h5>Sub-categories</h5>

               <SubCate>

             <table class="table table-sm">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Sub-Categories</th>
                        <th scope="col">Actions</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                      {data.map((item=>(

                        <tr key={item.id}>
                        <th scope="row">{item.id} </th>
                        <td>{item.name} </td>
                        <td>
                            <button onClick={()=>handleClickOpen(item)} >Edit</button>
                            <button>Delete</button>
                        </td>                    
                        </tr>     
                      )))}
                    </tbody>
                    </table>
             </SubCate>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title"  >
          {"Edit Sub-category"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
              <input       
              type="text"style={{minWidth: '300px' ,padding: '7px 10px', borderRadius:"4px"}} value={names} onChange={(e)=>setnames(e.target.value)} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} autoFocus>
           Save
          </Button>
        </DialogActions>
      </Dialog>
        </MainContainer>
    </ContainerS>
    </>
  )
}

export default HOC(SingleCategoriesDetails)